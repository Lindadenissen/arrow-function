const superheroes = [
  {name: "Batman", alter_ego: "Bruce Wayne"}, 
  {name: "Superman", alter_ego: "Clark Kent"}, 
  {name: "Spiderman", alter_ego: "Peter Parker"}]
  
  // Hier komt jouw functie
  var findSpiderMan = superheroes.find (function(element){
    return element.name == "Spiderman"
  })

    
  console.log(findSpiderMan(superheroes)) 
  // Find Spiderman
  // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

//B 
let doubleArrayValues = ['1', '2', '3',];
let newArr = doubleArrayValues.map (myFunction);

function myFunction(num){
  return num * 2;
};

console.log(num);

//C 
const containsNumberBiggerThan10 = function (number){
    number.some(number => number > 10);
}

containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]) 
  // result should be true
  containsNumberBiggerThan10([1,2,1,2,1,2])
  // result should be false

//D 
const isItalyInTheGreat7 = function (land) {
  let found = land.find (land => land.name === 'Italy');
};

console.log (isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'])) 

//E 
const tenfold = function (num){
  let result = (num * 10);
}


console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
// result should be [10, 40, 30, 60, 90, 70, 110]

//F 
const isBelow100 = function (number){
  let result = number.every (isBelow100 < 100);
}

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
// result should be: false