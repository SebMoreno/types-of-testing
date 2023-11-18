import express from 'express';
import cors from 'cors';
import { notesRouter } from './routes/notes.js';

const PORT = process.env.PORT || 3001;
export const app = express();
app.use(cors());
app.use(express.json());

app.use('/notes', notesRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
