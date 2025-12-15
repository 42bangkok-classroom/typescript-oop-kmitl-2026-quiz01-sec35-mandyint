const accBalance = +process.argv[2];
const withdrawAmt = +process.argv[3];

if(Number.isNaN(accBalance) || accBalance < 0 || Number.isNaN(withdrawAmt) || withdrawAmt < 0){
    console.log("Invalid Input");
}

if(withdrawAmt <= accBalance && withdrawAmt <= 5000){
    console.log("Withdrawal approved");
}else if(withdrawAmt > accBalance){
    console.log("Insufficient balance");
}else if(withdrawAmt > 5000){
    console.log("Exceeds per-withdrawal limit");
}