const express = require('express')

const Recipes = require('./db-model')

const router = express.Router()

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.json(recipes)
        })
        .catch(err => {
            res.json({ error: err.message })
        })
})

router.get('/:id/shoppingList', (req, res) => {
    Recipes.getShoppingList(req.params.id)
        .then(list => {
            res.json(list)
        })
        .catch(err => {
            res.json({ error : err.message })
        })
})

router.get('/:id/instructions', (req, res) => {
    Recipes.getInstructions(req.params.id)
        .then(instructions => {
            res.json(instructions)
        })
        .catch(err => {
            res.json({ error : err.message })
        })
})

module.exports = router