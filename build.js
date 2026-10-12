const fs = require('fs');
const path = require('path');

const targets = ['public', 'dist'];

targets.forEach(targetDir => {
  const targetPath = path.join(__dirname, targetDir);
  if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath, { recursive: true });
  }

  const files = ['index.html', 'style.css', 'README.txt', 'vercel.json'];
  files.forEach(f => {
    const src = path.join(__dirname, f);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(targetPath, f));
    }
  });

  const srcImgDir = path.join(__dirname, 'images');
  const targetImgDir = path.join(targetPath, 'images');
  if (!fs.existsSync(targetImgDir)) {
    fs.mkdirSync(targetImgDir, { recursive: true });
  }
  if (fs.existsSync(srcImgDir)) {
    fs.readdirSync(srcImgDir).forEach(imgFile => {
      fs.copyFileSync(path.join(srcImgDir, imgFile), path.join(targetImgDir, imgFile));
    });
  }
});

console.log('Build completed successfully: all files and images synced to public/ and dist/');
