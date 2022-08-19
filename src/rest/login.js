const Router = require('@koa/router');
const { validator } = require('../core/validation');
const userService = require('../service/user');

const router = new Router();

const loginValidator = validator({
    username : 'required|string|max:255',
    password : 'required|string|max:255|min:3',
}, 'De validatie heeft gefaald.')

router.post('/api/login', loginValidator, async (ctx) => {
    ctx.body = await userService.loginUser({...ctx.request.body})
});

module.exports = {
    router
}