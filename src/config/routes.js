import Router from 'koa-router';
// import pageRouter from '../app/render/page';
// import userRouter from '../app/api/user';
// import articleRouter from '../app/api/article';

const apiRouter = new Router({ prefix: '/api' });
const renderRouter = new Router();

// apiRouter.use(userRouter.routes());
// apiRouter.use(articleRouter.routes());
// renderRouter.use(pageRouter.routes());
apiRouter.use(require('../app/api/user').default.routes());
apiRouter.use(require('../app/api/article').default.routes());
renderRouter.use(require('../app/render/page').default.routes());

export default {
  apiRouter,
  renderRouter,
};
