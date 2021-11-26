const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;

// Connect to Database

mongoose.connect('mongodb://localhost:27017/express-mongoose', {
    useNewUrlParser: true
  })
  .then(() => {
  const app = express();

  app.get('/', (req, res) => res.json({
    msg: 'welcome...'
  }))
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}).catch(() => {
  console.log('Database connection failed');
})

// app.use('/api/users', require('./routes/users'));
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/contacts', require('./routes/contacts'));


