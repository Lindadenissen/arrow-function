const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" }
];

const findSpiderMan = superheroes.find(hero => hero.name === 'Spiderman');

console.log(findSpiderMan);

  // Find Spiderman
  // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}


//B 

const doubleArrayValues = function(array) {
  let newArray = [];
  array.forEach(number => {
    newArray.push(number * 2);
  });
  return newArray;
};

console.log (doubleArrayValues([1, 2, 3]))
// result should be [2, 4, 6]


//C 
const containsNumberBiggerThan10 = function(array) {
  return array.some(number => {
    return number > 10;
  });
};
// Let op! Wanneer je van een functie verwacht dat deze True of False (een boolean) retourneert, is het gebruikelijk om er een werkwoord voor te zetten.
// zodat het een gesloten vraag wordt.
console.log("Je suis bigger than 10:",
  containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])
);


//D 
const isItalyInTheGreat7 = function (land) {
  return land.includes('Italy');
};

console.log (isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'])) 


//E 
const tenfold = function (array){
  let newArray = [];
  array.forEach(number => {
    newArray.push(number * 10);
  })
  return newArray;
}

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
// result should be [10, 40, 30, 60, 90, 70, 110]


//F 
const isBelow100 = function (array) {
  return array.every (number => number <= 100)
};

console.log('onder de 100? ' + isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
// result should be: false

console.log(
  "Onder de 100, Should be true:",
  isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98]))

//G 
const bigSum = function (items){
return items.reduce((sum, item) => sum + item)
}

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
// result should be 1118