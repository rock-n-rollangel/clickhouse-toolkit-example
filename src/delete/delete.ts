import { Connection } from 'clickhouse-toolkit'

export async function remove(conn: Connection) {
  return await conn.createQueryBuilder().delete('example').where({ points: 1 }).execute()
}

export async function removeNoSchema(conn: Connection) {
  // don't use parameters if you are using it without schema
  return await conn.createQueryBuilder().delete('example').where('points = 1').execute()
}
