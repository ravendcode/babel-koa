import config from '../config';

export default async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    const result = {
      statusCode: err.statusCode || 500,
      error: err.name,
    };
    if (err.message) {
      result.message = err.message;
    }
    if (result.statusCode === 500 && config.env === 'development') {
      result.stack = err.stack;
    }
    ctx.status = result.statusCode;

    if (/^\/api/.test(ctx.request.path)) {
      ctx.body = { ...result };
    } else {
      await ctx.render('error', { ...result });
    }
    ctx.app.emit('error', err, ctx);
  }
};
