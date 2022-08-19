const uuid = require('uuid');
const { transport } = require('winston');
const userRepository = require('../repository/user');
const { hashPassword, verifyPassword } = require('../core/password');
const { generateToken } = require('../core/token');
const ServiceError = require('../core/serviceError');


const getById = async (id) => {
    return await userRepository.findById(id);
}

const create = async ({username, password}) => {
    return await userRepository.create({username, password: await hashPassword(password)});
}

const loginUser = async ({username, password}) => {
    const user = await userRepository.findByUsername(username)
    if (!user) {
        throw new ServiceError('INVALID_LOGIN', 'Gebruikersnaam en wachtwoord komen niet overeen.')
    }
    const isValid = await verifyPassword(password, user.password)
    if (!isValid) {
        throw new ServiceError('INVALID_LOGIN', 'Gebruikersnaam en wachtwoord komen niet overeen.')
    }
    const token = await generateToken(user.id)
    return {
        data: {
            token,
            user: {
                id: user.id,
                username: user.username
            }
        }
    }
}

module.exports = {
    getById,
    create,
    loginUser
}