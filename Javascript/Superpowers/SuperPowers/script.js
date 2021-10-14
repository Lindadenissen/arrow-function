const superheroes = [
  {
  "name": "Batman",
  "publisher": "DC Comics",
  "alter_ego": "Bruce Wayne",
  "first_appearance": "Detective Comics #27",
  "weight": "210"
  },
  {
  "name": "Superman",
  "publisher": "DC Comics",
  "alter_ego": "Kal-El",
  "first_appearance": "Action Comics #1",
  "weight": "220"
  },
  {
  "name": "Flash",
  "publisher": "DC Comics",
  "alter_ego": "Jay Garrick",
  "first_appearance": "Flash Comics #1",
  "weight": "195"
  },
  {
  "name": "Green Lantern",
  "publisher": "DC Comics",
  "alter_ego": "Alan Scott",
  "first_appearance": "All-American Comics #16",
  "weight": "186"
  },
  {
  "name": "Green Arrow",
  "publisher": "DC Comics",
  "alter_ego": "Oliver Queen",
  "first_appearance": "All-American Comics #16",
  "weight": "195"
  },
  {
  "name": "Wonder Woman",
  "publisher": "DC Comics",
  "alter_ego": "Princess Diana",
  "first_appearance": "The Incredible Hulk #180",
  "weight": "165"
  },
  {
  "name": "Blue Beetle",
  "publisher": "DC Comics",
  "alter_ego": "Dan Garret",
  "first_appearance": "Mystery Men Comics #1",
  "weight": "145"
  },
  {
  "name": "Spider Man",
  "publisher": "Marvel Comics",
  "alter_ego": "Peter Parker",
  "first_appearance": "Amazing Fantasy #15",
  "weight": "167"
  },
  {
  "name": "Captain America",
  "publisher": "Marvel Comics",
  "alter_ego": "Steve Rogers",
  "first_appearance": "Captain America Comics #1",
  "weight": "220"
  },
  {
  "name": "Iron Man",
  "publisher": "Marvel Comics",
  "alter_ego": "Tony Stark",
  "first_appearance": "Tales of Suspense #39",
  "weight": "250"
  },
  {
  "name": "Thor",
  "publisher": "Marvel Comics",
  "alter_ego": "Thor Odinson",
  "first_appearance": "Journey into Myster #83",
  "weight": "200"
  },
  {
  "name": "Hulk",
  "publisher": "Marvel Comics",
  "alter_ego": "Bruce Banner",
  "first_appearance": "The Incredible Hulk #1",
  "weight": "1400"
  },
  {
  "name": "Wolverine",
  "publisher": "Marvel Comics",
  "alter_ego": "James Howlett",
  "first_appearance": "The Incredible Hulk #180",
  "weight": "200"
  },
  {
  "name": "Daredevil",
  "publisher": "Marvel Comics",
  "alter_ego": "Matthew Michael Murdock",
  "first_appearance": "Daredevil #1",
  "weight": "200"
  },
  {
  "name": "Silver Surfer",
  "publisher": "Marvel Comics",
  "alter_ego": "Norrin Radd",
  "first_appearance": "The Fantastic Four #48",
  "weight": "unknown"
  }
  ]


//1  
const superheroesNames = superheroes.map((superhero) => superhero.name);

console.log(superheroesNames);

//2
const lightSuperheroes = superheroes.filter((superhero) => superhero.weight < 190);

console.log(lightSuperheroes);

//3 
const heavySuperheroes = superheroes.filter((superhero) => superhero.weight > 200).map (superhero => superhero.name);

console.log(heavySuperheroes);

//4
const firstAppearance = superheroes.map((superhero) => superhero.name + ": " + superhero.first_appearance);


console.log(firstAppearance);


//5
const dcComics = superheroes.filter(superhero => superhero.publisher === "DC Comics");

const marvel = superheroes.filter((superhero) => superhero.publisher === "Marvel Comics");

console.log(dcComics);
console.log(marvel);

//6 
const weightDcComics = superheroes.filter(superhero => superhero.publisher === "DC Comics").reduce((total, superhero) => total + (parseInt(superhero.weight)), 0);

console.log(weightDcComics);

//7
//zit een unknown in daarom werkt het niet. 

const weightMarvel = superheroes.filter(superhero => superhero.publisher === "Marvel Comics").reduce((total, superhero) => total + (parseInt(superhero.weight)), 0);

console.log(weightMarvel);

//8
const weightSuperheroes = superheroes.map((superhero) => parseInt(superhero.weight));


console.log(Math.max (weightSuperheroes));