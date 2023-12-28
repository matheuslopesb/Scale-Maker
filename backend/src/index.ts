// src/index.ts
import express from 'express';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432', 10),
})

pool.query('SELECT NOW()', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados', err);
    } else {
        console.log(`Conexão bem-sucedida ao banco de dados`);
    }
});

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
