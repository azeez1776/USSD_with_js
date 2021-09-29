const { application } = require('express');
const express = require('express');
const logger = require('morgan');

const port = process.env.PORT || 3030;

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("USSD with js");
})

app.post('/', (req, res) => {
    let { sessionId, serviceCode, phoneNumber, text } = req.body;

    if (text === '') {

        let response = `CON get free unlimited internet for a week
        1.YES
        2.NO
        `
        res.send(response);
    }

    else if (text === '1') {

        let response = `Kijana pambana hamna cha bure`

        res.send(response);
    }

    else {

        res.status(400).send('bad request');
    }

})

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})