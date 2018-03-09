import Router from 'koa-router';

const apiRouter = new Router({ prefix: '/api' });
const renderRouter = new Router();

renderRouter.use(require('../render/page').default.routes());
apiRouter.use(require('../api/user').default.routes());
apiRouter.use(require('../api/article').default.routes());

export default {
  apiRouter,
  renderRouter,
};
