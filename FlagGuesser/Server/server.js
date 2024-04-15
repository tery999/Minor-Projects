const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const flag = require("./Models");
const app = express();
const PORT = 3030;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));

app.listen (PORT , ()=> console.log("Server running on" , PORT));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/FlagGuesser');
    console.log("DB connected")
}
main();

app.get("/", async (req, res) => {
    try {
        const allFlags = await flag.find();
        res.json(allFlags);
    } catch( err ) {
        res.status(400).json({message: "Error with server"})
    }
})