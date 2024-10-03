import { Connection } from 'clickhouse-toolkit'

export async function update(conn: Connection) {
  // you can't use this method without schema yet
  return await conn
    .createQueryBuilder()
    .update('example')
    .set({ name: 'One pointed man' })
    .where({ points: 1 })
    .execute()
}
