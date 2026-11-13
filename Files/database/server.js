const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const db = new sqlite3.Database("./courseRegistration.db");

app.listen(5678, () => {
    console.log("Server running on port 5678.");
});