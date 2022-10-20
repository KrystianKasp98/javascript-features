const express = require('express');
const fs = require('fs');

const app = express();

app.get('/video', (req, res) => {
  const {range} = req.headers; // bytes 7878
  const videoPath = './test.mp4';
  const videoSize = fs.statSync(videoPath).size;

  const chunkSize = 1 * 1e+6;
  const start = Number(range.replace(/\D/g, '')); // replace all chars
  const end = Math.min(start + chunkSize, videoSize - 1); // protect from failed sending data(when full video has been sent)

  const contentLength = end - start + 1;

  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": 'bytes',
    "Content-Length": contentLength,
    "Content-Type": 'video/mp4'
  };
  res.writeHead(206, headers);// 206 means it's partialed content

  const stream = fs.createReadStream(videoPath, {start, end});
  stream.pipe(res);
});

app.listen('3000');