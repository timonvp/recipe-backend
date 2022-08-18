const config = require('config');

const jwt = require('jsonwebtoken');
const jwtSecret = config.get('jwtSecret');

function generateToken(userId) {
    const tokenData = {userId}

    const signOptions = {
        subject: 'auth',
        expiresIn: '7 days'
    }

    return new Promise((resolve, reject) => {
        jwt.sign(tokenData, jwtSecret, signOptions, (err, token) => {
            if (err || !token) {
                reject(err)
            } else {
                resolve(token)
            }
        })
    })
}

function verifyToken(token) {
    const verifyOptions = {
        subject: 'auth'
    };

    return new Promise((resolve, reject) => {
        jwt.verify(token, jwtSecret, verifyOptions, (err, decodedToken) => {
            if (err || !decodedToken) {
                return reject(err);
            }
            return resolve(decodedToken);
        });
    });
}

module.exports = {
    generateToken,
    verifyToken
}