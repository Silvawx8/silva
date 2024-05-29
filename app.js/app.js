const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/enviar-mensagem', (req, res) => {
    // Lógica para enviar mensagem de contato
    console.log(req.body);
    res.send('Mensagem enviada com sucesso!');
});

app.post('/login', (req, res) => {
    // Lógica de autenticação
    console.log(req.body);
    res.send('Login realizado com sucesso!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
