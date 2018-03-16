import Router from 'koa-router';
import handler from './user.handler';
import authMdw from '../../middleware/auth';

const router = new Router({ prefix: '/user' });

router.get('/me', authMdw, handler.me);
router.post('/login', handler.login);

router.param('id', handler.findByParam);
router.get('/', handler.getAll);
router.post('/', handler.createOne);
router.get('/:id', handler.getOne);
router.patch('/:id', authMdw, handler.updateOne);
router.del('/:id', authMdw, handler.deleteOne);

export default router;
