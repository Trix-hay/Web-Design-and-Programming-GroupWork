const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const db = new sqlite3.Database("./courseRegistration.db");

app.use(express.json());

//get localhost:5678 to start by displaying the home page
app.use(express.static("/Users/Maisee/OneDrive - marietta.edu/Junior Year/F26/CSCI330/Group Project/Web-Design-and-Programming-GroupWork/Files/public"));
app.get("/", (req, res) => {
    res.sendFile("/Users/Maisee/OneDrive - marietta.edu/Junior Year/F26/CSCI330/Group Project/Web-Design-and-Programming-GroupWork/Files/public/homepage.html");
});

//we use POST here because we are "posting" data to the database
//later, we will use app.get to retrieve information (for register and drop course pages)

app.post("/addCourse", (req, res) => {
    //get info from fetch in validation.js
    const year = res.body.year;
    const semester = res.body.semester;
    const coursePrefix = res.body.coursePrefix;
    const courseNumber = res.body.courseNumber;
    const courseSection = res.body.courseSection;
    const courseName = res.body.courseName;
    const room = res.body.room;
    const daysOffered = res.body.daysOffered;
    const creditHours = res.body.creditHours;
    const instructorFirstName = res.body.instructorFirstName;
    const instructorLastName = res.body.instructorLastName;
    const enrollmentCap = res.body.enrollmentCap;

    //execute SQL query
    db.run(
        `INSERT INTO Courses
        (course_semester, course_year,
        course_prefix, course_number,
        course_section, course_name,
        course_room, course_days_offered,
        course_time, course_credit_hours,
        instructor_first_name, instructor_last_name,
        course_enrollment_cap)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [semester, year, coursePrefix, courseNumber, courseSection,
            courseName, room, daysOffered, creditHours, instructorFirstName,
            instructorLastName, enrollmentCap
        ]
    );

    //return JSON response, Maisee to pick up here


});

app.listen(5678, () => {
    console.log("Server running on port 5678.");
});
