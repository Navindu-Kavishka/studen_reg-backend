const db = require("../config/db");

exports.addStudent = (req, res) => {
    const { name, age, contactNumber, guardianName, guardianContactNumber, address } = req.body;
    const quary = `INSERT INTO students(name,age,contactNumber,guardianName,guardianContactNumber, address) VALUES (?,?,?,?,?,?)`;
    db.query(quary,[name,age,contactNumber,guardianName,guardianContactNumber,address], (err) =>{
        if(err){
            return res.status(500).send(err);
        }else{
            return res.status(201).send("student added bro...");
        }
    } );
};