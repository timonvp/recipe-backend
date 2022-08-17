const uuid = require('uuid');
const {
    tables,
    getKnex
} = require('../data/index');
const {
    getLogger
} = require('../core/logging');

const logger = getLogger();


const findById = (id) => {
    return getKnex()(tables.user)
        .where('id', id)
        .first();
};

const findByUsername = (username) => {
    return getKnex()(tables.user)
        .where('username', username)
        .first();
};

const create = async ({
    username,
    password
}) => {
    try {
        const id = uuid.v4();
        await getKnex()(tables.user)
            .insert({
                id,
                username,
                password
            });

        return await findById(id);
    } catch (error) {
        logger.error('Error in create', {
            error
        });
        throw error;
    }
};

module.exports = {
    findById,
    findByUsername,
    create
};