const express = require('express');
const app = express();
const port = 3000;

// Rota GET para /hello
app.get('/hello/:name', (req, res) => {
  const name = req.params.name; // Pega o parâmetro 'name' da URL
  res.send(`Olá, ${Gracilene}! Bem-vindo ao servidor Express.`);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

