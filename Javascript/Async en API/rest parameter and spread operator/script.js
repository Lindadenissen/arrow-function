//oefening 1 rest parameter
let addNumber = (...number) => number.reduce((prev, curr) => prev + curr)

console.log(addNumber(3, 5, 8, 13));

//oefening 2 spread operator
let addThreeNumber = (x, y, z) => x + y + z

let args = [15, 20, 30]
console.log(addThreeNumber(...args));