//get all form elements from the form and store them for references
console.log("Validation.js is running!");
const addCourseForm = document.getElementById("addCourseForm");
const addInstructorForm = document.getElementById("addInstructorForm");
const dropCourseForm = document.getElementById("dropCourseForm");
const enrollStudentForm = document.getElementById("enrollStudentForm");
const registerCourseForm = document.getElementById("registerCourseForm");
const viewStudentsForm = document.getElementById("viewStudentsForm");
const viewCoursesForm = document.getElementById("viewCoursesForm");

// -----ADD COURSE-----

if (addCourseForm) { //confirm the page has this specific form before running validation. if the form element isn't found, we aren't on that page and don't need this validation
    // -----ADD COURSE SELECT LIST DISPLAY-----
    const daysOffered = document.getElementById("DaysOffered");
    const MWFTime = document.getElementById("MWFTime");
    const MWTime = document.getElementById("MWTime");
    const TTHTime = document.getElementById("TThTime");
    const singleDayTime = document.getElementById("SingleDayTime");

    //initially start with MWF displayed since it is first "shown" in select list

    MWFTime.hidden = false;
    MWFTime.previousSibling.previousSibling.hidden = false;

    MWTime.previousSibling.previousSibling.hidden = true;
    MWTime.hidden = true;

    TTHTime.previousSibling.previousSibling.hidden = true;
    TTHTime.hidden = true;

    singleDayTime.previousSibling.previousSibling.hidden = true;
    singleDayTime.hidden = true;

    daysOffered.addEventListener("change", function (e) {
        const selectedDayIndex = e.target.selectedIndex;
        console.log(e.target.selectedIndex);

        if (selectedDayIndex == 0) { //MWF
            MWFTime.hidden = false;
            MWFTime.previousSibling.previousSibling.hidden = false;

            MWTime.previousSibling.previousSibling.hidden = true;
            MWTime.hidden = true;

            TTHTime.previousSibling.previousSibling.hidden = true;
            TTHTime.hidden = true;

            singleDayTime.previousSibling.previousSibling.hidden = true;
            singleDayTime.hidden = true;
        }
        else if (selectedDayIndex == 1) { //MW
            MWFTime.previousSibling.previousSibling.hidden = true;
            MWFTime.hidden = true;

            MWTime.previousSibling.previousSibling.hidden = false;
            MWTime.hidden = false;

            TTHTime.previousSibling.previousSibling.hidden = true;
            TTHTime.hidden = true;

            singleDayTime.previousSibling.previousSibling.hidden = true;
            singleDayTime.hidden = true;
        }
        else if (selectedDayIndex == 2) { //TTH
            MWFTime.previousSibling.previousSibling.hidden = true;
            MWFTime.hidden = true;

            MWTime.previousSibling.previousSibling.hidden = true;
            MWTime.hidden = true;

            TTHTime.previousSibling.previousSibling.hidden = false;
            TTHTime.hidden = false;

            singleDayTime.previousSibling.previousSibling.hidden = true;
            singleDayTime.hidden = true;
        }
        else if (selectedDayIndex >= 3) {
            MWFTime.previousSibling.previousSibling.hidden = true;
            MWFTime.hidden = true;

            MWTime.previousSibling.previousSibling.hidden = true;
            MWTime.hidden = true;

            TTHTime.previousSibling.previousSibling.hidden = true;
            TTHTime.hidden = true;

            singleDayTime.previousSibling.previousSibling.hidden = false;
            singleDayTime.hidden = false;
        }
    });

    addCourseForm.addEventListener("submit", function (e) {

        let addCourseFormIsValid = true; //boolean to track what submission should do (more efficient way to track overall status)
        let failedMessage = ""; //will store info for alert, to be displayed if boolean becomes false

        //constants (used for checks)
        const year = document.getElementById("Year").value;
        const semester = document.getElementById("Semester").value;
        const coursePrefix = document.getElementById("CoursePrefix").value;
        const courseNumber = document.getElementById("CourseNumber").value;
        const courseSection = document.getElementById("CourseSection").value;
        const courseName = document.getElementById("CourseName").value;
        const room = document.getElementById("Room").value;
        const daysOffered = document.getElementById("DaysOffered").value;
        const creditHours = document.getElementById("CreditHours").value;
        const enrollmentCap = document.getElementById("EnrollmentCap").value;

        //year validation
        const yearRegEx = /^[3-9][0-9]{3}$|^202[6-9]$|^20[3-9][0-9]$|^2[1-9][0-9][0-9]$/; //regEx expression

        if (year == "") {
            failedMessage += "Error: year is a required field.\n";
            addCourseFormIsValid = false;
        }
        else if (!yearRegEx.test(year)) { //only test the value of year against the defined year RegEx if something is in the field (otherwise, skip since it's a required field)
            //since above uses ! (not operator), this would be if the year does NOT match rules
            failedMessage += "Error: year does not match required format. The year should consist of 4 digits and can not be before 2026.\n";
            addCourseFormIsValid = false;
        }
        else {
            console.log("Success! You entered a valid year format.");
        }

        //course prefix validation
        const coursePrefixRegEx = /^[A-Z]{3,4}$/;

        if (coursePrefix == "") {
            failedMessage += "Error: course prefix is a required field.\n";
            addCourseFormIsValid = false;
        }
        else if (!coursePrefixRegEx.test(coursePrefix)) {
            failedMessage += "Error: course prefix does not match required format. The prefix should have either 3 or 4 capital letters.\n";
            addCourseFormIsValid = false;
        }
        else {
            console.log("Success! You entered a valid course prefix format.");
        }

        //course number validation
        const courseNumberRegEx = /^[1-4][0-9][0-9]$/;

        if (courseNumber == "") {
            failedMessage += "Error: course number is a required field.\n";
            addCourseFormIsValid = false;
        }
        else if (!courseNumberRegEx.test(courseNumber)) {
            failedMessage += "Error: course number does not match required format. The course number should be exactly 3 digits and be between 100 and 499.\n";
            addCourseFormIsValid = false;
        }
        else {
            console.log("Success! You entered a valid course number format.");
        }

        //course section validation
        const courseSectionRegEx = /^[0-9][0-9]$/;

        if (courseSection == "") {
            failedMessage += "Error: course section is a required field.\n";
            addCourseFormIsValid = false;
        }
        else if (!courseSectionRegEx.test(courseSection)) {
            failedMessage += "Error: course section does not match required format. The course section must be exactly 2 digits.\n";
            addCourseFormIsValid = false;
        }
        else {
            console.log("Success! You entered a valid course section format.");
        }

        //room validation
        const roomRegEx = /^[A-Za-z'\s]+\s?[0-9]{2,3}[a-zA-Z]?$/;

        if (!roomRegEx.test(room)) {
            failedMessage += "Error: room does not match required format. The building name should be a string, and can contain spaces and/or apostrophes, and the room letter can be 2 or 3 digits and end with a letter.\n";
            addCourseFormIsValid = false;
        }
        else {
            console.log("Success! You entered a valid room format.");
        }

        //credit hours validation
        const creditHoursRegEx = /^[0-4]$/;

        if (creditHours == "") {
            failedMessage += "Error: credit hours is a required field.\n";
            addCourseFormIsValid = false;
        }
        else if (!creditHoursRegEx.test(creditHours)) {
            failedMessage += "Error: credit hours does not match required format. The credit hours must be between 0 and 4 digits.\n";
            addCourseFormIsValid = false;
        }
        else {
            console.log("Success! You entered a valid credit hours format.");
        }

        //enrollment cap validation

        const enrollmentCapRegEx = /^[0-9]{2}$/;

        if (enrollmentCap == "") {
            failedMessage += "Error: enrollment cap is a required field.\n";
            addCourseFormIsValid = false;
        }
        else if (!enrollmentCapRegEx.test(enrollmentCap)) {
            failedMessage += "Error: enrollment cap does not match required format. The enrollment cap must be a 2 digit number.\n";
            addCourseFormIsValid = false;
        }
        else {
            console.log("Success! You entered a valid enrollment cap name format.");
        }

        // extra credit validation
        if (courseName.length < 5 || courseName.length > 50) {
            failedMessage += "Error: course name must be between 5 and 50 characters.\n";
            addCourseFormIsValid = false;
        }

        else {
            console.log("Success! You entered a valid course name.");
        }

        if (addCourseFormIsValid == false) {
            console.log("Error: form can not be submitted due to issues with one or more fields.");
            alert(failedMessage); //displays errors back to user
            e.preventDefault()
        } else {
            console.log("Success! All fields are valid. Now printing information.");
            e.preventDefault()
            
            // determine which time to display based on what time select list is shown
            let selectedTime;
            if (!MWFTime.hidden) { //if the MWF select list is not hidden, it must be visible and thus has the time value we want
                selectedTime = MWFTime.value;
            }
            else if (!MWTime.hidden) {
                selectedTime = MWTime.value;
            }
            else if (!TTHTime.hidden) {
                selectedTime = TTHTime.value;
            }
            else if (!singleDayTime.hidden) {
                selectedTime = singleDayTime.value;
            }

            const instructorId = document.getElementById("InstructorName").value; //contains instructor_id, get it once form is submitted so most recent/changed value is what gets used

            //gather values enterted in the form
            const addCourseData = {
                semester: semester,
                year: year,
                coursePrefix: coursePrefix,
                courseNumber: courseNumber,
                courseSection: courseSection,
                courseName: courseName,
                room: room,
                daysOffered: daysOffered,
                selectedTime: selectedTime,
                creditHours: creditHours,
                enrollmentCap: enrollmentCap,
                instructorId: instructorId,
            }

            //send values to Express route
            fetch("/addCourse", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(addCourseData)
            })
                .then(response => response.json())
                .then(displayMessage => {
                    alert(displayMessage.message); 

            });

        }

    });
}

