// courses.js
// Samuel Pickett
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [{sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'}, { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}],
    enrollStudent: function(sectionNum, add=true){
        const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
        if (sectionIndex !== -1){
            if (add){
            this.sections[sectionIndex].enrolled ++;
            get_all_sections(this.sections);
            }
        
            else{
                this.sections[sectionIndex].enrolled --;
                get_all_sections(this.sections);
            }
        }
    },
};

function set_name_and_course_number(course){
    const courseName = document.getElementById("courseName");
    const courseCode = document.getElementById("courseCode");
    courseName.innerText = course.name;
    courseCode.innerText = course.code;
}

function get_section(section){
    return `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td>
    </tr>`
}

function get_all_sections(sections){
    const all_sections = sections.map(get_section);
    document.getElementById("sections").innerHTML = all_sections.join("");
}

set_name_and_course_number(aCourse);
get_all_sections(aCourse.sections);
const enroll = document.getElementById("enrollStudent");
const drop = document.getElementById("dropStudent");
enroll.addEventListener("click", function() {aCourse.enrollStudent(document.getElementById("sectionNumber").value)});
drop.addEventListener("click", function() {aCourse.enrollStudent(document.getElementById("sectionNumber").value, false)});