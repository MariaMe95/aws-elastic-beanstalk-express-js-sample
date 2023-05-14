import express from 'express';
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hola Maria!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
