const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./CourseRegistration.db");

db.serialize(() => {

    db.run(
        `INSERT INTO Registration (student_id, course_id)
         VALUES (?, ?), (?, ?), (?, ?)`,
        [1, 1, 2, 1, 3, 1],
        function(err) {
            if (err) {
                console.log(err.message);
            } else {
                console.log("Test registrations successful!");
                console.log("Registrations added:", this.changes);
            }
        }
    );

});

db.close();