// -----ADD INSTRUCTOR-----

if (addInstructorForm) {
    addInstructorForm.addEventListener("submit", function (e) {
        // validation rules go in here

        let addInstructorFormIsValid = true;
        let failedMessage = ""; //will store info for alert, to be displayed if boolean becomes false

        const InstructorFirstName = document.getElementById("InstructorFirstName").value;
        const InstructorLastName = document.getElementById("InstructorLastName").value;
        const Department = document.getElementById("Department").value;
        const InstructorEmail = document.getElementById("InstructorEmailAddress").value;
        const Rank = document.getElementById("Rank").value;

        const nameRegex = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;
        const emailRegex = /^[a-zA-Z]{2,3}[0-9]{3}@marietta\.edu$/;

        if (InstructorFirstName == "") {  //check if it is empty
            failedMessage += "Error: instructor first name is a required field.\n";
            addInstructorFormIsValid = false;

        } else if (!nameRegex.test(InstructorFirstName)) {  //test the value of name against the defined name  RegEx
            failedMessage += "Error: instructor first name does not match required format. The name must be a string with spaces, hyphens and apostrophes allowed.\n";
            addInstructorFormIsValid = false;

        }
        else {
            console.log("Success! You entered a valid instructor first name format.");
        }

        if (InstructorLastName == "") {  //check if it is empty
            failedMessage += "Error: instructor last name is a required field.\n";
            addInstructorFormIsValid = false;

        } else if (!nameRegex.test(InstructorLastName)) {  //test the value of name  against the defined name  RegEx
            failedMessage += "Error: instructor last name does not match required format. The name must be a string with spaces, hyphens and apostrophes allowed.\n";
            addInstructorFormIsValid = false;

        }
        else {
            console.log("Success! You entered a valid instructor first name format.");
        }

        if (Department !== "" && !nameRegex.test(Department)) {
            failedMessage += "Error: department name does not match required format. The name must be a string with spaces, hyphens and apostrophes allowed.\n";
            addInstructorFormIsValid = false;

        }
        else if (Department !== "") {
            console.log("Success! You entered a valid department name format.");
        }

        if (InstructorEmail === "") {  // check if it is empty
            failedMessage += "Error: instructor email is a required field.\n";
            addInstructorFormIsValid = false;


        } else if (!emailRegex.test(InstructorEmail)) {  //test the value of email  against the defined email RegEx
            failedMessage += "Error: instructor email does not match the required format. It must follow the format of abc123@marietta.edu or ab123@marietta.edu.\n";
            addInstructorFormIsValid = false;

        }
        else {
            console.log("Success! You entered a valid email format.");
        }
        // Extra Credit for addinstructor page

        if (Department.length < 2 || Department.length > 50) {
            failedMessage += "Error: department name must be between 2 and 50 characters.\n";
            addInstructorFormIsValid = false;
        }

        if (addInstructorFormIsValid == false) {
            console.log("Error: form can not be submitted due to issues with one or more fields.");
            alert(failedMessage); //displays errors back to user
            e.preventDefault()

        } else {
            // stop the form from submitting and refreshing the page
            e.preventDefault();
        
            const instructorData = {
                instructor_first_name: InstructorFirstName,
                instructor_last_name: InstructorLastName,
                instructor_dept: Department,
                instructor_rank: Rank,
                instructor_email:InstructorEmail
            };
            // send the instructor  information to the server
            fetch("/addInstructor",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(instructorData)
            })
                .then(response => response.json())
                .then(data => {
                    alert(data.message);
                })
                .catch(error => {
                    console.error("Error:", error);
                    alert("An error occurred while adding the instructor. Please try again.");
                });
            }
    });
}

