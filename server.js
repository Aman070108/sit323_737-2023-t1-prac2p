var express = require('express')
var app = express()

// respond with "hello this is Aman Bhardwaj" when a GET request is made to the landing page 
app.get('/', function(req, res){

    res.send('hello this is Aman Bhardwaj :) and this is task2.1P')

})

//using port 8000 for listening 
app.listen(8000)