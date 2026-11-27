const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const app = express();
const db = new sqlite3.Database("./courseRegistration.db")

app.use(express.json());

//get localhost:5678 to start by displaying the home page.
/*
Note from Maisee: I am not sure why I need the ".." included in the path to make it work. I will talk to Dr. Williamson about why this is happening and what we can do to fix it.
app.use(express.static(path.join(__dirname, "public"))); 
*/
app.use(express.static(path.join(__dirname, "..", "public")));

//we use POST for add pages because we are "posting" data to the database
//later, we will use app.get to retrieve information (for register and drop course pages)

app.get("/instructorSelectList", (req, res) => {
    db.all(
        "SELECT instructor_id, instructor_first_name, instructor_last_name FROM Instructors",
        [],
        (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                console.log("Error with getting instructors for select list.");
            }
            else {
                res.json(rows);
            }
        }
    );
});

app.get("/studentSelectList", (req, res) => {
    db.all(
        "SELECT student_id, student_first_name, student_last_name FROM Students",
        [],
        (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                console.log("Error with getting students for select list.");
            }
            else {
                res.json(rows);
            }
        }
    );
});


// courseSelectList route
// gets the courses from the database
app.get("/courseSelectList", (req, res) => {
    db.all(
        `SELECT course_id, course_prefix,course_number,course_section,course_semester, course_year
        FROM Courses`,
        [],
        (err, rows)=> {
            if (err){
                res.status(500).json({error: err.message});
                console.log("error getting the courses");

            }
            else{
                res.json(rows);
            }
        }
       
    );

});

// semesterSelectList Route
//DISTINCT ensures that each combination of semester and year appears only once.
app.get("/semesterSelectList", (req, res) => {
    db.all(
        `SELECT DISTINCT course_semester, course_year
        FROM Courses`,
        [],
        (err, rows)=> {
            if (err){
                res.status(500).json({error: err.message});
                console.log("error getting the courses");

            }
            else{
                res.json(rows);
            }
        }
       
    );

});




// ADD COURSE -- MAISEE