// -----DROP COURSE-----

if (dropCourseForm) {
    dropCourseForm.addEventListener("submit", function (event) {

        event.preventDefault();

        var errorMessage = "";

        const nameRegex = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;
        const semRegex = /^(Spring|Summer|Fall) (202[6-9]|20[3-9][0-9]{3})$/;
        const coursePreRegex = /^[A-Z]{3,4}$/;
        const courseNumRegex = /^[0-3][0-9]{2}$/;
        const courseSecRegex = /^[0-9]{2}$/;

        const firstname = event.target.elements.firstname.value;
        const lastname = event.target.elements.lastname.value;
        const semester = event.target.elements.semester.value;
        const courseprefix = event.target.elements.courseprefix.value;
        const coursenumber = event.target.elements.coursenumber.value;
        const coursesection = event.target.elements.coursesection.value;

        if (!firstname) {
            errorMessage += "Error: first name is a required field.\n";
        }
        else if (!nameRegex.test(firstname)) {
            errorMessage += "Error: first name does not match required format. The name must be a string with spaces, hyphens and apostrophes allowed.\n";
        }

        if (!lastname) {
            errorMessage += "Error: last name is a required field.\n";
        }
        else if (!nameRegex.test(lastname)) {
            errorMessage += "Error: last name does not match required format. The name must be a string with spaces, hyphens and apostrophes allowed.\n";
        }

        if (!semester) {
            errorMessage += "Error: semester is a required field.\n";
        }
        else if (!semRegex.test(semester)) {
            errorMessage += "Error: semester does not match required format. The year should consist of 4 digits and can not be before 2026.\n";
        }

        if (!courseprefix) {
            errorMessage += "Error: course prefix is a required field.\n";
        }
        else if (!coursePreRegex.test(courseprefix)) {
            errorMessage += "Error: course prefix does not match required format. The prefix must be 3 or 4 uppercase letters.\n";
        }

        if (!coursenumber) {
            errorMessage += "Error: course number is a required field.\n";
        }
        else if (!courseNumRegex.test(coursenumber)) {
            errorMessage += "Error: course number does not match required format. The course number should be exactly 3 digits and be between 100 and 499.\n";
        }

        if (!coursesection) {
            errorMessage += "Error: course section is a required field.\n";
        }
        else if (!courseSecRegex.test(coursesection)) {
            errorMessage += "Error: course section does not match required format. The course section must be exactly 2 digits.\n";
        }

        if (errorMessage.length > 0) {
            alert(errorMessage);
        }
        else {
            alert(
                `First Name: ${firstname}
                Last Name: ${lastname}
                Semester and Year: ${semester}
                Course: ${courseprefix + " " + coursenumber}
                Course Section: ${coursesection}`
            )
        }
    });
}

