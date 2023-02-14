const express = require('express');
const path = require('path');
const app = express();

const publicpath = path.join(__dirname, '/public')
console.log(publicpath);

app.set('view engine', 'hbs');
app.use(express.static(publicpath));

app.get('',(req,res) => {
    res.render('index',{
        name:'Shubham Anand'
    });
})

app.listen(3000);