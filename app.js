const express =  require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = process.env.PORT||8000;

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine','ejs');
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/remindMe',
	{useNewUrlParser:true,useUnifiedTopology:true})

	// Schemas

const userSchema = new mongoose.Schema({
	name:String,
	email:String,
	password:String,
	DoB:Date
});

const toRememberSchema = new mongoose.Schema({
	userId:String,
	dates:[{
	eventName:String,
	date:Date,
	description:String
	}]
});

	// Models

const User = mongoose.model('User',userSchema);
const Reminder = mongoose.model('Reminder',toRememberSchema);


app.get('/',(req,res) => {
	res.send('hello world')
})

app.get('/login',(req,res) =>{
	res.render('login')
})
app.post('/login',(req,res) =>{

})

app.get('signup',() =>{

})
app.post('signup',() =>{
	const newUser = new User({
		name:req.body.name,
		password:req.body.pwd,
		email:req.body.email,
		DoB:req.body.dob
	})
	newUser.save();
})

app.get('/:user',(req,res) => {
	let username = req.params.user;
	res.render('dashboard',{user:username})
})
app.post('/:user',(req,res) =>{

})

app.listen(port,() => {
	console.log(`server online on port no. ${port}`);
})