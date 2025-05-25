let argnum = process.argv[2];
let arg = Number(argnum);
if (Number.isInteger(arg)){
    console.log (`My number: ${arg}`);
} else{
    console.log("Not a number");
}