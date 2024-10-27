const db = require('../config/db');

// model to create user 
const createUser = (userdata)=>{
const {name, email, password} = userdata;
const sql = `INSERT INTO users (name, email, password) VALUES(?,?,?)`;
db.query(sql,[name, email, password], (err, result)=>{
    if(err) throw err;
    return result.insertId;
});
};

module.exports={
    createUser
}