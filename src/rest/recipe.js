const Router = require('@koa/router');
const recipeService = require('../service/recipe');

const router = new Router();

router.get('/api/recipes', async (ctx) => {
    ctx.body = await recipeService.getAll();
});

router.post('/api/recipes', async (ctx) => {
    const newRecipe = await recipeService.create({...ctx.request.body});
    ctx.body = newRecipe;
});

router.get('/api/recipes/:id', async (ctx) => {
    ctx.body = await recipeService.getById(ctx.params.id);
});

router.delete('/api/recipes/:id', async (ctx) => {
    await recipeService.deleteById(ctx.params.id);
    ctx.status = 204;
});

router.put('/api/recipes/:id', async (ctx) => {
    await recipeService.updateById(ctx.params.id, {...ctx.request.body});
    ctx.status = 204;
});

module.exports = {
    router
}