const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');


const PORT = process.env.PORT || 4000;


// Connect to Database
connectDB();

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => res.json({
  msg: 'welcome...'
}))
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));
