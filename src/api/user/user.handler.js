export default {
  async findByParam(id, ctx, next) {
    if (!id) {
      ctx.throw(404, 'Not Found Error');
    }
    ctx.id = id;
    return next();
  },
  async getAll(ctx) {
    ctx.body = { data: 'getAll' };
  },
  async createOne(ctx) {
    ctx.body = { data: 'createOne', body: ctx.request.body };
  },
  async getOne(ctx) {
    ctx.body = { data: 'getOne', param: ctx.id };
  },
  async updateOne(ctx) {
    ctx.body = { data: 'updateOne', param: ctx.id, body: ctx.request.body };
  },
  async deleteOne(ctx) {
    ctx.body = { data: 'deleteOne', param: ctx.id };
  },
  async me(ctx) {
    ctx.body = 'me';
  },
};
