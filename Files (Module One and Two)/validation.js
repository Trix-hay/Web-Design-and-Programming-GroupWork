//get all form elements from the form and store them for references
const addCourseForm = document.getElementById("addCourseForm");
const addInstructorForm = document.getElementById("addInstructorForm");
const dropCourseForm = document.getElementById("dropCourseForm");
const enrollStudentForm = document.getElementById("enrollStudentForm");
const registerCourseForm = document.getElementById("registerCourseForm");

// -----ADD COURSE-----

if (addCourseForm) { //confirm the page has this specific form before running validation. if the form element isn't found, we aren't on that page and don't need this validation
    addCourseForm.addEventListener("submit", function(e) {
        let addCourseFormIsValid = true; //boolean to track what submission should do (more efficient way to track overall status)
        //year validation
        const year = document.getElementById("Year").value;
        if (year == "") {
            console.log("Error: required field.");
            addCourseFormIsValid = false;
        }
        const yearRegEx = /^[3-9][0-9]{3}$|^202[6-9]$|^20[3-9][0-9]$|^2[1-9][0-9][0-9]$/; //regEx expression
        if (yearRegEx.test(year)) { //test the value of year against the defined year RegEx
            console.log("Success! You entered a valid year format."); //this will likely change later once we implement the display feature
        }
        else {
            console.log("Error: year does not match required format.");
            addCourseFormIsValid = false; 
        }

        //course prefix validation

        //course number validation

        //course section validation

        //room validation

        //credit hours validation

        //instructor first name validation

        //instructor last name validation

        //enrollment cap validation

        if (addCourseFormIsValid == false) {
            console.log("Error: form can not be submitted due to issues with one or more fields.");
            e.preventDefault()
        } else {
            console.log("Success! All fields are valid. Now printing information.");
            e.preventDefault()
            //this is where we will call some function that displays the information back to the user
        }

    });
}

// -----ADD INSTRUCTOR-----

if (addInstructorForm) {
    addInstructorForm.addEventListener("submit", function(e) {
        // validation rules go in here
    });
}

// -----DROP COURSE-----

if (dropCourseForm) {
    dropCourseForm.addEventListener("submit", function(e) {
        // validation rules go in here
    });
}

// -----ENROLL STUDENT-----

if (enrollStudentForm) {
    enrollStudentForm.addEventListener("submit", function(e) {
        // validation rules go in here
    });
}

// -----REGISTER COURSE-----

if (registerCourseForm) {
    registerCourseForm.addEventListener("submit", function(e) {
        // validation rules go in here
    });
}