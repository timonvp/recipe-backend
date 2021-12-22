const config = require('config');
const Koa = require('koa');
const {
    getLogger
} = require('./core/logging');

const HOST = config.get('host');
const PORT = config.get('port');
const NODE_ENV = config.get('env');
const LOG_LEVEL = config.get('log.level');
const LOG_DISABLED = config.get('log.disabled');

const app = new Koa();
const logger = getLogger();

app.use(async (ctx, next) => {
    ctx.body = 'Hello world!';
    await next();
})

app.listen(PORT);

logger.info(`Server listening on http://${HOST}:${PORT}`);