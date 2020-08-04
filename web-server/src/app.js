const express = require('express');

const app = express();

app.get('',(req,res)=>{
    res.send('<h1>Hello express</h1>');
})

app.get('/help',(req,res)=>{
    res.send('This is help page');
})

app.get('/about',(req,res)=>{
    res.send('<title>About</title>');
})

app.get('/weather',(req,res)=>{
    res.send({
        forecast:'It is raining',
        location:'Indore',
        temprature:'27 degree',
        airFlow:'10km'
    });
})

app.listen(4000,()=>{
    console.log('Server is up on port 4000.');
})