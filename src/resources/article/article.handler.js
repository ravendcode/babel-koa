export default {
  async findByParam(id, ctx, next) {
    if (!id) {
      ctx.throw(404, 'Not Found Error');
    }
    ctx.state.id = id;
    return next();
  },
  async getAll(ctx) {
    ctx.body = { status: 'OK', message: 'getAll', data: [] };
  },
  async createOne(ctx) {
    ctx.status = 201;
    ctx.body = { status: 'Created', message: 'createOne', data: ctx.request.body };
  },
  async getOne(ctx) {
    ctx.body = { status: 'OK', message: 'getOne', data: ctx.state.id };
  },
  async updateOne(ctx) {
    ctx.body = { status: 'OK', message: 'updateOne', data: ctx.request.body };
  },
  async deleteOne(ctx) {
    ctx.body = { status: 'OK', message: 'deleteOne', data: ctx.state.id };
  },
};
