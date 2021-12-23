const uuid = require('uuid');
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

const create = async ({name, preparation, duration, people, ingredients}) => {
    return await recipeRepository.create({name, preparation, duration, people, ingredients});
}

const updateById = async (id, {name, preparation, duration, people, ingredients}) => {
    return await recipeRepository.updateById(id, {name, preparation, duration, people, ingredients});
}

const deleteById = async (id) => {
    await recipeRepository.deleteById(id);
}

module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
}