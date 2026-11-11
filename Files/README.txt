Course Registration System: Group Project Module 2
For CSCI 330: Web Design and Programming

Drew Martin, Maisee Carrier, Beatrice Hayfron

This project is a work-in-progress layout for a student to search and enroll for classes and professors as well as register/drop courses. It utilizes HTML and CSS to create a simple, visually pleasing course registration system. JavaScript is also used to provide form validation and provide users with feedback about their responses.

The technologies this is meant for are computers and mobile devices on a browser.

The directory is structured neatly with a single-level directory. Every file has a unique descriptive name and it is easy to get from one to the other.

The project starts by opening "homepage.html" with all of the options for the student listed. From there, it is easy to navigate from page to page with no issue. Users can enter or select information on each form and submit it. This module does not send the inputted information anywhere, but errors are displayed in the console if the user fails to provide valid or and/or required input. JavaScript is also used to display the inputted information back to the user (if they inputted all data in the appropriate manner). The header on each page (Course Registration System) functions as a link back to the home page so users can navigate easily from any form page back to the home page. The manuals also include the navigation pane seen on the home page for simplicity purposes.

All pages besides the Home Page and the Manuals include some form of validation. This validation is implemented using RegEx (Regular Expressions). 

On the Enroll Student page, the required fields are: student's first name, student's last name, and student's email address. 
On the Add Instructor page, the required fields are: instructor's first name, instructor's last name, and instructor's email address.
On the Add Course page, the required fields are: year, course prefix, course number, course section, credit hours, instructor's first name, instructor's last name, and enrollment cap.
On the Register Course page, the required fields are: student's first name, student's last name, year, course prefix, course number, and course section.
On the Drop Course page, the required fields are: student's first name, student's last name, year, course prefix, course number, and course section.

Any name field (first and last, student or instructor) all must be a string that can include spaces, hyphens, and apostrophes.
Any email field must begin with either 2 or 3 letters, followed by exactly 3 digits and then "@marietta.edu".
Any year field must consist of 4 digits and can not be before 2026.
Any course prefix field must be either 3 or 4 capital letters.
Any course number field must have exactly 3 digits and be between 100 and 499.
Any course section field must have exactly 2 digits.
Any credit hours field must be between 0 and 4.
Any enrollment cap field must be a number with 2 digits.

To test the major features of this module, go to any of the 5 pages with forms and enter some information in some or all of the fields. Once valid input has been submitted, a pop-up message will appear in the browser displaying the content that has been received. If no pop-up is displayed, one or more of the fields has not been validated. To gain more specific information about where the error is coming from, please examine the console via the developer tools of your browser. An error will print and specify what kind of validation error is occurring. 
On the Add Course page, a feature has been implemented that helps handle the display of the available times for courses depending on the value selected for "Days Offered". To test this feature, I would change the value of the Days Offered field and watch as different lists appear and disappear. 

Our group completed one extra credit opportunity for this module. We added 5 additional validation rules that help make the site more realistic. One of these rules is in the Add Course form, where the Course Name must be between 5 and 50 characters. The rule in that form verifies that the input for the department field is between 2 and 50 characters. The other 3 rules are in the Enroll Student form. The first rule in this form verifies that the student's first name is between 2 and 20 characters. The same type of rule is also applied to the student's last name and the major.





