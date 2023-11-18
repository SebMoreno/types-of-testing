import { Router } from 'express';
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from '../controllers/notes.js';

export const notesRouter = new Router();
notesRouter.get('/', getAllNotes);
notesRouter.get('/:id', getNoteById);
notesRouter.delete('/:id', deleteNote);
notesRouter.post('/', createNote);
notesRouter.put('/:id', updateNote);
