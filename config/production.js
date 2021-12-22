module.exports = {
    log: {
        level: 'info',
        disabled: false
    },
    cors: {
        origins: ['http://localhost:3000'],
        maxAge: 3*60*60
    }
}