import Router from 'koa-router';
import handler from './user.handler';
import jwtMdw from '../jwt/jwt.middleware';

const router = new Router({ prefix: '/user' });

router.param('id', handler.findByParam);
router.get('/', handler.getAll);
router.post('/', handler.createOne);
router.get('/:id', handler.getOne);
router.patch('/:id', handler.updateOne);
router.del('/:id', handler.deleteOne);

router.get('/me', jwtMdw, handler.me);

export default router;
