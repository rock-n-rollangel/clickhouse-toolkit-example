import { Connection } from 'clickhouse-toolkit'
import { Example } from './example-schema'
import { insert, insertWithCallback } from './insert/insert'
import { selectNoSchema, selectSchema } from './select/select'
import { update } from './update/update'
import { remove, removeNoSchema } from './delete/delete'

const connectionOptions = {
  database: 'test_db',
  username: 'user',
  password: 'password',
  url: 'http://localhost:8123',
  settings: {}, // maybe some clickhouse settings
  entities: [Example],
  synchronize: true,
  logging: true,
}

// const connectionOptions = {
//   database: 'test_db',
//   username: 'user',
//   password: 'password',
//   url: 'http://localhost:8123',
//   settings: {}, // maybe some clickhouse settings
//   logging: true,
// }

async function init(): Promise<Connection> {
  return await Connection.initialize(connectionOptions)
}

// async function initWithoutSchema(): Promise<Connection> {
//   return await Connection.initialize(connectionOptions)
// }

init().then((conn) => {
  insert(conn).then((result) => console.log(`insert result (connection with schema): ${result}`))

  selectSchema(conn).then((result) => console.log(`select result (connection with schema): ${result.length}`))

  insertWithCallback(conn).then((result) =>
    console.log(`insert with callback result (connection with schema): ${result}`),
  )

  update(conn).then((result) => console.log(`update result (connection with schema): ${result}`))

  remove(conn).then((result) => console.log(`remove result (connection with schema): ${result}`))
})

// initWithoutSchema().then((conn) => {
//   insert(conn).then((result) => console.log(`insert result (connection without schema): ${result}`))

//   selectNoSchema(conn).then((result) => console.log(`select result (connection without schema): ${result.length}`))

//   removeNoSchema(conn).then((result) => console.log(`remove result (connection without schema): ${result}`))

//   update(conn).catch(() => console.error('update without schema not implemented yet'))
// })
