import { Connection } from 'clickhouse-toolkit'
import { Example } from 'src/example-schema'

export async function selectSchema(conn: Connection) {
  return await conn
    .createQueryBuilder()
    .select()
    .from('example')
    .where({ points: 5 })
    .orWhere('points = :points', { points: 4 })
    .execute<Example>()
}

// we can easily use it without any schemas, but with restrictions
// we can't use params, coz methods use schema to get field type
export async function selectNoSchema(conn: Connection) {
  return await conn.createQueryBuilder().select().from('example').where('points = 5').execute()
}
