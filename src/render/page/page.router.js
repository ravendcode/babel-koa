import Router from 'koa-router';
import handler from './page.handler';

const router = new Router();

router.get('/', handler.home);
router.get('/about', handler.about);

export default router;
