function getGrades(inputSelector) {
  // get grades from the input box
    let grades_list = document.getElementById(inputSelector).value;
  // split them into an array (String.split(','))
    grades_list = grades_list.split(",");
  // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    grades_list = grades_list.map(grade => grade.trim().toUpperCase());
  // return grades
    return grades_list
}

function lookupGrade(grade) {
  // converts the letter grade to it's GPA point value and returns it
    if (grade === "A"){
        return 4
    }
    else if (grade === "B"){
        return 3
    }
    else if (grade === "C"){
        return 2
    }
    else if (grade === "D"){
        return 1
    }
    else if (grade === "F"){
        return 0
    }
}

function calculateGpa(grades) {
  // gets a list of grades passed in
  // convert the letter grades to gpa points
    let gpa_list = grades.map(lookupGrade);
  // calculates the GPA
    const gpa = gpa_list.reduce((sum, x) => sum + x, 0)/ gpa_list.length;
  // return the GPA
    return gpa.toFixed(2)
}

function outputGpa(gpa, selector) {
  // takes a gpa value and displays it in the HTML in the element identified by the selector
    document.querySelector(selector).innerText = gpa;
}

function clickHandler() {
  // when the button in our html is clicked:
  // get the grades entered into the input
    let grade_list = getGrades("grades");
  // calculate the gpa from the grades entered
    let gpa = calculateGpa(grade_list)
  // display the gpa
    outputGpa(gpa, "#output")
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);