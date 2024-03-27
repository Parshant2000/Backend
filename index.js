import express from 'express';
import bodyParser from 'body-parser';
import db from './db/index.js';
import noteRoutes from './routes/notes.route.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
app.use('/api/notes', noteRoutes);
app.get('/health', (req, res) => {
    res.send('success: true');
});
// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
