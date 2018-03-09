import jwt from 'jsonwebtoken';

export default async (ctx, next) => {
  try {
    const token = ctx.request.headers.authorization;
    ctx.state.decode = await jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
    await next();
  } catch (err) {
    ctx.throw(401, 'Invalid user');
  }
};
