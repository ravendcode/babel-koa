import Koa from 'koa';
import morgan from 'koa-morgan';
import mount from 'koa-mount';
import koaStatic from 'koa-static';
import bodyParser from 'koa-bodyparser';
import config from './config';
import errorMdw from './middleware/error';
import pugMdw from './middleware/pug';
import spaMdw from './middleware/spa';

const app = new Koa();

app.use(errorMdw);
app.use(morgan(config.env === 'production' ? 'short' : 'dev'));
app.use(koaStatic(config.publicDir));
app.use(mount('/node_modules', koaStatic(config.nodeModulesDir)));
app.use(bodyParser());
app.use(pugMdw());
app.use(config.routes.apiRouter.routes());
app.use(config.routes.apiRouter.allowedMethods());
app.use(config.routes.renderRouter.routes());
app.use(config.routes.renderRouter.allowedMethods());
app.use(spaMdw);

export default app;
