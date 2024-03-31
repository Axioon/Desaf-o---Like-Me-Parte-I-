import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import pool  from './db/config.js';
import router from './routes/posteo.router.js';




const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());



app.use('/api/v1',router)

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});
