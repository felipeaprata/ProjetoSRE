const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!!! Versao02 !!!!!! Teste Ao Vivo e a cores :}' });
});

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});

