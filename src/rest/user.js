const Router = require('@koa/router');
const userService = require('../service/user');
const { requireAuth } = require('../core/auth');

const router = new Router();

router.post('/api/users', async (ctx) => {
    await userService.create({...ctx.request.body});
    ctx.body = await userService.loginUser({...ctx.request.body});
    
});

router.get('/api/users/:id', requireAuth, async (ctx) => {
    ctx.body = { data : await userService.getById(ctx.params.id) };
});


module.exports = {
    router
}