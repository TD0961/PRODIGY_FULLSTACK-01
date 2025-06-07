import 'dotenv/config';
import express from 'express';
import connectDB from './config/db.js'; // Use .js extension for ESM imports

const app = express();
connectDB();

app.use(express.json());
app.use('/api/auth', (await import('./routes/auth.js')).default);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));