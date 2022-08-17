const argon = require('argon2');
const config = require('config');

const ARGON_SALT_LENGTH = config.get('auth.argon.saltLength');
const ARGON_HASH_LENGTH = config.get('auth.argon.hashLength');
const ARGON_TIME_COST = config.get('auth.argon.timeCost');
const ARGON_MEMORY_COST = config.get('auth.argon.memoryCost');


const hashPassword = async (pass) => {
    return await argon.hash(pass, {
        type: argon.argon2id,
        saltLength: ARGON_SALT_LENGTH,
        hashLength: ARGON_HASH_LENGTH,
        timeCost: ARGON_TIME_COST,
        memoryCost: ARGON_MEMORY_COST,
    });
}

const verifyPassword = async (pass, hash) => {
    return await argon.verify(hash, pass, {
		type: argon.argon2id,
		saltLength: ARGON_SALT_LENGTH,
		hashLength: ARGON_HASH_LENGTH,
		timeCost: ARGON_TIME_COST,
		memoryCost: ARGON_MEMORY_COST,
	});
}

module.exports = {
    hashPassword,
    verifyPassword
}