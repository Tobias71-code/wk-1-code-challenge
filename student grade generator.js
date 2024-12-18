function getStudentGrade() {
    let marks = parseInt(prompt("Enter the student's marks (between 0 and 100):"));

    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Please enter a valid number between 0 and 100.");
        return;
    }

    let grade;

    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "C";
    } else if (marks >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }

    alert("The grade is: " + grade);
}