// -----ENROLL STUDENT-----

if (enrollStudentForm) {
    enrollStudentForm.addEventListener("submit", function (e) {
        // validation rules go in here
        let enrollStudentFormIsValid = true;
        let failedMessage = ""; //will store info for alert, to be displayed if boolean becomes false

        // all validation

        const firstname = document.getElementById("StudentFirstName").value;
        const lastname = document.getElementById("StudentLastName").value;
        const year = document.getElementById("Year").value;
        const major = document.getElementById("Major").value;
        const email = document.getElementById("EmailAddress").value;

        const nameRegex = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;
        const emailRegex = /^[a-zA-Z]{2,3}[0-9]{3}@marietta\.edu$/;


        if (firstname === "") {  //check if it is empty
            failedMessage += "Error: student first name is a required field.\n";
            enrollStudentFormIsValid = false;


        } else if (!nameRegex.test(firstname)) {  //test the value of name  against the defined name  RegEx
            failedMessage += "Error: student first name does not match required format. The name must be a string with spaces, hyphens and apostrophes allowed.\n";
            enrollStudentFormIsValid = false;

        }

        else {
            console.log("Success! You entered a valid student first name format.");
        }


        if (lastname === "") {  //check if it is empty

            failedMessage += "Error: student last name is a required field.\n";
            enrollStudentFormIsValid = false;

        } else if (!nameRegex.test(lastname)) {  //test the value of name  against the defined name  RegEx
            failedMessage += "Error: student last name does not match the required format. The name must be a string with spaces, hyphens and apostrophes allowed.\n";
            enrollStudentFormIsValid = false;
        }

        else {
            console.log("Success! You entered a valid student last name format.");
        }

        if (major !== "" && !nameRegex.test(major)) {  //test the value of major  against the defined name  RegEx
            failedMessage += "Error: major does not match the required format. The major must be a string with spaces, hyphens and apostrophes allowed.\n";
            enrollStudentFormIsValid = false;
        }

        else {
            console.log("Success! You entered a valid  major format.");
        }

        if (email === "") {  // check if it is empty
            failedMessage += "Error: student email is a required field.\n";
            enrollStudentFormIsValid = false;


        } else if (!emailRegex.test(email)) {  //test the value of email  against the defined email RegEx
            failedMessage += "Error: student email does not match the required format. It must follow the format of abc123@marietta.edu or ab123@marietta.edu.\n";
            enrollStudentFormIsValid = false;
        }

        else {
            console.log("Success! You entered a valid student email format.");
        }

        // Extra Credit for enroll student page

        // extra validation for student firstname length:
        if (firstname.length < 2 || firstname.length > 50) {
            failedMessage += "Error: student first name must be between 2 and 50 characters.\n";
            enrollStudentFormIsValid = false;
        }

        // extra validation for student lastname length:

        if (lastname.length < 2 || lastname.length > 50) {
            failedMessage += "Error: student last name must be between 2 and 50 characters.\n";
            enrollStudentFormIsValid = false;
        }

        // extra validation for student major length:

        if ( major !== "" && (major.length < 3 || major.length > 50) ) {
            failedMessage += "Error: major must be between 3 and 50 characters.\n";
            enrollStudentFormIsValid = false;
        }


        if (enrollStudentFormIsValid == false) {
            console.log("Error: form can not be submitted due to issues with one or more fields.");
            alert(failedMessage); //displays errors back to user
            e.preventDefault()

            // If you reach this point, validation has passed.

        } else {
            // stop the form from submitting and refreshing the page
            e.preventDefault();

            // package the student information
            const studentData = {
                firstname: firstname,
                lastname: lastname,
                year: year,
                major: major,
                email: email
            };
        
            // send the student information to the server
            fetch("/addStudent",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(studentData)
            })
                .then(response => response.json())
                .then(data => {
                    alert(data.message);
                })
                .catch(error => {
                    console.error("Error:", error);
                    alert("An error occurred while adding the student. Please try again.");
                });
            }
    });
}
         
