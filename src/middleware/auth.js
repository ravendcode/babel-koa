import jwt from 'jsonwebtoken';
import db from '../../storage/memory/dev.json';

export default async (ctx, next) => {
  try {
    const token = ctx.request.headers.authorization;
    const decode = await jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
    const user = db.users.find(userDb => userDb.id === decode.id);
    if (!user) {
      ctx.throw(401, 'Invalid user');
    }
    ctx.state.user = user;
    await next();
  } catch (err) {
    ctx.throw(401, 'Invalid user');
  }
};
