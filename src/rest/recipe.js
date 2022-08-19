const Router = require('@koa/router');
const recipeService = require('../service/recipe');
const { requireAuth } = require('../core/auth');
const { validator } = require('../core/validation');

const router = new Router();

const recipeValidator = validator({
    name : 'required|string|max:255',
    preparation : 'required|string',
    duration : 'required|integer|min:1|max:999',
    people : 'required|integer|min:1|max:99'
}, 'De validatie heeft gefaald.')

router.get('/api/recipes', requireAuth, async (ctx) => {
    ctx.body = await recipeService.getAll();
});

router.get('/api/recipes/own', requireAuth, async (ctx) => {
    ctx.body = await recipeService.getAllOwn(ctx.state.user);
});

router.get('/api/recipes/other', requireAuth, async (ctx) => {
    ctx.body = await recipeService.getAllOther(ctx.state.user);
});

router.post('/api/recipes', recipeValidator, requireAuth, async (ctx) => {
    ctx.body = {data : await recipeService.create({...ctx.request.body, userid : ctx.state.user})};
});

router.get('/api/recipes/:id', requireAuth, async (ctx) => {
    ctx.body = {data : await recipeService.getById(ctx.params.id)};
});

router.delete('/api/recipes/:id', requireAuth, async (ctx) => {
    await recipeService.deleteById(ctx.params.id);
    ctx.status = 204;
});

router.put('/api/recipes/:id', requireAuth, async (ctx) => {
    await recipeService.updateById(ctx.params.id, {...ctx.request.body});
    ctx.status = 204;
});

module.exports = {
    router
}