const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const connectDB = require('./config/db');
const { errorHandler } = require('./middlewares/errorHandler');

const app = express();
dotenv.config({ path: 'config.env' });

const port = process.env.PORT || 8000;

//use JSON
app.use(express.json());

//log request
app.use(morgan('tiny'));

//parser request to body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//load routes
app.use('/', require('./routes/routes'));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`PORT: ${port}`);
});
