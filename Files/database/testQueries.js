const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./courseRegistration.db");

db.all(
    "SELECT * FROM Instructors",
    [],
    (err, rows) => {
        console.log(rows);
    }
);

db.all(
    "SELECT name FROM sqlite_master WHERE type = 'table'",
    [],
    (err, rows) => {
        console.log(rows);
    }
);

db.all(
    "SELECT * FROM Courses",
    [],
    (err, rows) => {
        console.log(rows);
    }
);

db.all(
    "SELECT * FROM Students",
    [],
    (err, rows) => {
        console.log(rows);
    }
);

/*db.run(
    `INSERT INTO Students (student_first_name, student_last_name, student_year, student_major, student_email)
    VALUES (Maisee, Carrier, 2028,  )`
);
*/
//Test cases to see if view courses is working without registration routes set up
db.run(
    `INSERT INTO Registration (student_id, course_id)
    VALUES (1, 1)`
);


db.run(
    `INSERT INTO Registration (student_id, course_id)
    VALUES (1, 3)`
);

db.run(
    `INSERT INTO Registration (student_id, course_id)
    VALUES (2, 1)`
);

db.all(
    "SELECT * FROM Registration",
    [],
    (err, rows) => {
        console.log(rows);
    }
);
db.close();