import jwt from 'jsonwebtoken';
import user from '../../model/user';

export default {
  async register(ctx) {
    try {
      const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET);
      ctx.status = 201;
      ctx.body = { token };
    } catch (e) {
      ctx.throw(500, e.message);
    }
  },
  async login(ctx) {
    ctx.body = {
      data: {
        user: ctx.state.user,
      },
    };
  },
  async logout(ctx) {
    ctx.body = 'logout';
  },
};
