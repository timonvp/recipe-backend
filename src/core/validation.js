const Validator = require('validatorjs');
const ServiceError = require('./serviceError');

module.exports.validator = (rules, message) => async (ctx, next) => {
    const validation = new Validator(ctx.request.body, rules, message);
    if (validation.passes()) {
        await next();
    } else {
        throw new ServiceError('VALIDATION_FAILED', message);
    }
}