import fs from 'fs';
import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import db from '../../../resources/storage/memory/db.json';
import config from '../../config';

const writeFile = promisify(fs.writeFile);

export default {
  async findByParam(id, ctx, next) {
    if (!id) {
      ctx.throw(404, 'Not Found Error');
    }
    ctx.state.id = id;
    return next();
  },
  async getAll(ctx) {
    ctx.body = { status: 'OK', message: 'getAll', data: db.users };
  },
  async createOne(ctx) {
    const newUser = {};
    newUser.id = db.users.length + 1;
    newUser.username = ctx.request.body.username;
    newUser.password = ctx.request.body.password;
    newUser.email = ctx.request.body.email;
    const token = await jwt.sign({ id: newUser.id }, process.env.JWT_SECRET);
    newUser.accessToken = token;
    if (db.users.find(userDb => userDb.username === ctx.request.body.username)) {
      ctx.throw(400, `Username ${ctx.request.body.username} already taken`);
    }
    db.users.push(newUser);
    await writeFile(config.resourcesDir + '/storage/memory/db.json', JSON.stringify(db, null, 2));
    ctx.status = 201;
    ctx.body = { status: 'Created', message: 'createOne', data: newUser };
  },
  async getOne(ctx) {
    ctx.body = { status: 'OK', message: 'getOne', data: ctx.state.id };
  },
  async updateOne(ctx) {
    ctx.body = {
      status: 'OK',
      message: 'updateOne',
      data: ctx.request.body,
    };
  },
  async deleteOne(ctx) {
    ctx.body = { status: 'OK', message: 'deleteOne', data: ctx.state.id };
  },
  async login(ctx) {
    const user = db.users.find(userDb => userDb.username === ctx.request.body.username);
    if (!user || user.password !== ctx.request.body.password) {
      ctx.throw(401, 'Invalid user');
    }
    ctx.body = {
      status: 'OK',
      message: 'login',
      data: user,
    };
  },
  async me(ctx) {
    ctx.body = {
      status: 'OK',
      message: 'me',
      data: ctx.state.user,
    };
  },
};
