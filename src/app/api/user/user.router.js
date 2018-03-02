import Router from 'koa-router';
import bodyParser from 'koa-body';
import handler from './user.handler';

const router = new Router({ prefix: '/user' });

router.param('id', handler.findByParam);
router.get('/', handler.getAll);
router.post('/', bodyParser(), handler.createOne);
router.get('/:id', handler.getOne);
router.patch('/:id', bodyParser(), handler.updateOne);
router.del('/:id', handler.deleteOne);

export default router;
