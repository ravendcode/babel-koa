import Router from 'koa-router';
import handler from './jwt.handler';
import jwtMdw from './jwt.middleware';
import authMdw from '../../middleware/auth';

const router = new Router({ prefix: '/jwt' });

router.post('/register', handler.register);
router.post('/login', jwtMdw, authMdw, handler.login);
router.del('/logout', handler.logout);

export default router;
