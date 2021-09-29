const { application } = require('express');
const express = require('express');
const logger = require('morgan');

const port = process.env.PORT || 3030;

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port => {
    console.log(`Listening to port ${port}`)
})