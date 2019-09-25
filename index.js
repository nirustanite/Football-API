const express = require('express')

const app = express()

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`Starting local server on port ${port}`))