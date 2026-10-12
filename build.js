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

  const imgDir = path.join(targetPath, 'images');
  if (!fs.existsSync(imgDir)) {
    fs.mkdirSync(imgDir, { recursive: true });
  }
  const photoSrc = path.join(__dirname, 'images', 'bella-photo.jpg');
  if (fs.existsSync(photoSrc)) {
    fs.copyFileSync(photoSrc, path.join(imgDir, 'bella-photo.jpg'));
  }
});

console.log('Build completed successfully: all files synced to public/ and dist/');
