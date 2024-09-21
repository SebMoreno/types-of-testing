import sqlite3 from 'sqlite3';

export const db = new sqlite3.Database('testdb.sqlite');
const dropTableQuery = `DROP TABLE IF EXISTS notas`;

const createTableQuery = `
    CREATE TABLE notas
    (
        id      INTEGER PRIMARY KEY,
        title   TEXT,
        content TEXT
    );
`;

db.serialize(() => {
  db.run(dropTableQuery, err => {
    if (err) {
      console.error('Error al eliminar tablas:', err.message);
    } else {
      console.log('Tablas eliminadas exitosamente');
      db.run(createTableQuery, err => {
        if (err) {
          console.error('Error al crear tablas:', err.message);
        } else {
          console.log('Tablas creadas exitosamente');
        }
      });
    }
  });
});
