module.exports = {
    port: 9000,
    host: 'localhost',
    auth: {
        argon: {
            saltLength: 16,
            hashLength: 32,
            timeCost: 6,
            memoryCost: 2 ** 17
        }
    }
}