// -----REGISTER COURSE-----
if (registerCourseForm) {
    registerCourseForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var errorMessage = "";

        const nameRegex = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;
        const semRegex = /^(Spring|Summer|Fall) (202[6-9]|20[3-9][0-9]{3})$/;
        const coursePreRegex = /^[A-Z]{3,4}$/;
        const courseNumRegex = /^[0-3][0-9]{2}$/;
        const courseSecRegex = /^[0-9]{2}$/;

        const firstname = event.target.elements.firstname.value;
        const lastname = event.target.elements.lastname.value;
        const semester = event.target.elements.semester.value;
        const courseprefix = event.target.elements.courseprefix.value;
        const coursenumber = event.target.elements.coursenumber.value;
        const coursesection = event.target.elements.coursesection.value;

        if (!firstname) {
            errorMessage += "Error: first name is a required field.\n";
        }
        else if (!nameRegex.test(firstname)) {
            errorMessage += "Error: student first name does not match required format. The name must be a string with spaces, hyphens and apostrophes allowed.\n";
        }

        if (!lastname) {
            errorMessage += "Error: last name is a required field.\n";
        }
        else if (!nameRegex.test(lastname)) {
            errorMessage += "Error: student last name does not match required format. The name must be a string with spaces, hyphens and apostrophes allowed.\n";
        }

        if (!semester) {
            errorMessage += "Error: semester is a required field.\n";
        }
        else if (!semRegex.test(semester)) {
            errorMessage += "Error: semester does not match required format. The year should consist of 4 digits and can not be before 2026.\n";
        }

        if (!courseprefix) {
            errorMessage += "Error: course prefix is a required field.\n";
        }
        else if (!coursePreRegex.test(courseprefix)) {
            errorMessage += "Error: course prefix does not match required format. The prefix must be 3 or 4 uppercase letters.\n";
        }

        if (!coursenumber) {
            errorMessage += "Error: course number is a required field.\n";
        }
        else if (!courseNumRegex.test(coursenumber)) {
            errorMessage += "Error: course number does not match required format. The course number should be exactly 3 digits and be between 100 and 499.\n";
        }

        if (!coursesection) {
            errorMessage += "Error: course section is a required field.\n";
        }
        else if (!courseSecRegex.test(coursesection)) {
            errorMessage += "Error: course section does not match required format. The course section must be exactly 2 digits. \n";
        }

        if (errorMessage.length > 0) {
            alert(errorMessage);
        }
        else {
            alert(
                `First Name: ${firstname}
                Last Name: ${lastname}
                Semester and Year: ${semester}
                Course: ${courseprefix + " " + coursenumber}
                Course Section: ${coursesection}`
            )
        }
    });
}

