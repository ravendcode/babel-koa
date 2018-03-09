import Router from 'koa-router';
import handler from './user.handler';
import authMdw from '../../middleware/auth';

const router = new Router({ prefix: '/user' });

router.get('/me', authMdw, handler.me);

router.param('id', handler.findByParam);
router.get('/', handler.getAll);
router.post('/', handler.createOne);
router.get('/:id', handler.getOne);
router.patch('/:id', handler.updateOne);
router.del('/:id', handler.deleteOne);

export default router;
