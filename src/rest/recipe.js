const Router = require('@koa/router');
const recipeService = require('../service/recipe');
const { requireAuth } = require('../core/auth');

const router = new Router();

router.get('/api/recipes', requireAuth, async (ctx) => {
    ctx.body = await recipeService.getAll();
});

router.get('/api/recipes/own', requireAuth, async (ctx) => {
    ctx.body = await recipeService.getAllOwn(ctx.state.user);
});

router.get('/api/recipes/other', requireAuth, async (ctx) => {
    ctx.body = await recipeService.getAllOther(ctx.state.user);
});

router.post('/api/recipes', requireAuth, async (ctx) => {
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