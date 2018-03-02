export default async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    const result = {};
    result.message = err.message;
    result.statusCode = err.statusCode || 500;
    switch (result.statusCode) {
      case 400:
        result.error = 'Bad Request';
        break;
      case 401:
        result.error = 'Unauthorized';
        break;
      case 403:
        result.error = 'Forbidden';
        break;
      case 404:
        result.error = 'Not Found';
        break;
      case 500:
        result.error = 'Internal Server Error';
        break;
      default:
        result.error = 'Internal Server Error';
        break;
    }
    ctx.status = result.statusCode;
    ctx.body = {
      statusCode: result.statusCode,
      error: result.error,
      message: result.message,
    };
    ctx.app.emit('error', err, ctx);
  }
};
