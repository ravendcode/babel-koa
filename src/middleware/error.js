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
    ctx.status = result.statusCode;
    ctx.body = {...result};
    ctx.app.emit('error', err, ctx);
  }
};
