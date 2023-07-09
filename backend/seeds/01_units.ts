import {Knex} from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('units').del()

  // Inserts seed entries
  await knex('units').insert([
    {name: 'pound', abbreviation: 'lb'},
    {name: 'ounce', abbreviation: 'oz'},
    {name: 'cup', abbreviation: 'c'},
    {name: 'tablespoon', abbreviation: 'tbsp'},
    {name: 'teaspoon', abbreviation: 'tsp'},
    {name: 'gram', abbreviation: 'g'},
    {name: 'kilogram', abbreviation: 'kg'},
    {name: 'milliliter', abbreviation: 'ml'},
    {name: 'liter', abbreviation: 'l'},
    {name: 'small', abbreviation: 'sm'},
    {name: 'medium', abbreviation: 'med'},
    {name: 'large', abbreviation: 'lg'},
  ])
}
