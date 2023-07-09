import {Knex} from 'knex'

import recipe from './data/02_recipes.json'

export async function seed(knex: Knex): Promise<void> {
  const {description, ingredients, instructions, title} = recipe
  // Deletes ALL existing entries
  await knex('recipes').del()
  await knex('ingredients').del()
  await knex('recipe_ingredients').del()

  // Inserts seed entries
  const res = await knex('recipes').insert({title, description, instructions}, ['id'])
  const recipeId = res[0].id
  const savedIngredients = await knex('ingredients').insert(
    ingredients.map(({name}) => ({name})),
    ['id', 'name']
  )
  const units = await knex('units').select()
  await knex('recipe_ingredients').insert(
    savedIngredients.map(ingredient => {
      const recipeIngredient = ingredients.find(({name}) => name === ingredient.name)
      return {
        recipe_id: recipeId,
        ingredient_id: ingredient.id,
        quantity: recipeIngredient?.quantity,
        unit_id: recipeIngredient?.unit && units.find(({name}) => name === recipeIngredient.unit).id,
        notes: recipeIngredient?.notes,
      }
    })
  )
}
