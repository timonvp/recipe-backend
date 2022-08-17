const uuid = require('uuid');
const { transport } = require('winston');
const userRepository = require('../repository/recipe');
const { hashPassword } = require('../core/password')


const getById = async (id) => {
    return await userRepository.findById(id);
}

const create = async ({username, password}) => {
    return await userRepository.create({username, password: hashPassword(password)});
}

module.exports = {
    getById,
    create
}