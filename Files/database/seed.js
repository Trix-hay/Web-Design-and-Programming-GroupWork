const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./courseRegistration.db");

db.run(
    `INSERT INTO Instructors
    (instructor_first_name, instructor_last_name, 
    instructor_dept, instructor_rank, instructor_email)
    VALUES (?, ?, ?, ?, ?)`,
    ["Matthew", "Williamson", "CSCI", "Associate Professor", "mw001@marietta.edu"]
);

db.run(
    `INSERT INTO Instructors
    (instructor_first_name, instructor_last_name, 
    instructor_dept, instructor_rank, instructor_email)
    VALUES (?, ?, ?, ?, ?)`,
    ["John", "Tynan", "MATH", "Assistant Professor", "jt002@marietta.edu"]
);

db.run(
    `INSERT INTO Instructors
    (instructor_first_name, instructor_last_name, 
    instructor_dept, instructor_rank, instructor_email)
    VALUES (?, ?, ?, ?, ?)`,
    ["Bob", "Van Camp", "CSCI", "Professor", "rmv001@marietta.edu"]
);

db.close();