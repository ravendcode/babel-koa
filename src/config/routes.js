import Router from 'koa-router';

const apiRouter = new Router({ prefix: '/api' });
const renderRouter = new Router();

apiRouter.use(require('../app/api/user').default.routes());
apiRouter.use(require('../app/api/article').default.routes());
renderRouter.use(require('../app/render/page').default.routes());

export default {
  apiRouter,
  renderRouter,
};
