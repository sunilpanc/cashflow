const path = require('path');
const express = require('express');
const hbs = require('hbs')

const app = express();
//Define path for express config
const publicPath = path.join(__dirname,'../public/');
const viewPath = path.join(__dirname,'../template/views');
const partialPath = path.join(__dirname,'../template/partials');

//setup handlebars engine and views location
app.set('view engine','hbs');
app.set('views', viewPath);
hbs.registerPartials(partialPath);

//setup static directory to serve
app.use(express.static(publicPath));


app.get('',(req,res)=>{
    res.render('index',{
        title:'Home page',
        name:'Sunil Panchal'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About us',
        name:'Sunil Panchal'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help',
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