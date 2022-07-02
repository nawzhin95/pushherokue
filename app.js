import express, { query } from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import hbs from 'hbs'
import {getWeatherLocation} from './forcast.js'

const port = process.env.PORT || 3000

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()



const publicPath = path.join(__dirname,'./public')
const viewPath = path.join(__dirname,'./templates/views')
const patialPath = path.join(__dirname,'./templates/patials')

hbs.registerPartials(patialPath) 

app.set('view engine','hbs')
app.set('views',viewPath) 


app.use(express.static(publicPath))




app.get('/',(req,res)=>{

    res.render('index',{
        title:"weather Application",
        developer:"nawzhin hamza"
    })
    
})


app.get('/home',(req,res)=>{
    res.send("home page")
})



app.get('/help',(req,res)=>{
    res.render('help',{
        title:"we will help you soon"
    })
})


app.get('/contatus',(req,res)=>{
    res.render('contatus')

    // res.send("Hello we hear you")
})

app.get('/weather',(req,res)=>{
    
    if(!req.query.address){
        return res.send({
            error:"please inter address and location"
        })
    }
     getWeatherLocation(req.query.address,(data)=>{
        if(data===400){
            return res.send({
                error:'an error accure in passing location! please make sure you provide a target location'
            })
        }
        return res.send({
            address:req.query.address,
            weather:data.days[0],
        })
     })
})



app.get('/product',(req,res)=>{
    // note 
    // if("") > this is in condition is false
    // if("str") > this is true if contain " " or any String "String"
    //if (2) > its alos true for any number is true expected zero (0) is false 
  
  
    console.log(req.query)
    res.send([req.query])
})



/// specially after help 
app.get('/help/*',(req,res)=>{
   res.send("Help not found")
})


// it should be in the end 
app.get('*',(req,res)=>{
    res.send("page not found")
})



app.listen(port,()=>{
    console.log("server is running")
})




// patial is a part of page that we useed to build our site

// to load patial hbs files to nodeman 
// nodemon app.js -e js,hbs

// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)