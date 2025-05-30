//  arrays.js
// Samuel Pickett
const steps = ["one", "two", "three"];
const grades = ["A", "B", "A"];
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const luckynum = 21
const nums = [12, 34, 21, 54];
function listTemplate(step) {
    return '<li>' + step + '</li>' ;//the html string made from step
}

function getGPA(grade){
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

const gradeGPA = grades.map(getGPA);
const gpa = gradeGPA.reduce((sum, x) => sum + x, 0)/ gradeGPA.length;
const fruit = fruits.filter(fruits => fruits.length < 6);
console.log(nums.indexOf(luckynum));
const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join("");// set the innerHTML