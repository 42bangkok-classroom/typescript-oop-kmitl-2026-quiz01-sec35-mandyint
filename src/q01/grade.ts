const grade = +process.argv[2];
if(Number.isNaN(grade) || grade < 0){
    console.log("Invalid Input");
}else if(grade >= 80){
    console.log("Grade is A");
}else if(grade >= 70){
    console.log("Grade is B");
}else if(grade >= 60){
    console.log("Grade is C");
}else if(grade >= 50){
    console.log("Grade is D");
}else{
    console.log("Grade is F");
}