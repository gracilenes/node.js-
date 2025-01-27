const express = require('express');
const app = express();
const port = 3000;


app.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Olá, ${Nome}!`);
});

app.post ('/user', (req, res)=>{
  const user = req.body;
  console.log("Informações do usuário", user);
  res.status(201).send(`Usuário ${user.txtNome} criado!`)
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

