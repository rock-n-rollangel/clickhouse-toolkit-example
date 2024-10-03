import { Column, Schema } from 'clickhouse-toolkit'

@Schema({ engine: 'MergeTree' })
export class Example {
  @Column({ type: 'String' })
  name: string

  @Column({ type: 'Int8' })
  points: number
}
