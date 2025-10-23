// Basic Node.js backend for demo
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Cartoon Animation Generator Backend is running!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
