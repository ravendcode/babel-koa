import fs from 'fs';
import path from 'path';

export default (render = false) => (
  async (ctx) => {
    if (render) {
      await ctx.render('page/index', { title: 'Home' });
    } else {
      const filePath = path.join(__dirname, '../../public/index.html');
      const stat = fs.statSync(filePath);
      ctx.res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'Content-Length': stat.size,
      });
      const readStream = fs.createReadStream(filePath);
      ctx.body = readStream;
    }
  }
);
