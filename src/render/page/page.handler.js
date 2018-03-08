export default {
  async home(ctx) {
    await ctx.render('page/index', { title: 'Home' });
  },
  async about(ctx) {
    await ctx.render('page/about', { title: 'About' });
  },
};
