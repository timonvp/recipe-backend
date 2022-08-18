const { verifyToken } = require('./token');


const requireAuth = async (ctx, next) => {
    const { authorization } = ctx.headers;
    if (authorization && authorization.startsWith('Bearer ')) {
        const token = authorization.split(' ')[1]
        const payload = await verifyToken(token, 'auth')
        if (payload) {
            return next();
        }
    }
    throw new Error('Geen toegang.');
}

module.exports = {
    requireAuth
}