app.post("/addCourse", (req, res) => {
    //get info from fetch in validation.js
    const year = req.body.year;
    const semester = req.body.semester;
    const coursePrefix = req.body.coursePrefix;
    const courseNumber = req.body.courseNumber;
    const courseSection = req.body.courseSection;
    const courseName = req.body.courseName;
    const room = req.body.room;
    const daysOffered = req.body.daysOffered;
    const selectedTime = req.body.selectedTime;
    const creditHours = req.body.creditHours;
    const enrollmentCap = req.body.enrollmentCap;
    const instructorId = req.body.instructorId;

    //execute SQL query
    db.run(
        `INSERT INTO Courses
        (course_semester, course_year,
        course_prefix, course_number,
        course_section, course_name,
        course_room, course_days_offered,
        course_time, course_credit_hours,
        course_enrollment_cap, instructor_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [semester, year, coursePrefix, courseNumber, courseSection,
            courseName, room, daysOffered, selectedTime, creditHours, enrollmentCap, instructorId
        ],

        function(err) {
            //return JSON response
            if (err) {
                console.log(err);
                res.status(404).send("File Not Found");
            }
            else {
                res.status(201).json({
                    success: true,
                    message: "Add Course SQL Insert command complete."
                });
                console.log("Add Course SQL Insert command complete");
            }
        }
    );
});

// ADD STUDENT -- Beatrice

app.post("/addStudent", (req, res) => {
  // get information sent from validation.js
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const year = req.body.year;
  const major = req.body.major;
  const email = req.body.email;

  // Insert the information into the Students table
  db.run(
    `INSERT INTO Students
    (student_first_name, student_last_name, student_year,student_major, student_email)
    VALUES (?, ?, ?, ?, ?)`,
    [firstname, lastname, year, major, email],

    function(err) {
      if (err){
        console.log(err.message);

        return res.status(500).json({
          success: false,
          message: "Error adding student to the database."
        });
      }
      else{
        res.status(201).json({
          success: true,
          message: "Student added successfully."
        });

        console.log("Student added successfully.");
      }
    }
  );
});

// ADD INSTRUCTOR -- Beatrice
app.post("/addInstructor", (req, res) => {
    //get information from validation.js
    const instructor_first_name = req.body.instructor_first_name;
    const instructor_last_name = req.body.instructor_last_name;
    const instructor_dept = req.body.instructor_dept;
    const instructor_rank = req.body.instructor_rank;
    const instructor_email = req.body.instructor_email;

    // insert the information into the instructors table
    db.run(
        `INSERT INTO Instructors
        (instructor_first_name, instructor_last_name,instructor_dept, instructor_rank, instructor_email)
        VALUES(?,?,?,?,?)`,
        [instructor_first_name, instructor_last_name, instructor_dept, instructor_rank, instructor_email],
        
        function(err){
            if (err){
                console.log(err.message);
                return res.status(500).json({
          success: false,
          message: "Error adding instructor to the database."
        });
      }
      else{
        res.status(201).json({
          success: true,
          message: "Instructor added successfully."
        });

        console.log("Instructor added successfully.");
      }
    }

  );
});

// DROP COURSE -- Drew

app.get("/dropCourse", (req, res) => {

});

// REGISTER COURSE -- Drew

app.get("/registerCourse", (req, res) => {

});

// VIEW COURSES -- Maisee

app.get("/viewCoursesByStudent", (req, res) => {

    //1. Do SQL Query for desired elements
    db.all(
        `SELECT Courses.course_prefix, Courses.course_number, Courses.course_section, Courses.course_name, 
        Courses.course_days_offered, Courses.course_time, Courses.course_room, Courses.course_credit_hours, 
        Courses.course_enrollment_cap, Instructors.instructor_first_name, Instructors.instructor_last_name 
        FROM Courses INNER JOIN Instructors ON Courses.instructor_id = Instructors.instructor_id;`,
        [],
        //2. Send response as JSON
        (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                console.log("Error with getting information to view courses by student.");
            }
            else {
                res.json(rows);
            }
        }
    );

});

app.get("/viewCoursesByInstructor", (req, res) => {

    //1. Do SQL Query for desired elements
    db.all(
        `SELECT course_prefix, course_number, course_section, course_name, course_days_offered, 
        course_time, course_room, course_credit_hours, course_enrollment_cap 
        FROM Courses`,
        [],
        //2. Send response as JSON
        (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                console.log("Error with getting information to view courses by instructor.");
            }
            else {
                res.json(rows);
            }
        }
    );

});

// VIEW STUDENTS -- Beatrice

// view student by course

app.get("/viewStudentsByCourse", (req, res) => {
    // get the course the user selected on the view student page
    const courseId = req.query.course_id;

    // run an sql query to get students registered in the selected course
    // INNER JOIN is important because student and course information are stored
    // in separate tables. The Registration table connects them using student_id
    // and course_id, allowing us to retrieve the students registered for a
    // particular course or semester.
    db.all(
        `SELECT
        Students.student_id,
        Students.student_first_name,
        Students.student_last_name,
        Students.student_year,
        Students.student_major,
        Students.student_email
        FROM Registration
        INNER JOIN Students
            ON Registration.student_id = Students.student_id
        INNER JOIN Courses
            ON Registration.course_id = Courses.course_id
        WHERE Courses.course_id = ?`,
        [courseId],

        (err,rows) => {
            if (err){
                return res.status(500).json({
                    error:err.message
                });
                console.log("Error with getting information to view students by course.");
            }
            res.json(rows);
        }
    );
});

// view student by semester and year.

app.get("/viewStudentsBySemester", (req, res) => {
    // this gets the semester and year the user selects in the vew student page
    const semester = req.query.semester;
    const year = req.query.year;

    db.all(
        `SELECT
        Students.student_id,
        Students.student_first_name,
        Students.student_last_name,
        Students.student_year,
        Students.student_major,
        Students.student_email,
        Courses.course_prefix,
        Courses.course_number,
        Courses.course_section,
        Courses.course_semester,
        Courses.course_year
        FROM Registration
        INNER JOIN Students
            ON Registration.student_id = Students.student_id
        INNER JOIN Courses
            ON Registration.course_id = Courses.course_id
        WHERE Courses.course_semester = ?
        AND Courses.course_year = ?`,
        [semester, year],

        (err,rows) => {
            if (err){
                return res.status(500).json({
                    error:err.message
                });
                console.log("Error with getting information to view studnets by semester.");
            }
            res.json(rows);
        }
    );
});

    

app.listen(5678, () => {
    console.log("Server running on port 5678.");
});
