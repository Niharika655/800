var students=[];
function submit(){
    var displayStudents=[];
    for (var j = 1; j<=4; j++) {
        var studentName=document.getElementById("name_of_the_student_"+j).value;
        console.log(studentName);
        students.push(studentName);
    }
    console.log(students);
    var length=students.length;
    console.log(length);
    for (var k = 0; k<length; k++) {
     displayStudents.push("<h4>Name - "+students[k]+"</h4>");
        
    }
    console.log(displayStudents); 
    document.getElementById("display_name_with_commas").innerHTML=displayStudents;
    var removecommas=displayStudents.join(" ");
    console.log(removecommas);
    document.getElementById("display_name_without_commas").innerHTML=removecommas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    students.sort();
    var displayStudentsSort=[];
    console.log(students);
    var length=students.length;
    console.log(length);
    for (var k = 0; k<length; k++) {
     displayStudentsSort.push("<h4>Name - "+students[k]+"</h4>");
        
    }
    console.log(displayStudentsSort); 
    var removecommas=displayStudentsSort.join(" ");
    console.log(removecommas);
    document.getElementById("display_name_without_commas").innerHTML=removecommas;
   }