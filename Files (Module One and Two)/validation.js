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

        //constants (used for checks)
        const year = document.getElementById("Year").value;
        const coursePrefix = document.getElementById("CoursePrefix").value;
        const courseNumber = document.getElementById("CourseNumber").value;
        const courseSection = document.getElementById("CourseSection").value;
        const room = document.getElementById("Room").value;
        const creditHours = document.getElementById("CreditHours").value;
        const instructorFirstName = document.getElementById("InstructorFirstName").value;
        const instructorLastName = document.getElementById("InstructorLastName").value;
        const enrollmentCap = document.getElementById("EnrollmentCap").value;

        //year validation
        const yearRegEx = /^[3-9][0-9]{3}$|^202[6-9]$|^20[3-9][0-9]$|^2[1-9][0-9][0-9]$/; //regEx expression
        
        if (year == "") { 
            console.log("Error: required field.");
            addCourseFormIsValid = false;
        }
        else if (!yearRegEx.test(year)) { //only test the value of year against the defined year RegEx if something is in the field (otherwise, skip since it's a required field)
            //since above uses ! (not operator), this would be if the year does NOT match rules
            console.log("Error: year does not match required format.");
            addCourseFormIsValid = false; 
        }
        else {
            console.log("Success! You entered a valid year format.");
        }

        //course prefix validation
        const coursePrefixRegEx = /^[A-Z]{3,4}$/;

        if (coursePrefix == "") {
            console.log("Error: required field.");
            addCourseFormIsValid = false;
        }
        else if (!coursePrefixRegEx.test(coursePrefix)) {
            console.log("Error: course prefix does not match required format.");
            addCourseFormIsValid = false;
        }
        else {
            console.log("Success! You entered a valid course prefix format.");
        }

        //course number validation
        const courseNumberRegEx = /^[1-4][0-9][0-9]$/;

        if (courseNumber == "") {
            console.log("Error: required field.");
            addCourseFormIsValid = false;
        }
        else if (!courseNumberRegEx.test(courseNumber)) {
            console.log("Error: course number does not match required format.");
            addCourseFormIsValid = false;
        }
        else {
            console.log("Success! You entered a valid course number format.");
        }

        //course section validation
        const courseSectionRegEx = /^[0-9][0-9]$/;

        if (courseSection == "") {
            console.log("Error: required field.");
            addCourseFormIsValid = false;
        }
        else if (!courseSectionRegEx.test(courseSection)) {
            console.log("Error: course section does not match required format.");
            addCourseFormIsValid = false;
        }
        else {
            console.log("Success! You entered a valid course section format.");
        }

        //room validation
        const roomRegEx = /^[A-Za-z'\s]+\s?[0-9]{2,3}[a-zA-Z]?$/;

        if (!roomRegEx.test(room)) {
            console.log("Error: room does not match required format.");
            addCourseFormIsValid = false;
        }
        else {
            console.log("Success! You entered a valid room format.");
        }

        //credit hours validation
        const creditHoursRegEx = /^[0-4]$/;

        if (creditHours == "") {
            console.log("Error: required field.");
            addCourseFormIsValid = false;
        }
        else if (!creditHoursRegEx.test(creditHours)) {
            console.log("Error: credit hours does not match required format.");
            addCourseFormIsValid = false;
        }
        else {
            console.log("Success! You entered a valid credit hours format.");
        }

        //instructor first name validation
        const instructorFirstNameRegEx = /^[A-Za-z-'\s]+$/;

        if (instructorFirstName == "") {
            console.log("Error: required field.");
            addCourseFormIsValid = false;
        }
        else if (!instructorFirstNameRegEx.test(instructorFirstName)) {
            console.log("Error: instructor first name does not match required format.");
            addCourseFormIsValid = false;
        }
        else {
            console.log("Success! You entered a valid instructor first name format.");
        }

        //instructor last name validation
        const instructorLastNameRegEx = /^[A-Za-z-'\s]+$/;

        if (instructorLastName == "") {
            console.log("Error: required field.");
            addCourseFormIsValid = false;
        }
        else if (!instructorLastNameRegEx.test(instructorLastName)) {
            console.log("Error: instructor last name does not match required format.");
            addCourseFormIsValid = false;
        }
        else {
            console.log("Success! You entered a valid instructor last name format.");
        }

        //enrollment cap validation

        const enrollmentCapRegEx = /^[0-9]{2}$/;

        if (enrollmentCap == "") {
            console.log("Error: required field.");
            addCourseFormIsValid = false;
        }
        else if (!enrollmentCapRegEx.test(enrollmentCap)) {
            console.log("Error: enrollment cap does not match required format.");
            addCourseFormIsValid = false;
        }
        else {
            console.log("Success! You entered a valid enrollment cap name format.");
        }

        if (addCourseFormIsValid == false) {
            console.log("Error: form can not be submitted due to issues with one or more fields.");
            e.preventDefault()
        } else {
            console.log("Success! All fields are valid. Now printing information.");
            e.preventDefault()
            alert(
                `Year: ${year}
                Course Prefix: ${coursePrefix}
                Course: ${courseNumber}-${courseSection}
                Room: ${room}
                Credit Hours: ${creditHours}
                Instructor Name: ${instructorFirstName} ${instructorLastName}
                Enrollment Cap: ${enrollmentCap}`
            );
        }

    });
}

