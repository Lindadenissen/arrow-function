const form = document.querySelector("#myForm");
const input = document.querySelector(".input");
const list = document.querySelector("#myList");
const button = document.querySelector(".addItem");
const trashbin = document.querySelector(".fa-solid fa-trash-can");

let toDoTask = () => {
  if(input.value !== '') {
    console.log("test");
    const toDo = input.value;
    postData(toDo)
    createToDoList()
  } else {
    alert("no task added");
  }
}

const createToDoList = async () => {
  let list = await getToDoList();
  console.log(list);

  list.forEach(element => {
    const listItem = document.createElement("li");
    const div = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    listItem.appendChild(checkbox);
    listItem.appendChild(div);

    const description = element.description;
    const done = element.done;
    const id = element._id;

    let newDoneValue;
    if (done === true) {
      newDoneValue = false;
      checkbox.checked = true;
    } else {checkbox.checked = false;
      newDoneValue = true;}
  })

    checkbox.addEventListener("click", function(){changeToDoList(documentid, description,newDoneValue)});

    const trashcan = document.createElement("input");
    trashcan.classList.add("fas-trashcan");
    trashcan.classList.add("fa-trash");
    listItem.appendChild(trashcan);

    trashcan.addEventListener("click", function(){deleteToDoItem(id)});

    div.innerText = description;
    taskList.appendChild(listItem);

  };

createToDoList();

  
  //step 1: loop through the list
  //step 2: get Description of loops
  //step 3: create an li in the loops
  //step 4: put description in HTML of li
  //step 5: appendChild li to ul
  // const newLi = document.createElement("li");
  //   newLi.innerHTML = toDo;
  //   list.appendChild(newLi);




button.addEventListener("click", (e) => {
    e.preventDefault();
    toDoTask();
  });



