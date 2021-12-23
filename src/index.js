const config = require('config');
const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const koaCors = require('@koa/cors');
const { getLogger } = require('./core/logging');
const recipeService = require('./service/recipe');
const { initializeData } = require('./data/index');

const uuid = require('uuid');

const HOST = config.get('host');
const PORT = config.get('port');
const NODE_ENV = config.get('env');
const LOG_LEVEL = config.get('log.level');
const LOG_DISABLED = config.get('log.disabled');
const CORS_ORIGINS = config.get('cors.origins');
const CORS_MAX_AGE = config.get('cors.maxAge');

const app = new Koa();
const logger = getLogger();
const router = new Router();

async function main() {

    console.log(uuid.v4());
    console.log(uuid.v4());
    console.log(uuid.v4());

    await initializeData();

    app.use(
        koaCors({
            origin: (ctx) => {
                if (CORS_ORIGINS.indexOf(ctx.request.header.origin) !== -1) {
                    return ctx.request.header.origin;
                }
                return CORS_ORIGINS[0];
            },
            allowHeaders: ['Accept', 'Content-Type', 'Authorization'],
            maxAge: CORS_MAX_AGE
        })
    );
    
    app.use(bodyParser());
    
    router.get('/api/recipes', async (ctx) => {
        ctx.body = recipeService.getAll();
    });
    
    router.post('/api/recipes', async (ctx) => {
        const newRecipe = recipeService.create({...ctx.request.body});
        ctx.body = newRecipe;
    });
    
    router.get('/api/recipes/:id', async (ctx) => {
        ctx.body = recipeService.getById(ctx.params.id);
    });
    
    router.delete('/api/recipes/:id', async (ctx) => {
        recipeService.deleteById(ctx.params.id);
        ctx.status = 204;
    });
    
    router.put('/api/recipes/:id', async (ctx) => {
        recipeService.updateById(ctx.params.id, {...ctx.request.body});
        ctx.status = 204;
    });
    
    app
        .use(router.routes())
        .use(router.allowedMethods());
    
    app.listen(PORT);
    
    logger.info(`Server listening on http://${HOST}:${PORT}`);

}

main();
