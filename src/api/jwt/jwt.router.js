import Router from 'koa-router';
import handler from './jwt.handler';
import jwtMdw from './jwt.middleware';
import userMdw from '../user/user.middleware';

const router = new Router({ prefix: '/jwt' });

router.post('/register', handler.register);
router.post('/login', jwtMdw, userMdw, handler.login);
router.del('/logout', handler.logout);

export default router;
