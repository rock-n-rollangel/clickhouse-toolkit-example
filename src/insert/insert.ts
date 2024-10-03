import { Connection } from 'clickhouse-toolkit'

// it works same with schema or not
export async function insert(conn: Connection) {
  return await conn
    .createQueryBuilder()
    .insert()
    .values([
      { points: 5, name: 'John Doe' },
      { points: 5, name: 'John Doe' },
      { points: 5, name: 'John Doe' },
      { points: 4, name: 'John Doe' },
      { points: 3, name: 'John Doe' },
      { points: 2, name: 'John Doe' },
      { points: 1, name: 'John Doe' },
    ])
    .into('example')
    .execute()
}

export async function insertWithCallback(conn: Connection) {
  return await conn
    .createQueryBuilder()
    .insert()
    .values((qb) =>
      // don't use parameters if you are using it without schema
      qb.select().from('example').where({ points: 5 }),
    )
    .into('example')
    .execute()
}
