const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./courseRegistration");

db.serialize( () => {
    db.run(`
        CREATE TABLE IF NOT EXISTS
        Students (
            student_id INTEGER PRIMARY KEY AUTOINCREMENT,
            student_first_name TEXT NOT NULL,
            student_last_name TEXT NOT NULL,
            student_year TEXT,
            student_major TEXT,
            student_email TEXT NOT NULL
        ) 

    `);

    db.run(
        `CREATE TABLE IF NOT EXISTS
        Instructors (
            instructor_id INTEGER PRIMARY KEY AUTOINCREMENT,
            instructor_first_name TEXT NOT NULL,
            instructor_last_name TEXT NOT NULL,
            instructor_dept TEXT,
            instructor_rank TEXT,
            instructor_email TEXT NOT NULL
        )
    `);

    db.run(
        `CREATE TABLE IF NOT EXISTS
        Courses (
            course_id INTEGER PRIMARY KEY AUTOINCREMENT,
            course_semester TEXT,
            course_year INTEGER NOT NULL,
            course_prefix TEXT NOT NULL,
            course_number INTEGER NOT NULL,
            course_section INTEGER NOT NULL,
            course_name TEXT,
            course_room TEXT,
            course_days_offered INTEGER,
            course_time INTEGER,
            course_credit_hours INTEGER NOT NULL,
            instructor_first_name INTEGER NOT NULL,
            instructor_last_name INTEGER NOT NULL,
            course_enrollment_cap INTEGER NOT NULL,
            
            FOREIGN KEY (instructor_first_name) REFERENCES Instructors(instructor_first_name),
            FOREIGN KEY (instructor_last_name) REFERENCES Instructors(instructor_last_name),        
        )
    `);

        db.run(
        `CREATE TABLE IF NOT EXISTS
        Registration (
            registration_id INTEGER PRIMARY KEY AUTOINCREMENT,
            student_id INTEGER NOT NULL,
            course_id INTEGER NOT NULL,
            
            FOREIGN KEY (student_id) REFERENCES Students(student_id),
            FOREIGN KEY (course_id) REFERENCES Courses(course_id),

            UNIQUE (student_id, course_id)
        )
    `);
});

db.close();