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
        let enrollStudentFormIsValid = true;
        // all validation

        const firstname = document.getElementById("StudentFirstName").value;
        const lastname=document.getElementById("StudentLastName").value;
        const year=document.getElementById("Year").value;
        const major=document.getElementById("Major").value;
        const email=document.getElementById("EmailAddress").value;

        const nameRegex = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;
        const emailRegex = /^[a-zA-Z]{2,3}[0-9]{3}@marietta\.edu$/;

        
        if (firstname===""){  //check if it is empty

            alert("This is a required field.");
            enrollStudentFormIsValid = false;
            e.preventDefault()
            return;

        }else if (!nameRegex.test(firstname)){  //test the value of name  against the defined name  RegEx
            alert("please enter a valid firstname.");
            enrollStudentFormIsValid = false;
            e.preventDefault()
            return;
        }

        if (lastname===""){  //check if it is empty

            alert("This is a required field");
            enrollStudentFormIsValid = false;
            e.preventDefault()
            return;

        }else if (!nameRegex.test(lastname)){  //test the value of name  against the defined name  RegEx
            alert("please enter a valid  lastname.");
            enrollStudentFormIsValid = false;
            e.preventDefault()
            return;
        }

        if (major !== "" && !nameRegex.test(major)) {  //test the value of major  against the defined name  RegEx
            alert("please enter a valid  lastname.");
            alert("Please enter a valid major.");
            enrollStudentFormIsValid = false;
            e.preventDefault()
            return;
        }

        if (email ===""){  // check if it is empty
            alert("This is a required field.");
            enrollStudentFormIsValid = false;
            e.preventDefault()
            return;

        }else if (!emailRegex.test(email)){  //test the value of email  against the defined email RegEx
            alert("please enter a valid email.");
            enrollStudentFormIsValid = false;
            e.preventDefault()
            return;
        }
        // If you reach this point, validation has passed.

        alert(    // the alert shows the message on the screen rather that the developer tools so we can change it later
            "All validation checks passed!\n\n" +
            "First Name: " + firstname +
            "\nLast Name: " + lastname +
            "\nYear: " + year +
            "\nMajor: " + major +
            "\nEmail: " + email    // is this is the display that he is talking about??
        );
    });
}

// -----REGISTER COURSE-----

if (registerCourseForm) {
    registerCourseForm.addEventListener("submit", function(e) {
        // validation rules go in here
    });
}
