const path = require('path');
const { randomBytes } = require('crypto');
const { appendFileSync, readFileSync } = require('fs');
const { execSync } = require('child_process');

const githubRunNumber = process.env.GITHUB_RUN_NUMBER;
if (!githubRunNumber) {
    throw new Error('GITHUB_RUN_NUMBER environment variable is not set');
}

const root = path.resolve(__dirname, '../../');

const outfile = process.argv.slice(2).join(' ');
const output = (key, value) => {
    let data = "";
    if (/[\r\n]/.test(value)) {
        const delimiter = randomBytes(32).toString('base64');
        data = `${key}<<${delimiter}\n${value}\n${delimiter}`
    } else {
        data = `${key}=${value}`
    }

    appendFileSync(outfile, data + '\n', { encoding: 'utf-8' });
}

// Get short git SHA of the upstream repo
let upstreamSha = '';
try {
    upstreamSha = execSync('git rev-parse --short HEAD', { cwd: root, encoding: 'utf-8' }).trim();
} catch (e) {
    upstreamSha = 'unknown';
}

// Get short git SHA of the current repo
let forkBuilderSha = '';
try {
    forkBuilderSha = execSync('cd fork-builder && git rev-parse --short HEAD', { cwd: root, encoding: 'utf-8' }).trim();
} catch (e) {
    forkBuilderSha = 'unknown';
}

// deduce full version
const packagePath = path.resolve(root, './package.json');
const package = JSON.parse(readFileSync(packagePath, 'utf-8'));
const baseVersion = package.version.split("-")[0];
const version = `${baseVersion}_Mage${githubRunNumber}`;

output('baseVersion', baseVersion);
output('version', version);
output('upstreamSha', upstreamSha);
output('forkBuilderSha', forkBuilderSha);
