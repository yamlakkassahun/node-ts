import { GlobalErrorHandler } from "./middleware/ErrorMiddelware"

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello Zion!'))
app.use(GlobalErrorHandler)
app.listen(port, () => console.log(`Zion ${process.env.NODE_ENV.toUpperCase()} Server listening on port ${port}!`))