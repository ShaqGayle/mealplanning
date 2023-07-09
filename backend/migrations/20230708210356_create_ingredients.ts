import {Knex} from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('ingredients', table => {
    table.increments('id').notNullable().primary()
    table.string('name').notNullable().unique()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('ingredients')
}
