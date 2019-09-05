const inputs = process.argv;
let totalSum = 0;

for( let i =2; i < inputs.length; i++){
    totalSum += Number(inputs[i]);
}

console.log(totalSum);