const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./courseRegistration");

db.serialize( () => {
    db.run(`
        CREATE TABLE IF NOT EXISTS
        Students (

        ) 

        `);

    db.run(
        `CREATE TABLE IF NOT EXISTS
        Instructors (

        )`
    );

    db.run(
        `CREATE TABLE IF NOT EXISTS
        Courses (
        
        )`
    );

        db.run(
        `CREATE TABLE IF NOT EXISTS
        Registration (
        
        )`
    );
});

db.close();