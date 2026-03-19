import { sql } from './db.js'

// sql`
//   DROP TABLE IF EXISTS videos;
//   `.then(() => {
//       console.log('Tabela deletada!')
//     })

sql`
  CREATE TABLE IF NOT EXISTS videos (
    id          TEXT PRIMARY KEY,
    title       TEXT,
    description TEXT,
    duration    INTEGER
  );
`.then(() => {
  console.log('Tabela criada!')
})