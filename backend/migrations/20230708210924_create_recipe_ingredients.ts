import {Knex} from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('recipe_ingredients', table => {
    table.integer('recipe_id').notNullable()
    table.integer('ingredient_id').notNullable()
    table.integer('unit_id').nullable()
    table.decimal('quantity').notNullable()
    table.string('notes').nullable()
    table.foreign('recipe_id').references('recipes.id')
    table.foreign('ingredient_id').references('ingredients.id')
    table.foreign('unit_id').references('units.id')
    table.primary(['recipe_id', 'ingredient_id'])
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('recipe_ingredients')
}
