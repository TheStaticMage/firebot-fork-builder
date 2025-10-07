const version = process.argv[2];
const { writeFileSync } = require('fs');
const path = require('path');
const outputFile = path.resolve(__dirname, '../../src/shared/patch-version.js');
writeFileSync(outputFile, `// This file is auto-generated during build. Do not edit manually.
module.exports = "${version}";
`, 'utf-8');
