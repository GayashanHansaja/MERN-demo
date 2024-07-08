//create variables to access dependancies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
require('dotenv').config();

//assign port || if not available use 8070
const port = process.env.PORT || 8070;

app.use(bodyParser.json());
app.use(cors());

//pass mongodb connection
const URL= process.env.MONGODB_URL;

//configure mongodb connection
mongoose.connect(URL, {
 
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
 
});

const connection=mongoose.connection;

//open mongodb connection
connection.once ("open",() => {
    console.log ("mongodb connection success!");

})

//create access to student.js file 

const staffRouter = require('./routes/staffs.js');

app.use('/staff', staffRouter);

//listen db from server
app.listen(port, () =>
{
    console.log(`server is up and running on port no: ${port}`);
})