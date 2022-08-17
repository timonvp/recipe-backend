const Router = require('@koa/router');
const userService = require('../service/user');

const router = new Router();

router.post('/api/login', async (ctx) => {
    ctx.body = await userService.loginUser({...ctx.request.body})
});

module.exports = {
    router
}