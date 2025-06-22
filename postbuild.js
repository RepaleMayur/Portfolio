// postbuild.js
import fs from 'fs-extra';

fs.copySync('dist/index.html', 'dist/404.html');
