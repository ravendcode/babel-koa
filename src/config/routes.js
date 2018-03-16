import Router from 'koa-router';

const apiRouter = new Router({ prefix: '/api' });
const renderRouter = new Router();

renderRouter.use(require('../render/page').default.routes());
apiRouter.use(require('../resources/user').default.routes());
apiRouter.use(require('../resources/article').default.routes());

export default {
  apiRouter,
  renderRouter,
};
