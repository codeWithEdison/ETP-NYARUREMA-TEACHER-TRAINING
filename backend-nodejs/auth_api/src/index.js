const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db');
const userRoutes = require('./routes/userRoute')

const app = express();
// middleware to parse josn response
app.use(express.json());

dotenv.config(); 
const port = process.env.PORT || 5000;

app.use('/api/users', userRoutes);
db.connect((err)=>{
    if(err) throw err;
    console.log("Connected to MySQL database!");
}); 

app.listen(port, function(){
    console.log(`server running on port ${port}`);
    
});