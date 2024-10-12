const expres = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./config/db");


dotenv.config();
const app = expres();
app.use(cors());
app.use(expres.json());


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});