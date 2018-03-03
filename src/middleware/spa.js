import fs from 'fs';
import path from 'path';
import config from '../config';

export default async (ctx) => {
  const filePath = path.join(config.publicDir, 'index.html');
  const stat = fs.statSync(filePath);
  ctx.res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
    'Content-Length': stat.size,
  });
  const readStream = fs.createReadStream(filePath);
  ctx.body = readStream;
};
