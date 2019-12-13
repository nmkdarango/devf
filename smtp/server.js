const express = require('express');
const app = express();
const PORT = process.env.PORT || 4321;
const {router} = require('./routes');
const cors = require('cors');

const { Smtp } = require('./modules');

app.use(express.json());
app.use('/api/v1', router);
app.use(cors());

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Great!, run in port: ${PORT}`);
});