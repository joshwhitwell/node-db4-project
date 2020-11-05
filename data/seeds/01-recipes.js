exports.seed = function (knex) {
  return knex('recipes').insert([
    { recipe_name: 'Tacos' },
    { recipe_name: 'Hamburgers' },
    { recipe_name: 'Spaghetti & Meatballs' },
    { recipe_name: 'Sloppy Joes' }
  ]);
};