if (viewStudentsForm) { // Beatrice
    viewStudentsForm.addEventListener("change", function(e){

        if (e.target.value =="byCourse"){
            fetch("/courseSelectList")
            .then(response => response.json())
            .then(coursespopulation => {
                const courseList = document.getElementById("courseList")
                courseList.innerHTML ='<option value="">Select a course</option>'; // this removes all previously added options and restores the original placeholder
                coursespopulation.forEach(course=> {
                    const option = document.createElement("option")
                    option.value = course.course_id;
                    option.textContent = course.course_prefix + " " + course.course_number + " " + "- Section" + course.course_section + " " + course.course_semester + " " + course.course_year;
                    courseList.appendChild(option);

                })

            });

            document.getElementById("courseSelection").hidden = false;
            document.getElementById("semesterSelection").hidden = true;
            
        }
        else if (e.target.value =="bySemester"){
            fetch("/semesterSelectList")
            .then(response => response.json())
            .then(semesterpopulation => {
                const semesterList = document.getElementById("semesterList")
                semesterList.innerHTML ='<option value="">Select a semester</option>'; // this removes all previously added options and restores the original placeholder
                semesterpopulation.forEach(semester=> {
                    const option = document.createElement("option")
                    option.value = semester.course_semester + "|" + semester.course_year
                    option.textContent = semester.course_semester + " " + semester.course_year;
                    semesterList.appendChild(option);

                })

            });
            document.getElementById("semesterSelection").hidden = false;
            document.getElementById("courseSelection").hidden = true;
        }

    });
    // what happens when the view students button is clicked
    viewStudentsForm.addEventListener("submit",function(e){
        e.preventDefault();
        const selectedOption = document.querySelector('input[name="howToView"]:checked'); // gets which radio button is selected
        if (selectedOption == null){
            alert("select either By Course or By Semester");
            return;
        }
        if (selectedOption.value == "byCourse"){
            const courseID = document.getElementById("courseList").value;
            if (courseID ==""){
                alert("select a course");
                return;
            }
            fetch("/viewStudentsByCourse?course_id=" + courseID) // get the courseid
            .then(response => response.json())
            .then(students => {
                const studentResults = document.getElementById("studentResults")
                studentResults.innerHTML = "";
                if(students.length == 0){
                   studentResults.textContent = "No students registered in this course."
                   return;
                }
                const table = document.createElement("table");
                const thead =document.createElement("thead");
                const headerrow = document.createElement("tr");
                const headers = ["First Name", "Last Name", "Year", "Major", "Email"];
                headers.forEach(header =>{
                    const th = document.createElement("th");
                    th.textContent=header;
                    headerrow.appendChild(th);
                });
                thead.appendChild(headerrow);
                table.appendChild(thead);
                const tbody = document.createElement("tbody");
                students.forEach(student => {
                    const row = document.createElement("tr");
                    const studentData =[student.student_first_name, student.student_last_name, student.student_year, student.student_major, student.student_email];
                    studentData.forEach(data =>{
                        const td = document.createElement("td");
                        td.textContent = data;
                        row.appendChild(td);
                    });
                    tbody.appendChild(row);

                });
                table.appendChild(tbody);
                studentResults.appendChild(table);
                
            });

        }
        else if(selectedOption.value == "bySemester"){ // will continue from here

        }

    });

}

