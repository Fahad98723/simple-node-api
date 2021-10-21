const express = require('express')
const app = express()
const port = process.env.PORT || 5000
var cors = require('cors')
app.use(express.json())
app.use(cors())
const users = [
    {
      "id": 0,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz"
    },
    {
      "id": 1,
      "name": " Graham",
      "username": "Bret",
      "email": "Sincere@april.biz"
    },
    {
      "id": 2,
      "name": "Fahad",
      "username": "Bret",
      "email": "Sincere@april.biz"
    },
    {
      "id": 3,
      "name": "Meharaj Graham",
      "username": "Bret",
      "email": "Sincere@april.biz"
    },
    {
      "id": 4,
      "name": "Montasir Graham",
      "username": "Bret",
      "email": "Sincere@april.biz"
    }
  ]
app.get('/', (req, res) => {
    res.send('Hello World')
  })
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const result = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(result)
    }
    else{
        res.send(users)
    }
})
app.post('/users', (req, res) => {
    const newUser = req.body
    newUser.id = users.length
    users.push(newUser)
    res.json(newUser)
})
app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = users[id]
    res.send(user)
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })