const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const config = require("./config/config");
const dbUrl = config.dbUrl;

// dotenv.config({path:'./config/config.env'}); //config path
app.use(express.urlencoded({extended:true}));//access form data

// db connection
// mongoose.connect('mongodb://127.0.0.1:27017/sampleSignup',
//  {useNewUrlParser:true}, 
//  {useUnifiedTopology:true})
// .then((data) => console.log(`DB connected with ${data.connection.host}`))
// .catch((err) => console.log(err.message));

//atlas connection
mongoose.connect(`${dbUrl}`,
 {useNewUrlParser:true}, 
 {useUnifiedTopology:true})
.then((data) => console.log(`DB connected with ${data.connection.host}`))
.catch((err) => console.log(err.message));



//Schema - structure for data
const signupSchema = new mongoose.Schema({
    username:String,
    password:String
}); 

//model for Schema
let Signup = mongoose.model('signupInfo', signupSchema);



app.get('/' , (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', (req, res) => {
    let newSignup = new Signup({
        username: req.body.username,
        password:req.body.password,
    });
    newSignup.save();

    res.send('details submitted');
    console.log(req.body);
    console.log('user details submitted');
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})