if (viewCoursesForm) { // Maisee

    viewCoursesForm.addEventListener("change", function (e) {
        console.log("Change detected!");
        console.log("Target:", e.target);
        console.log("Value:", e.target.value);

        if (e.target.type === "radio") {
            if (document.getElementById("viewCourseSelectList")) {
                document.getElementById("viewCourseSelectList").remove(); //possibly change to hidden?
            }
            if (document.getElementById("viewCoursesTable")) {
                document.getElementById("viewCoursesTable").remove();
            }
        }

        if (e.target.value == "byStudent") {

            fetch("/studentSelectList")
            .then(response => response.json())
            .then(studentListPopulation => {

                const selectListDiv = document.createElement("div");
                selectListDiv.id = "viewCourseSelectList";
                viewCoursesForm.appendChild(selectListDiv);

                const studentSelectListLabel = document.createElement("label");
                studentSelectListLabel.htmlFor = "StudentName";
                studentSelectListLabel.textContent = "Student: "
                selectListDiv.appendChild(studentSelectListLabel);
                
                const studentSelectList = document.createElement("select");
                studentSelectList.name = "StudentName";
                studentSelectList.id = "StudentName";
                selectListDiv.appendChild(studentSelectList);

                const studentSelectListInitialOption = document.createElement("option");
                studentSelectListInitialOption.textContent = "Select a student...";
                studentSelectList.appendChild(studentSelectListInitialOption);
                
                studentListPopulation.forEach(student => { // get all students, then create and populate select list with every student in DB
                    const option = document.createElement("option");
                    option.value = student.student_id;
                    option.textContent = student.student_first_name + " " + student.student_last_name;
                    studentSelectList.appendChild(option);
                });

                studentSelectList.addEventListener("change", function (e) {
                    console.log("Student selected: ", e.target.value);
                    if (document.getElementById("viewCoursesTable")) {
                    
                        document.getElementById("viewCoursesTable").remove(); //possibly change to hidden?
                    }

                    const studentId = e.target.value;
                    console.log(studentId);
                    fetch("/viewCoursesByStudent?studentId=" + studentId) // send studentId in the URL since server is set up with app.get for this route
                    .then(response => response.json())
                    .then(courses => {
                        console.log(courses);
                        if (courses.length == 0) {
                            console.log("No courses registered for this student.");
                            alert("No courses registered for this student.");
                        }
                        else {
                        //define constants (overarching container, aka table div tag. use a neutral name so we can hide it if radio button is changed)
                            const tableDiv = document.createElement("div");
                            const main = document.querySelector("main");
                            tableDiv.id = "viewCoursesTable";
                            console.log("Created table div.");
                            main.appendChild(tableDiv);

                            const table = document.createElement("table");
                            const tableBody = document.createElement("tbody");
                            const tHead = document.createElement("thead");
                            const tHeadRow = document.createElement("tr");

                            const columnNames = Object.keys(courses[0]); // get all the property names

                            for (let i = 0; i < columnNames.length; i++) {
                                const tHeadData = document.createElement("th");
                                tHeadData.textContent = columnNames[i]
                                    .replaceAll("_", " ") //replace the underscores in the names with spaces
                                    .replace(/\b\w/g, char => char.toUpperCase()); // use RegEx that identifies the first character in each word to change to capital letter
                                tHeadRow.appendChild(tHeadData);
                            }

                            console.log("Table head cells appended to table head.");

                            courses.forEach(course => { //create a row for every student, append every row to tbody
                                
                                const tableRow = document.createElement("tr");
                                tableBody.appendChild(tableRow);
                                console.log("Table row appended to table body.");
                                
                                for (let i = 0; i < columnNames.length; i++) {
                                    const tData = document.createElement("td");
                                    tData.textContent = course[columnNames[i]]; // explain more
                                    tableRow.appendChild(tData);
                                    console.log("Data appended to table row.");
                                }
                            });

                            table.appendChild(tableBody);
                            console.log("Table body appended to table.");

                            tHead.appendChild(tHeadRow);
                            console.log("Table header row appended to table head.");

                            table.appendChild(tHead);
                            console.log("Table head appended to table.");
                            
                            tableDiv.appendChild(table);
                            console.log("Table is appended to table div.");
                        }
                        
                    });
                });
            }); 
        }
        

        //11/27: Maisee to pick up here, will transfer logic from student and change variables/references as needed.
        else if (e.target.value == "byInstructor") {
            console.log("By Instructor selected.");

            fetch("/instructorSelectList")
            .then(response => response.json())
            .then(instructorListPopulation => {

                const selectListDiv = document.createElement("div");
                selectListDiv.id = "viewCourseSelectList";
                viewCoursesForm.appendChild(selectListDiv);

                console.log("Instructor list being populated.");
                const instructorSelectListLabel = document.createElement("label");
                instructorSelectListLabel.htmlFor = "InstructorName";
                instructorSelectListLabel.textContent = "Instructor: "
                selectListDiv.appendChild(instructorSelectListLabel);

                const instructorSelectList = document.createElement("select");
                instructorSelectList.name = "InstructorName";
                instructorSelectList.id = "InstructorName";
                selectListDiv.appendChild(instructorSelectList);

                const instructorSelectListInitialOption = document.createElement("option");
                instructorSelectListInitialOption.textContent = "Select an instructor...";
                instructorSelectList.appendChild(instructorSelectListInitialOption);
                
                instructorListPopulation.forEach(instructor => {
                    const option = document.createElement("option");
                    option.value = instructor.instructor_id;
                    option.textContent = instructor.instructor_first_name + " " + instructor.instructor_last_name;
                    instructorSelectList.appendChild(option);
                });
            });
        }

        fetch("/viewCoursesByInstructor")
            .then(response => response.json())
            .then(instructors => {
                //define constants (overarching container, aka table div tag. use a neutral name so we can hide it if radio button is changed)
                //create table HTML 
                //do instructors.forEach so rows are created for every student
                //create table-specific HTML elements (rows, columns, etc.) and append to table
                    //specify attributes for elements (fill in table fields, etc.)
                
            });

    });
}
