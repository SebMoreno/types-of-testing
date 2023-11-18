import { db } from '../db/db.js';

export function getAllNotes (req, res) {
  db.all('SELECT * FROM notas', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
}

export function getNoteById (req, res) {
  db.get('SELECT * FROM notas WHERE id = ?', [req.params.id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(row);
  });
}

export function deleteNote (req, res) {
  const noteId = req.params.id;
  db.get(
    'SELECT * FROM notas WHERE id = ?',
    [noteId],
    (err, row) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!row) return res.status(404).json({ error: 'Nota no encontrada' });
      db.run(
        'DELETE FROM notas WHERE id = ?',
        [noteId],
        err => {
          if (err) return res.status(500).json({ error: err.message });
          res.status(200).json(row);
        });
    });
}

export function updateNote (req, res) {
  const noteId = req.params.id;
  const {
    title,
    content
  } = req.body;
  db.run(
    'UPDATE notas SET title = ?, content = ? WHERE id = ?',
    [title, content, noteId],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      if (this.changes === 0) return res.status(404).json({ error: 'Nota no encontrada' });

      db.get(
        'SELECT * FROM notas WHERE id = ?',
        [noteId],
        (err, row) => {
          if (err) return res.status(500).json({ error: err.message });
          res.status(200).json(row);
        });
    });
}

export function createNote (req, res) {
  const {
    title,
    content
  } = req.body;
  db.run('INSERT INTO notas (title, content) VALUES (?, ?)',
    [title, content],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });

      const newNoteId = this.lastID;
      db.get('SELECT * FROM notas WHERE id = ?',
        [newNoteId],
        (err, row) => {
          if (err) return res.status(500).json({ error: err.message });
          res.status(201).json(row);
        });
    });
}
