const Router = require('@koa/router');
const userService = require('../service/user');

const router = new Router();

router.post('/api/users', async (ctx) => {
    const newUser = await userService.create({...ctx.request.body});
    ctx.body = newUser;
});

router.get('/api/users/:id', async (ctx) => {
    ctx.body = await userService.getById(ctx.params.id);
});


module.exports = {
    router
}