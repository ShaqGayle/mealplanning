import {Knex} from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('recipes', table => {
    table.increments('id').notNullable().primary()
    table.string('title').notNullable()
    table.text('description').nullable()
    table.specificType('instructions', 'text ARRAY').notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('recipes')
}
