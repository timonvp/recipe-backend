const config = require('config');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const koaCors = require('@koa/cors');
const { getLogger } = require('./core/logging');
const { initializeData } = require('./data/index');
const recipe = require('./rest/recipe');
const user = require('./rest/user');
const login = require('./rest/login');
const emoji = require('node-emoji');
const ServiceError = require('./core/serviceError');

const NODE_ENV = config.get('env');
const HOST = config.get('host');
const PORT = config.get('port');
const CORS_ORIGINS = config.get('cors.origins');
const CORS_MAX_AGE = config.get('cors.maxAge');



module.exports = async function createServer() {

    const app = new Koa();
    const logger = getLogger();

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
  app.use(async (ctx, next) => {
    const logger = getLogger();
    logger.info(`${emoji.get('fast_forward')} ${ctx.method} ${ctx.url}`);

    const getStatusEmoji = () => {
      if (ctx.status >= 500) return emoji.get('skull');
      if (ctx.status >= 400) return emoji.get('x');
      if (ctx.status >= 300) return emoji.get('rocket');
      if (ctx.status >= 200) return emoji.get('white_check_mark');
      return emoji.get('rewind');
    };

    try {
      await next();

      logger.info(
        `${getStatusEmoji()} ${ctx.method} ${ctx.status} ${ctx.url}`,
      );
    } catch (error) {
      logger.error(`${emoji.get('x')} ${ctx.method} ${ctx.status} ${ctx.url}`, {
        error,
      });

      throw error;
    }
  });

  app.use(async (ctx, next) => {
    try {
      await next();
    } catch (error) {
      const logger = getLogger();
      logger.error('Error occured while handling a request', {
        error: error.message,
      });
      if (error instanceof ServiceError) {
          ctx.status = 400
          ctx.body = {
            code: error.code || 'BAD_REQUEST',
            message: error.message,
            details: error.details || {},
            stack: NODE_ENV !== 'production' ? error.stack : undefined,
          };
      } else {
          ctx.status = 500
          ctx.body = {
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Internal server error',
          }
      }
    }})
    
    app
        .use(recipe.router.routes())
        .use(recipe.router.allowedMethods());
    
    app
        .use(user.router.routes())
        .use(user.router.allowedMethods());
    
    app
        .use(login.router.routes())
        .use(login.router.allowedMethods());
  

    return {
        app,
        start(){
            return new Promise((resolve) => {
              const port = process.env.PORT || 9000;
              app.listen(port, () => {
                logger.info(`Server listening on http://localhost:${port}`);
                resolve();
              });
            });
          },
      
          async stop(){
            {
              app.removeAllListeners();
              getLogger().info('Goodbye');
            }
          }
    }

}