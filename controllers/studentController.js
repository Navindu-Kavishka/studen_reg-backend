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

exports.getAllStudents = (req,res) => {
    const quary = `SELECT * FROM students`;
    db.query(quary, (err)=> {
        if(err){
            return res.status(500).send(err);
        }else{
            return res.status(200).send(students);
        }
    });
};