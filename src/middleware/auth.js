import jwt from 'jsonwebtoken';
import user from '../model/user';

export default async (ctx, next) => {
  try {
    const token = ctx.request.headers.authorization;
    const decode = await jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
    if (user.id === decode.id) {
      ctx.state.user = user;
      await next();
    }
  } catch (err) {
    ctx.throw(401, 'Invalid user');
  }
};
