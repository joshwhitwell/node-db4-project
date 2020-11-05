exports.seed = function (knex) {
  return knex('ingredients').insert([
    { ingredient_name: 'Ground Beef' },
    { ingredient_name: 'Tortillas' },
    { ingredient_name: 'Cheese' },
    { ingredient_name: 'Tomato Sauce' },
    { ingredient_name: 'Lettuce' },
    { ingredient_name: 'Taco Seasoning' },
    { ingredient_name: 'Onion' },
    { ingredient_name: 'Tomato' },
    { ingredient_name: 'Buns' },
    { ingredient_name: 'Pickles' },
    { ingredient_name: 'Mustard' },
    { ingredient_name: 'Mayonaise' },
    { ingredient_name: 'Ketchup' },
    { ingredient_name: 'Spaghetti' },
    { ingredient_name: 'Breadcrumbs' },
    { ingredient_name: 'Vinegar' }
  ]);
};

