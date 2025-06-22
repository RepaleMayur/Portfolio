import fs from 'fs-extra';

try {
  fs.copySync('dist/index.html', 'dist/404.html');
  console.log('✅ 404.html copied successfully');
} catch (error) {
  console.error('❌ Failed to copy 404.html:', error);
}
