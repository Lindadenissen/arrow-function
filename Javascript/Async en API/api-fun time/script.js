//console.log(randomPersonData);
const list = document.querySelector('.list_group');
let toggle = true;
const capricornSign = person => person.sign === Capricorn;

const removeList = () => {
  console.log(list.firstChild);
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  };
}

const addCountriesToDom = () => {
  if (toggle) {
  const setListOfCountries = randomPersonData.map((country) => country.region);
  const sortedList = [...new Set(setListOfCountries.sort())];
  sortedList.forEach((country) => {
    const newLi = document.createElement("li");
    newLi.innerHTML = country;
    list.appendChild(newLi);
  })
  toggle = false;
  } else {
  toggle = true;
  removeList();
  }
};

document
  .querySelector(".country_button")
  .addEventListener("click", addCountriesToDom);
  

//Capricorn assignment

const getStarSign = (day, month) => {
  if (day >= 22 && month === 12) return "Capricorn";
  if (day <= 20 && month === 1) return "Capricorn";
  return 0;
}

const setStarSign = person => {
  const day = parseInt(person.birthday.dmy.split("/")[0]);
  const month = parseInt(person.birthday.dmy.split("/")[1]);
  const sign = getStarSign(day, month);
  return sign;
 
}
const addCapricornWomenToDom = () => {
  if (toggle){
  return randomPersonData.filter(
    (person) => person.gender === "female" && person.age > 30 && setStarSign(person) === "Capricorn");
  } 
}
console.log(addCapricornWomenToDom());


//add capricorn woman
const addListToDom = () => {
  if (toggle) {
    const addWoman = addCapricornWomenToDom();
    console.log(addWoman);
    const sortedList = [... new Set(addWoman.sort())];
    console.log(sortedList);
    sortedList.forEach((arr) => {
    const newLi = document.createElement("li");
    const newImage = document.createElement("img");
    console.log(arr);
    newImage.src = arr.photo;
    newLi.innerHTML = arr.name + " " + arr.surname + " " + arr.birthday.dmy;
    list.appendChild(newLi);
    newLi.appendChild(newImage);
})
  toggle = false;
  } else {
  toggle = true;
  removeList();
  }
};

console.log(addListToDom);


let item = document.querySelector(".capricorn_button");
console.log(item);
item.addEventListener("click", () => addListToDom());

