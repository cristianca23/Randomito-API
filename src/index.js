require('dotenv').config();

const express = require('express');
const app = express();
const morgan = require('morgan');

const PORT = process.env.PORT || 3000;

app.use(morgan(':method :url port=${PORT} :status :res[content-length] - :response-time ms'));

const randomFloat = require('./useCases/randomFloat');


app.get('/api/v1/number', (req, res) =>{
  const value = randomFloat.randomFloat();

  res.json({value, port: PORT});
});

app.listen(PORT, () =>{
  console.log('Randomito API Listen on port:', PORT);
});
