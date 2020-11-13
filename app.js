const express =  require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = process.env.PORT||8000;

let app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine','ejs')

app.get('/',(req,res) => {
	res.send('hello world')
})

app.get('/:user',(req,res) => {
	let username = req.params.user;
	res.render('dashboard',{user:username})
})

app.listen(port,() => {
	console.log(`server online on port no. ${port}`);
})