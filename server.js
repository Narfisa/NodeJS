let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');

let server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: true
}));

server.listen(8081, function(){
  console.log('IT\'S WORKING!');
})

var dataset = [
  {
    id: 0,
    firstName: 'John',
    lastName: 'Johny',
    age: 18,
    gender: 'Male',
    url: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
  },
  {
    id: 1,
    firstName: 'Ann',
    lastName: 'Anny',
    age: 17,
    gender: 'Female',
    url: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
  },
  {
    id: 2,
    firstName: 'Kate',
    lastName: 'Katty',
    age: 21,
    gender: 'Female',
    url: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
  },
  {
    id: 3,
    firstName: 'Sam',
    lastName: 'Sammy',
    age: 19,
    gender: 'Male',
    url: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
  },
  {
    id: 4,
    firstName: 'Alex',
    lastName: 'Alexy',
    age: 29,
    gender: 'Male',
    url: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
  }
];

server.get('/profiles', function(req, res){
  res.send(dataset);
})

server.get('/profile/:id', function(req, res){
  let human = dataset.find(function (human){
    return human.id === Number(req.params.id)
  })
  res.send(human);
})

server.post('/profiles', function(req, res){
  let profile = {
    id: Date.now(),
    firstName: req.body.firstName,
    age: req.body.age,
    gender: req.body.gender
  }
  Data.push(profile);
  console.log(req.body);
  res.send(profile);
})

server.put('/profiles/:id', function(req,res){
  let human = dataset.find(function (human){
    return human.id === Number(req.params.id)
  })
  human.firstName = req.body.firstName;
  human.age = req.body.age;
  human.gender = req.body.gender;
  res.sendStatus(200);
})

server.delete('/delete/profiles/:id', function(req, res){
  Data.splice(Number(req.body.id),1);
  res.send(200);
})