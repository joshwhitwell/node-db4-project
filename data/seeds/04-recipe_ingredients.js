exports.seed = function (knex) {
  return knex('recipe_ingredients').insert([
    { recipe_id: 1, ingredient_id: 1, ingredient_quantity: '1 pound' },
    { recipe_id: 1, ingredient_id: 2, ingredient_quantity: '1 package' },
    { recipe_id: 1, ingredient_id: 3, ingredient_quantity: '8 ounces' },
    { recipe_id: 1, ingredient_id: 4, ingredient_quantity: '4 ounces' },
    { recipe_id: 1, ingredient_id: 5, ingredient_quantity: '8 ounces' },
    { recipe_id: 1, ingredient_id: 6, ingredient_quantity: '1 package' },
    { recipe_id: 1, ingredient_id: 7, ingredient_quantity: '1 small' },
    { recipe_id: 1, ingredient_id: 8, ingredient_quantity: '1 small' },

    { recipe_id: 2, ingredient_id: 1, ingredient_quantity: '1 pound' },
    { recipe_id: 2, ingredient_id: 3, ingredient_quantity: '8 ounces' },
    { recipe_id: 2, ingredient_id: 5, ingredient_quantity: '8 ounces' },
    { recipe_id: 2, ingredient_id: 7, ingredient_quantity: '1 small' },
    { recipe_id: 2, ingredient_id: 8, ingredient_quantity: '1 small' },
    { recipe_id: 2, ingredient_id: 9, ingredient_quantity: '1 package' },
    { recipe_id: 2, ingredient_id: 10, ingredient_quantity: '1 jar' },
    { recipe_id: 2, ingredient_id: 11, ingredient_quantity: '1 bottle' },
    { recipe_id: 2, ingredient_id: 12, ingredient_quantity: '1 jar' },
    { recipe_id: 2, ingredient_id: 13, ingredient_quantity: '1 bottle' },

    { recipe_id: 3, ingredient_id: 1, ingredient_quantity: '1 pound' },
    { recipe_id: 3, ingredient_id: 4, ingredient_quantity: '16 ounces' },
    { recipe_id: 3, ingredient_id: 14, ingredient_quantity: '16 ounces' },
    { recipe_id: 3, ingredient_id: 15, ingredient_quantity: '8 ounces' },

    { recipe_id: 4, ingredient_id: 1, ingredient_quantity: '1 pound' },
    { recipe_id: 4, ingredient_id: 4, ingredient_quantity: '8 ounces' },
    { recipe_id: 4, ingredient_id: 7, ingredient_quantity: '1 small' },
    { recipe_id: 4, ingredient_id: 9, ingredient_quantity: '1 package' },
    { recipe_id: 4, ingredient_id: 16, ingredient_quantity: '2 teaspoons' },
  ]);
};
