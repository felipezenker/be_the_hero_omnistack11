const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); // Informando à aplicação que queremos utilizar JSON
app.use(routes);

app.listen(3333);