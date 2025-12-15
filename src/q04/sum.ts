const num = +process.argv[2];
let sum = 0;
if(Number.isNaN(num) || num < 0 || num === null){
    console.log("Invalid Input");
}else{
    for(let i = 1; i <= num; i++){
        sum += i;
    }
    console.log("Sum: ", sum);
}

