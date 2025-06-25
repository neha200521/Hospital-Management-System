const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const messages = {
  '123': 'I love you',
  // You can add more message IDs if needed
};

app.get('/message/:id', (req, res) => {
  const msg = messages[req.params.id];
  if (msg) res.json({ text: msg });
  else res.status(404).json({ error: 'Message not found' });
});

app.listen(5000, () => console.log('Server is running on port 5000'));