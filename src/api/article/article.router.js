import Router from 'koa-router';
import handler from './article.handler';

const router = new Router({ prefix: '/article' });

router.param('id', handler.findByParam);
router.get('/', handler.getAll);
router.post('/', handler.createOne);
router.get('/:id', handler.getOne);
router.patch('/:id', handler.updateOne);
router.del('/:id', handler.deleteOne);

export default router;
