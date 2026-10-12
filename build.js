const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, 'dist');
if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist, { recursive: true });
}

const files = ['index.html', 'style.css', 'README.txt', 'vercel.json'];
files.forEach(f => {
  const src = path.join(__dirname, f);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(dist, f));
  }
});

const imgDir = path.join(dist, 'images');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}
if (fs.existsSync(path.join(__dirname, 'images', 'bella-photo.jpg'))) {
  fs.copyFileSync(
    path.join(__dirname, 'images', 'bella-photo.jpg'),
    path.join(imgDir, 'bella-photo.jpg')
  );
}

console.log('Build completed successfully: all files synced to dist/');
