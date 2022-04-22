const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const { errorHandler } = require('./middlewares/errorHandler');
connectDB();
const app = express();

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: 'config.env' });
  console.log('ok in local env');
} else {
  console.log('ok in production env');
}

const port = process.env.PORT || 8000;

//use JSON
app.use(express.json());

//parser request to body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//load routes
app.use('/', require('./routes/routes'));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`PORT: ${port}`);
});
