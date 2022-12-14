const { transport } = require('winston');
const recipeRepository = require('../repository/recipe');

const getAll = async () => {
    return ({
        data: await recipeRepository.findAll(),
        count: await recipeRepository.findCount()
    });
}

const getById = async (id) => {
    return await recipeRepository.findById(id);
}

const create = async ({userid, name, preparation, duration, people, ingredients}) => {
    return await recipeRepository.create({userid, name, preparation, duration, people, ingredients});
}

const updateById = async (id, {userid, name, preparation, duration, people, ingredients}) => {
    return await recipeRepository.updateById(id, {userid, name, preparation, duration, people, ingredients});
}

const deleteById = async (id) => {
    await recipeRepository.deleteById(id);
}

const getAllOwn = async (id) => {
    return ({
        data: await recipeRepository.findAllOwn(id)
    });
}

const getAllOther = async (id) => {
    return ({
        data: await recipeRepository.findAllOther(id)
    });
}

module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
    getAllOwn,
    getAllOther
}