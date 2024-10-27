const userModel= require('../models/userModel');
const bcrypt = require('bcryptjs');


const registerUser = async (req, res)=>{
    try{
        const {name, email, password} = req.body;

        let hashedPassword= await bcrypt.hash(password,10);
        const userId= await  userModel.createUser({name, email, password: hashedPassword})
        res.status(201).json({userId})
    }catch(err){
        res.status(500).jsson({message: 'Error creating user'})
    }

}
module.exports= {
    registerUser
}