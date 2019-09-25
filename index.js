const express = require('express')
const teamRouter = require('./team/router');
const bodyParser = require('body-parser');
const playerRouter = require('./player/router')

const jsonParser = bodyParser.json()

const app = express()

const port = process.env.PORT || 4000

app.use(jsonParser);
app.use(teamRouter);
app.use(playerRouter);
app.listen(port, () => console.log(`Starting local server on port ${port}`))