const op = process.argv[2];
const num1 = process.argv[3];
const num2 = process.argv[4];

if(op == null || Number.isNaN(num1) || Number.isNaN(num2) || num1 === "" || num2 === ""){
    console.log("Invalid input");
}else{
    switch(op){
        case 'add':
            console.log((+num1 + +num2).toString);
            break;
    
        case 'sub':
            console.log((+num1 - +num2).toString);
            break;
        
        case 'mul':
            console.log((+num1 * +num2).toString);
            break;
    
        case 'div':
            if(+num1 === 0 || +num2 === 0){
                console.log("Invalid input");
            }else{
                console.log((+num1 / +num2).toString);
            }
            break;
    
        default:
            console.log("Invalid operator");
            break;
    }
}