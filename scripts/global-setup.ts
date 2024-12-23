import { truncateTables } from './truncate-tables'

export default async function globalSetup(): Promise<void> {
  console.log('RUNNING globalSetup')
  await truncateTables()
}