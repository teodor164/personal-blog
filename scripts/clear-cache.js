const path = require('path');
const fs = require('fs');

const cacheDir = path.resolve(__dirname, '..', 'node_modules', '.cache');

fs.rmSync(cacheDir, { recursive: true, force: true });
