import user from '../../model/user';

export default async (ctx, next) => {
  try {
    if (user.id === ctx.state.decode.id) {
      ctx.state.user = user;
      await next();
    }
  } catch (err) {
    ctx.throw(401, 'Invalid user');
  }
};
