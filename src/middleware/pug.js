import path from 'path';
import views from 'koa-views';
import config from '../config';

export default () => (
  views(path.join(__dirname, '../../resources/templates'), {
    map: {
      html: 'pug',
    },
    options: {
      pretty: config.env === 'development',
      app: {
        env: config.env,
        name: process.env.APP_NAME,
        locale: process.env.LOCALE,
      },
    },
    extension: 'pug',
  })
);
