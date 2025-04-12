const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public'))); // public es donde pondrás index.html

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
