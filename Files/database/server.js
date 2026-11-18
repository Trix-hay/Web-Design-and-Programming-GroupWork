const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const app = express();
const db = new sqlite3.Database("./courseRegistration.db")

app.use(express.json());

//get localhost:5678 to start by displaying the home page
app.use(express.static(path.join(__dirname, "..", "public")));
app.get("/", (req, res) => {
    res.sendFile("/Users/Maisee/OneDrive - marietta.edu/Junior Year/F26/CSCI330/Group Project/Web-Design-and-Programming-GroupWork/Files/public/homepage.html");
});

// This is the path I used to test the server. we can ask Dr. Williamson what is the best way to use a path.
/*
//get localhost:5678 to start by displaying the home page
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
*/


//we use POST for add pages because we are "posting" data to the database
//later, we will use app.get to retrieve information (for register and drop course pages)

app.get("/instructorSelectList", (req, res) => {
    db.all(
        "SELECT instructor_id, instructor_first_name, instructor_last_name FROM Instructors",
        [],
        (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.messahe });
                console.log("Error with getting instructors for Add Course select list.");
            }
            else {
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

});

// DROP COURSE -- Drew

app.get("/dropCourse", (req, res) => {

});

// REGISTER COURSE -- Drew

app.get("/registerCourse", (req, res) => {

});

// VIEW COURSES -- Maisee

// VIEW STUDENTS -- Beatrice

app.listen(5678, () => {
    console.log("Server running on port 5678.");
});
