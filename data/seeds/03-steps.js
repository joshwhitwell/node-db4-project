exports.seed = function (knex) {
  return knex('steps').insert([
    { step_number: 1, step_description: 'Combined ingredients', recipe_id: 1 },
    { step_number: 2, step_description: 'Cook ingredients', recipe_id: 1 },
    { step_number: 3, step_description: 'Serve', recipe_id: 1 },
    { step_number: 1, step_description: 'Combined ingredients', recipe_id: 2 },
    { step_number: 2, step_description: 'Cook ingredients', recipe_id: 2 },
    { step_number: 3, step_description: 'Serve', recipe_id: 2 },
    { step_number: 1, step_description: 'Combined ingredients', recipe_id: 3 },
    { step_number: 2, step_description: 'Cook ingredients', recipe_id: 3 },
    { step_number: 3, step_description: 'Serve', recipe_id: 3 },
    { step_number: 1, step_description: 'Combined ingredients', recipe_id: 4 },
    { step_number: 2, step_description: 'Cook ingredients', recipe_id: 4 },
    { step_number: 3, step_description: 'Serve', recipe_id: 4 },
  ]);
};
