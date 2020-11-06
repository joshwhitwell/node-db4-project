const db = require('./db-config')

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('recipes')
        .join('recipe_ingredients', 'recipes.recipe_id', 'recipe_ingredients.recipe_id')
        .join('ingredients', 'ingredients.ingredient_id', 'recipe_ingredients.ingredient_id')
        .select('ingredients.ingredient_name', 'recipe_ingredients.ingredient_quantity')
        .where({ 'recipes.recipe_id': recipe_id })
}

function getInstructions(recipe_id) {
    return db('steps')
        .select('step_number', 'step_description')
        .where({ recipe_id })
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}