let express = require('express');
let server = express();

server.listen(8080, function(){
    console.log('IT\'S WORKING!');
})

let list = [
{
    id: 1,
    name: 'Bob',
    sex: 'Male',
    age: 18
},
{
    id: 2,
    name: 'Katty',
    sex: 'Female',
    age: 20
},
{
    id: 3,
    name: 'Sam',
    sex: 'Male',
    age: 21
},
];


server.get('/get/people', function(req, res){
    res.send(list);
})

server.get('/get/people/:id', function(req, res){
    let human = list.find(function (human){
        return human.id === Number(req.params.id)
    })
    res.send(human);
})

server.get('/get/people/:id/:field', function(req, res){
    let field = req.params.field;
    let human = list.find(function (human){
        return (human.id == Number(req.params));
    })
    res.send(human.field);
})