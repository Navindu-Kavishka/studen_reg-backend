const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    
});

db.connect(
    (err) => {
        if (err){
            console.log("db connection is not working bro...",err);
        } else {
            console.log("db connection is working bro...");
        }
    }
);

module.exports = db;