const Router = require('@koa/router');
const userService = require('../service/user');
const { requireAuth } = require('../core/auth');
const { validator } = require('../core/validation');

const router = new Router();

const userValidator = validator({
    username : 'required|string|max:255',
    password : 'required|string|max:255|min:3',
}, 'De validatie heeft gefaald.')

router.post('/api/users', userValidator, async (ctx) => {
    await userService.create({...ctx.request.body});
    ctx.body = await userService.loginUser({...ctx.request.body});
    
});

router.get('/api/users/:id', requireAuth, async (ctx) => {
    ctx.body = { data : await userService.getById(ctx.params.id) };
});


module.exports = {
    router
}