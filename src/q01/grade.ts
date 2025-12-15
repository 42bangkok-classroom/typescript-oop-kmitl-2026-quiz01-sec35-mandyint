const grade = +process.argv[2];
if(Number.isNaN(grade) || grade < 0) console.log("Invalid Input");

if(grade >= 80){
    console.log("A");
}else if(grade >= 70){
    console.log("B");
}else if(grade >= 60){
    console.log("C");
}else if(grade >= 50){
    console.log("D");
}else{
    console.log("F");
}