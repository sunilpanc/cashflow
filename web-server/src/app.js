const path = require('path');
const express = require('express');

const app = express();
const publicPath = path.join(__dirname,'../public/');

const viewPath = path.join(__dirname,'../template/');
app.set('view engine','hbs');
app.set('views',viewPath);
app.use(express.static(publicPath));

app.get('',(req,res)=>{
    res.render('index',{
        title:'Hoem page of hbs',
        name:'Sunil Panchal'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About us in hbs',
        name:'Sunil Panchal'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help page in hbs',
        name:'Sunil panchal'
    })
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