//get all form elements from the form and store them for references
const addCourseForm = document.getElementById("addCourseForm");
const addInstructorForm = document.getElementById("addInstructorForm");
const dropCourseForm = document.getElementById("dropCourseForm");
const enrollStudentForm = document.getElementById("enrollStudentForm");
const registerCourseForm = document.getElementById("registerCourseForm");

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
        const instructorFirstName = document.getElementById("InstructorFirstName").value;
        const instructorLastName = document.getElementById("InstructorLastName").value;
        const enrollmentCap = document.getElementById("EnrollmentCap").value;

        //year validation
        const yearRegEx = /^[3-9][0-9]{3}$|^202[6-9]$|^20[3-9][0-9]$|^2[1-9][0-9][0-9]$/; //regEx expression

        if (year == "") {
            failedMessage += "Error: year is a required field.\n";
            addCourseFormIsValid = false;
        }
        else if (!yearRegEx.test(year)) { //only test the value of year against the defined year RegEx if something is in the field (otherwise, skip since it's a required field)
            //since above uses ! (not operator), this would be if the year does NOT match rules
            failedMessage += "Error: year does not match required format.\n";
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
            failedMessage += "Error: course prefix does not match required format.\n";
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
            failedMessage += "Error: course number does not match required format.\n";
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
            failedMessage += "Error: course section does not match required format.\n";
            addCourseFormIsValid = false;
        }
        else {
            console.log("Success! You entered a valid course section format.");
        }

        //room validation
        const roomRegEx = /^[A-Za-z'\s]+\s?[0-9]{2,3}[a-zA-Z]?$/;

        if (!roomRegEx.test(room)) {
            failedMessage += "Error: room does not match required format.\n";
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
            failedMessage += "Error: credit hours does not match required format.\n";
            addCourseFormIsValid = false;
        }
        else {
            console.log("Success! You entered a valid credit hours format.");
        }

        //instructor first name validation
        const instructorFirstNameRegEx = /^[A-Za-z-'\s]+$/;

        if (instructorFirstName == "") {
            failedMessage += "Error: instructor first name is a required field.\n";
            addCourseFormIsValid = false;
        }
        else if (!instructorFirstNameRegEx.test(instructorFirstName)) {
            failedMessage += "Error: instructor first name does not match required format.\n";
            addCourseFormIsValid = false;
        }
        else {
            console.log("Success! You entered a valid instructor first name format.");
        }

        //instructor last name validation
        const instructorLastNameRegEx = /^[A-Za-z-'\s]+$/;

        if (instructorLastName == "") {
            failedMessage += "Error: instructor last name is a required field.\n";
            addCourseFormIsValid = false;
        }
        else if (!instructorLastNameRegEx.test(instructorLastName)) {
            failedMessage += "Error: instructor last name does not match required format.\n";
            addCourseFormIsValid = false;
        }
        else {
            console.log("Success! You entered a valid instructor last name format.");
        }

        //enrollment cap validation

        const enrollmentCapRegEx = /^[0-9]{2}$/;

        if (enrollmentCap == "") {
            failedMessage += "Error: enrollment cap is a required field.\n";
            addCourseFormIsValid = false;
        }
        else if (!enrollmentCapRegEx.test(enrollmentCap)) {
            failedMessage += "Error: enrollment cap does not match required format.\n";
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

            alert(
                `Year: ${semester} ${year}
                Course Prefix: ${coursePrefix}
                Course: ${courseName} ${courseNumber}-${courseSection}
                Room: ${room}
                Time: ${selectedTime} ${daysOffered}
                Credit Hours: ${creditHours}
                Instructor Name: ${instructorFirstName} ${instructorLastName}
                Enrollment Cap: ${enrollmentCap}`
            );
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
            failedMessage += "Error: instructor first name does not match required format.\n";
            addInstructorFormIsValid = false;

        }
        else {
            console.log("Success! You entered a valid instructor first name format.");
        }

        if (InstructorLastName == "") {  //check if it is empty
            failedMessage += "Error: instructor last name is a required field.\n";
            addInstructorFormIsValid = false;

        } else if (!nameRegex.test(InstructorLastName)) {  //test the value of name  against the defined name  RegEx
            failedMessage += "Error: instructor last name does not match required format.\n";
            addInstructorFormIsValid = false;

        }
        else {
            console.log("Success! You entered a valid instructor first name format.");
        }

        if (Department !== "" && !nameRegex.test(Department)) {
            failedMessage += "Error: department name does not match required format.\n";
            addInstructorFormIsValid = false;

        }
        else if (Department !== "") {
            console.log("Success! You entered a valid department name format.");
        }

        if (InstructorEmail === "") {  // check if it is empty
            failedMessage += "Error: instructor email is a required field.\n";
            addInstructorFormIsValid = false;


        } else if (!emailRegex.test(InstructorEmail)) {  //test the value of email  against the defined email RegEx
            failedMessage += "Error: instructor email does not match the required format.\n";
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
            console.log("Success! All fields are valid. Now printing information.");
            e.preventDefault()

            alert(
                `First Name: ${InstructorFirstName}
                Last Name: ${InstructorLastName}
                Department: ${Department}
                Rank: ${Rank}
                Email: ${InstructorEmail}`
            );
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
            errorMessage += "Error: first name does not match required format.\n";
        }

        if (!lastname) {
            errorMessage += "Error: last name is a required field.\n";
        }
        else if (!nameRegex.test(lastname)) {
            errorMessage += "Error: last name does not match required format.\n";
        }

        if (!semester) {
            errorMessage += "Error: semester is a required field.\n";
        }
        else if (!semRegex.test(semester)) {
            errorMessage += "Error: semester does not match required format.\n";
        }

        if (!courseprefix) {
            errorMessage += "Error: course prefix is a required field.\n";
        }
        else if (!coursePreRegex.test(courseprefix)) {
            errorMessage += "Error: course prefix does not match required format.\n";
        }

        if (!coursenumber) {
            errorMessage += "Error: course number is a required field.\n";
        }
        else if (!courseNumRegex.test(coursenumber)) {
            errorMessage += "Error: course number does not match required format.\n";
        }

        if (!coursesection) {
            errorMessage += "Error: course section is a required field.\n";
        }
        else if (!courseSecRegex.test(coursesection)) {
            errorMessage += "Error: course section does not match required format.\n";
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
            failedMessage += "Error: student first name does not match required format.\n";
            enrollStudentFormIsValid = false;

        }

        else {
            console.log("Success! You entered a valid student first name format.");
        }


        if (lastname === "") {  //check if it is empty

            failedMessage += "Error: student last name is a required field.\n";
            enrollStudentFormIsValid = false;

        } else if (!nameRegex.test(lastname)) {  //test the value of name  against the defined name  RegEx
            failedMessage += "Error: student last name does not match the required format.\n";
            enrollStudentFormIsValid = false;
        }

        else {
            console.log("Success! You entered a valid student last name format.");
        }

        if (major !== "" && !nameRegex.test(major)) {  //test the value of major  against the defined name  RegEx
            failedMessage += "Error: major does not match the required format.\n";
            enrollStudentFormIsValid = false;
        }

        else {
            console.log("Success! You entered a valid  major format.");
        }

        if (email === "") {  // check if it is empty
            failedMessage += "Error: student email is a required field.\n";
            enrollStudentFormIsValid = false;


        } else if (!emailRegex.test(email)) {  //test the value of email  against the defined email RegEx
            failedMessage += "Error: student email does not match the required format.\n";
            enrollStudentFormIsValid = false;
        }

        else {
            console.log("Success! You entered a valid student email format.");
        }

        // Extra Credit for enroll student page

        // extra validation for student firstname length:
        if (firstname.length < 2 || firstname.length > 20) {
            failedMessage += "Error: student first name must be between 2 and 20 characters.\n";
            enrollStudentFormIsValid = false;
        }

        // extra validation for student lastname length:

        if (lastname.length < 2 || lastname.length > 20) {
            failedMessage += "Error: student last name must be between 2 and 20 characters.\n";
            enrollStudentFormIsValid = false;
        }

        // extra validation for student major length:

        if (major.length < 3 || major.length > 50) {
            failedMessage += "Error: major must be between 3 and 50 characters.\n";
            enrollStudentFormIsValid = false;
        }


        if (enrollStudentFormIsValid == false) {
            console.log("Error: form can not be submitted due to issues with one or more fields.");
            alert(failedMessage); //displays errors back to user
            e.preventDefault()

            // If you reach this point, validation has passed.

        } else {
            console.log("Success! All fields are valid. Now printing information.");
            e.preventDefault()

            alert(
                `First Name: ${firstname}
                Last Name: ${lastname}
                Year: ${year}
                Major: ${major}
                Email: ${email}`
            );
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
            errorMessage += "Error: student first name does not match required format.\n";
        }

        if (!lastname) {
            errorMessage += "Error: last name is a required field.\n";
        }
        else if (!nameRegex.test(lastname)) {
            errorMessage += "Error: student last name does not match required format.\n";
        }

        if (!semester) {
            errorMessage += "Error: semester is a required field.\n";
        }
        else if (!semRegex.test(semester)) {
            errorMessage += "Error: semester does not match required format..\n";
        }

        if (!courseprefix) {
            errorMessage += "Error: course prefix is a required field.\n";
        }
        else if (!coursePreRegex.test(courseprefix)) {
            errorMessage += "Error: course prefix does not match required format.\n";
        }

        if (!coursenumber) {
            errorMessage += "Error: course number is a required field.\n";
        }
        else if (!courseNumRegex.test(coursenumber)) {
            errorMessage += "Error: course number does not match required format.\n";
        }

        if (!coursesection) {
            errorMessage += "Error: course section is a required field.\n";
        }
        else if (!courseSecRegex.test(coursesection)) {
            errorMessage += "Error: course section does not match required format.\n";
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