import express from 'express';
import { GlobalErrorHandler } from "./middleware/ErrorMiddleware"


const app = express()
const port = 3000

app.get('/', (req, res) => {
    throw new Error('User not found')
    res.send('Hello Zion!')
})

app.use(GlobalErrorHandler)

app.listen(port, () => {
    console.log(`Zion ${process.env.NODE_ENV.toUpperCase()} Server listening on port ${port}!`)
})