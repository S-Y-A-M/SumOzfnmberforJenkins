const express = require('express')
const sum = require('./sum');


const PORT = 3000
const app = express()



app.get('/', (req,res) => {
    res.send(`Jenikins and k8s working properly and Sum of two number is ${sum}`)
});
  


app.listen( PORT, () =>{
    console.log(`Server running on port localhost ${3000}`)
})