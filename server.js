const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

dotenv.config({path: 'config.env'});
const port = process.env.PORT || 8000;

//use JSON
app.use(express.json());

//log request
app.use(morgan('tiny'));

//parser request to body-parser
app.use(bodyParser.urlencoded({extended: true}));

//load routes
app.use('/', require('./routes/'));

app.listen(port, () =>{
    console.log(`PORT: ${port}`);
})
