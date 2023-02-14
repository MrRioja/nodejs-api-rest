import { knex as setupknex } from 'knex'

export const knex = setupknex({
  client: 'sqlite',
  connection: {
    filename: './tmp/app.db',
  },
})
