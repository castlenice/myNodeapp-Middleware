import express from "express";
import { secure } from './middlewares/secure.js'
import { finalController } from './controllers/finalController.js'
const app = express()
const port = 3000

app.use('/', secure, finalController)
app.get('/', (req, res) => res.send('Hello World!'))
  
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))