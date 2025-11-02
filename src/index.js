import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Ibtisam')
})

app.get('/hi', (req, res) => {
  res.send('hiiiiiiii')
})

app.get('/me', (req, res) => {
  res.send('this is me!!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
