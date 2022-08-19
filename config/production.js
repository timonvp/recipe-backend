module.exports = {
    log: {
        level: 'info',
        disabled: false
    },
    cors: {
        origins: ['http://localhost:3000'],
        maxAge: 3*60*60
    },
    database: {
        client: 'mysql2',
        host: 'remotemysql.com',
        port: 3306,
        name: 'rrR8wCn3MZ'
    }
}