// -----ADD INSTRUCTOR-----

if (addInstructorForm) {
    addInstructorForm.addEventListener("submit", function(e) {
        // validation rules go in here

         let addInstructorFormIsValid = true;
        // all validation

        const InstructorFirstName = document.getElementById("InstructorFirstName").value;
        const InstructorLastName =document.getElementById("InstructorLastName").value;
        const Department=document.getElementById("Department").value;
        const InstructorEmail=document.getElementById("InstructorEmailAddress").value;
        const Rank = document.getElementById("Rank").value;

        const nameRegex = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;
        const emailRegex = /^[a-zA-Z]{2,3}[0-9]{3}@marietta\.edu$/;         
        
        if (InstructorFirstName===""){  //check if it is empty

            console.log("Error: This is a required field.");
            addInstructorFormIsValid = false;
            

        }else if (!nameRegex.test(InstructorFirstName)){  //test the value of name against the defined name  RegEx
            console.log("Error: instructor first name does not match required format.");
            addInstructorFormIsValid = false;
        
        }
        else {
            console.log("Success! You entered a valid instructor first name format.");
        }

        if (InstructorLastName===""){  //check if it is empty

            console.log("Error: This is a required field");
            addInstructorFormIsValid= false;
            

        }else if (!nameRegex.test(InstructorLastName)){  //test the value of name  against the defined name  RegEx
            console.log("Error: Instructor last name does not match the required format");
            addInstructorFormIsValid= false;

        }
        else {
            console.log("Success! You entered a valid instructor first name format.");
        }

        if (Department !== "" && !nameRegex.test(Department)){
            console.log("Error:Department name does not match the required format.")
            addInstructorFormIsValid= false;
        
        }
        else if(Department !== ""){
            console.log("Success! You entered a valid department name format.");
        }
        

        if (InstructorEmail ===""){  // check if it is empty
            console.log("Error: This is a required field.");
            addInstructorFormIsValid = false;
            

        }else if (!emailRegex.test(InstructorEmail)){  //test the value of email  against the defined email RegEx
            console.log("Error: The email does not match the required email format.");
            addInstructorFormIsValid = false;
    
        }
        else {
            console.log("Success! You entered a valid email format.");
        }

        if (addInstructorFormIsValid == false) {
            console.log("Error: form can not be submitted due to issues with one or more fields.");
            e.preventDefault()

            // If you reach this point, validation has passed.

        } else {
            console.log("Success! All fields are valid. Now printing information.");
            e.preventDefault()

            alert(
                `First Name: ${InstructorFirstName }
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

            console.log("Error: This is a required field.");
            enrollStudentFormIsValid = false;


        }else if (!nameRegex.test(firstname)){  //test the value of name  against the defined name  RegEx
            console.log("Error: student first name does not match required format.");
            enrollStudentFormIsValid = false;
    
        }

        else {
            console.log("Success! You entered a valid student first name format.");
        }


        if (lastname===""){  //check if it is empty

            console.log("Error: This is a required field");
            enrollStudentFormIsValid = false;


        }else if (!nameRegex.test(lastname)){  //test the value of name  against the defined name  RegEx
            console.log("Error: student last name does not match the required format.");
            enrollStudentFormIsValid = false;
        }

        else {
            console.log("Success! You entered a valid student last name format.");
        }


        if (major !== "" && !nameRegex.test(major)) {  //test the value of major  against the defined name  RegEx
            console.log("Error: Major does not match the required format");
            enrollStudentFormIsValid = false;
        }

        else {
            console.log("Success! You entered a valid  major format.");
        }


        if (email ===""){  // check if it is empty
            console.log("Error: This is a required field.");
            enrollStudentFormIsValid = false;


        }else if (!emailRegex.test(email)){  //test the value of email  against the defined email RegEx
            console.log("Error: The email does not match the required format");
            enrollStudentFormIsValid = false;
        }

        else {
            console.log("Success! You entered a valid student email format.");
        }
        
        if (enrollStudentFormIsValid == false) {
            console.log("Error: form can not be submitted due to issues with one or more fields.");
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
    registerCourseForm.addEventListener("submit", function(e) {
        // validation rules go in here
    });
}
