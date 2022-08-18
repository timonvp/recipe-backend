const uuid = require('uuid');
const { tables, getKnex } = require('../data/index');
const { getLogger } = require('../core/logging');

const logger = getLogger();

const selectColums = [
  `${tables.recipe}.id`,
  'name',
  'preparation',
  'duration',
  'people',
  'ingredients',
  `${tables.user}.id as userid`,
  `${tables.user}.username as username`
]

const findAll = () => {
  return getKnex()(tables.recipe)
    .select(selectColums)
    .join(tables.user, `${tables.recipe}.userid`, '=', `${tables.user}.id`)
    .orderBy('name', 'ASC');
};

const findAllOwn = (userid) => {
  return getKnex()(tables.recipe)
    .select(selectColums)
    .join(tables.user, `${tables.recipe}.userid`, '=', `${tables.user}.id`)
    .where('userid', userid)
    .orderBy('name', 'ASC');
};

const findAllOther = (userid) => {
  return getKnex()(tables.recipe)
    .select(selectColums)
    .join(tables.user, `${tables.recipe}.userid`, '=', `${tables.user}.id`)
    .whereNot('userid', userid)
    .orderBy('name', 'ASC');
};

const findById = (id) => {
  return getKnex()(tables.recipe)
    .select(selectColums)
    .join(tables.user, `${tables.recipe}.userid`, '=', `${tables.user}.id`)
    .where(`${tables.recipe}.id`, id)
    .first();
};

const findCount = async () => {
  const [count] = await getKnex()(tables.recipe)
    .count();
  return count['count(*)'];
};

const create = async ({
  userid,
  name,
  preparation,
  duration,
  people,
  ingredients
}) => {
  try {
    const id = uuid.v4();
    await getKnex()(tables.recipe)
      .insert({
        id,
        userid,
        name,
        preparation,
        duration,
        people,
        ingredients
      });

    return await findById(id);
  } catch (error) {
    logger.error('Error in create', {error});
    throw error;
  }
};

const updateById = async (id, {
    userid,
    name,
    preparation,
    duration,
    people,
    ingredients
}) => {
  try {
    await getKnex()(tables.recipe)
      .update({
        id,
        userid,
        name,
        preparation,
        duration,
        people,
        ingredients
      })
      .where('id', id);

    return await findById(id);
  } catch (error) {
    logger.error('Error in updateById', {error});
    throw error;
  }
};

const deleteById = async (id) => {
  try {
    const rowsAffected = await getKnex()(tables.recipe)
      .delete()
      .where('id', id);

    return rowsAffected > 0;
  } catch (error) {
    logger.error('Error in deleteById', {error});
    throw error;
  }
};

module.exports = {
  findAll,
  findById,
  findCount,
  create,
  updateById,
  deleteById,
  findAllOwn,
  findAllOther
};