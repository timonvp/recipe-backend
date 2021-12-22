const config = require('config');
const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const { getLogger } = require('./core/logging');
const recipeService = require('./service/recipe');

const HOST = config.get('host');
const PORT = config.get('port');
const NODE_ENV = config.get('env');
const LOG_LEVEL = config.get('log.level');
const LOG_DISABLED = config.get('log.disabled');

const app = new Koa();
const logger = getLogger();
const router = new Router();

app.use(bodyParser());

router.get('/api/recipes', async (ctx) => {
    ctx.body = recipeService.getAll();
});

router.post('/api/recipes', async (ctx) => {
    const newRecipe = recipeService.create({
        ...ctx.request.body
    });
    ctx.body = newRecipe;
});

router.get('/api/recipes/:id', async (ctx) => {
    ctx.body = recipeService.getById(ctx.params.id);
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(PORT);

logger.info(`Server listening on http://${HOST}:${PORT}`);