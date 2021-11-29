const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;
const connectDB = require('./config/db');

connectDB();

const app = express();

app.get('/', (req, res) => res.json({
  msg: 'welcome...'
}))
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));
