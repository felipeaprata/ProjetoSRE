const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello, SRE!' });
});

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});

