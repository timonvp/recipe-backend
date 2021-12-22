let { RECIPES } = require('../data/mock_data');

const getAll = () => {
    return ({
        data: RECIPES,
        count: RECIPES.length
    });
}

const getById = () => {
    throw new Error('not implemented yet');
}

const create = ({name, preparation, duration, people, ingredients}) => {
    throw new Error('not implemented yet');
}

const updateById = (id, {name, preparation, duration, people, ingredients}) => {
    throw new Error('not implemented yet');
}

const deleteById = (id) => {
    throw new Error('not implemented yet');
}

module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
}