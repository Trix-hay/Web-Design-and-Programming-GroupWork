const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const db = new sqlite3.Database("./courseRegistration.db");

app.use(express.json());
app.use(express.static("public"));

app.post("/addCourse", (req, res) => {
    //get info from fetch in validation.js
    //execute SQL query
    //return JSON response
})

app.listen(5678, () => {
    console.log("Server running on port 5678.");
});