const uuid = require('uuid');
const { transport } = require('winston');
let { RECIPES } = require('../data/mock_data');

const getAll = () => {
    return ({
        data: RECIPES,
        count: RECIPES.length
    });
}

const getById = (id) => {
    return RECIPES.filter(v => v.id == id)[0];
}

const create = ({name, preparation, duration, people, ingredients}) => {
    const newRecipe = {
        id: uuid.v4(),
        name,
        preparation,
        duration,
        people,
        ingredients
    };
    RECIPES = [...RECIPES, newRecipe];
    return newRecipe;
}

const updateById = (id, {name, preparation, duration, people, ingredients}) => {
    RECIPES = RECIPES.map(v => {
        return v.id == id ? {...v,
            name,
            preparation,
            duration,
            people,
            ingredients} : v;
    })
    return getById(id);
}

const deleteById = (id) => {
    RECIPES = RECIPES.filter(v => v.id != id);
}

module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
}