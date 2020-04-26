const express = require("express");
const bcrypt = require('bcrypt-nodejs');

const app = express();

app.use(express.json());

let id = 3;

const database = {
  users: [
    {
      id: '1',
      name: 'John',
      email: 'john@gmail.com',
      entries: 0,
      registered: new Date()
    },
    {
      id: '2',
      name: 'Mark',
      email: 'markus@gmail.com',
      entries: 0,
      registered: new Date()
    }
  ],
  login: [
    {
      id: '',
      hash: '',
      email: ''
    }
  ]
}

app.get('/', (req, res) => {
  res.send(database.users);
})

// signin
app.post('/signin', (req, res) => {
  bcrypt.compare()
  let login = false;
  database.users.forEach((user, i) => {
    if (req.body.email === database.users[i].email  &&
      req.body.password === database.users[i].password) 
    { 
      login = true;
    }
  });
  if (login)   
    res.json('success');
  else
    res.status(400).json('wrong credentials');
})

// signup
app.post('/signup', (req, res) => {
  const {email, name, password} = req.body;

  bcrypt.hash(password, null, null, (err, hash) => {
    console.log(hash);
  });
  database.users.push(
    {
      id: `${id++}`,
      name: name,
      email: email,
      password: password,
      entries: 0,
      registered: new Date()
    }
  );
  res.json(database.users[database.users.length - 1]);
});

// get profile
app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  let found = false;
  database.users.forEach(user => {
    if (user.id === id) {
      found = true;
      return res.json(user);      
    }
  });
  if (!found)
    res.status(404).json('no such user');
})

// image submitting - increase entries
app.put('/image', (req, res) => {
  const {id} = req.body;
  let found = false;
  database.users.forEach(user => {
    if (user.id === id) {
      found = true;
      return res.json(++user.entries);
    }
  });
  if (!found)
    req.status(404).json('not found whatever');
});

// crypting


app.listen(666, () => {console.log('app is running on port 666')});

