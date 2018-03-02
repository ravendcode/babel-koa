import path from 'path';
import Koa from 'koa';
import morgan from 'koa-morgan';
import mount from 'koa-mount';
import koaStatic from 'koa-static';
import config from '../config';
import errorMdw from '../middleware/error';
import pugMdw from '../middleware/pug';
import spaRenderMdw from '../middleware/spa';

const app = new Koa();

// app.context.db = db();

app.use(errorMdw);
app.use(morgan(config.env === 'production' ? 'short' : 'dev'));
app.use(koaStatic(path.join(__dirname, '../../public')));
app.use(mount('/node_modules', koaStatic(path.join(__dirname, '../../node_modules'))));
app.use(mount('/static', koaStatic(path.join(__dirname, '../../resources/static'))));
app.use(pugMdw());
app.use(config.routes.apiRouter.routes());
app.use(config.routes.apiRouter.allowedMethods());
// app.use(config.routes.renderRouter.routes());
// app.use(config.routes.renderRouter.allowedMethods());
// if true render pug page/index else send file public/index.html
app.use(spaRenderMdw(false));

export default app;