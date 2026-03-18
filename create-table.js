import { sql } from './db.js'

sql`
  CREATE TABLE IF NOT EXISTS videos (
    title TEXT,
    description TEXT,
    duration INTEGER
  );
`