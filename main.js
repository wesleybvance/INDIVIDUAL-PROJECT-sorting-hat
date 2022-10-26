console.log("sorting hat!")


// TARGET APP DIV 
const app = document.querySelector("#app");
// TARGET FORM DIV
const formCont = document.querySelector("#formCont");



// ARRAY HOLDING STUDENT OBJECTS
const students = [
  { id: 1,
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    img: "link",
  },
  { id: 2,
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    img: "link",
  },
  {
    id: 3, 
    firstName: "Wesley",
    lastName: "Vance",
    house: "Hufflepuff",
    img: "link",
  }
];

// ARRAY HOLDING VOLD ARMY OBJECTS
const army = [
  { id: 1,
    firstName: "Tom",
    lastName: "Riddle",
    house: "Gryffindor",
    img: "link",
  },
  { id: 2,
    firstName: "Someone",
    lastName: "Else",
    house: "Gryffindor",
    img: "link",
  },
]

// -----SORTING FUNCTIONS!!------

// RANDOMIZE NUMBER 1-4
const randomNum = () => {
  let num = Math.floor((Math.random() * 4) + 1);
  return num;
};

// SORT STUDENT: ADD/UPDATE HOUSE ATTRIBUTE TO STUDENT OBJECT BASED ON RANDOMIZED NUMBER
const sortStudent = (object) => {
  let bead = randomNum();
  if (bead === 1) {
    object.house = "Gryffindor";
  } else if (bead === 2) {
    object.house = "Slytherin";
  } else if (bead === 3) {
    object.house = "Ravenclaw";
  } else if (bead === 4) {
    object.house = "Hufflepuff";
  } else object.house = "Parseltongue?"
};

// -----------------------


// FORM HTML
const formName =  `<form>
<div class="row">
  <div class="col">
    <input type="text" id="fname" class="form-control" placeholder="First name">
  </div>
  <div class="col">
    <input type="text" id="lname" class="form-control" placeholder="Last name">
  </div>
  <button type="submit" class="btn btn-primary" id="sortMe">Sort Me!</button>
</div>
</form>`;

// STUDENT TO CARD HTML FUNCTION
const studentCard = (student) => {
  return `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${student.img}" alt="${student.firstName}, proud member of ${student.house}.">
  <div class="card-body">
    <h5 class="card-title">${student.firstName} ${student.lastName}</h5>
    <p class="card-text">${student.firstName} ${student.lastName} has been sorted. Welcome to ${student.house}, ${student.firstName}!</p>
    <button type="button" class="btn btn-primary" id="expel--${student.id}">EXPEL</button>
  </div>
</div>`}

// ARMY TO CARD HTML FUNCTION
const armyCard = (soldier) => {
  return `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${soldier.img}" alt="${soldier.firstName}, disgraced.">
  <div class="card-body">
    <h5 class="card-title">${soldier.firstName} ${soldier.lastName}</h5>
    <p class="card-text">${soldier.firstName} ${soldier.lastName} has been expelled. Welcome to Voldemort's Army!</p>
    <button type="button" class="btn btn-primary" id="expel--${soldier.id}">??</button>
  </div>
</div>`}

const renderArmy = (array) => {
  let cards = "";
  array.forEach((soldier) => {
    cards += armyCard(soldier);
  })
  renderToDom("#voldemort", cards)
};


// FUNCTION RENDERS CHOSEN HTML TO CHOSEN DIV
const renderToDom = (thisDiv, thisHtml) => {
  const selectedDiv = document.querySelector(thisDiv);
  selectedDiv.innerHTML = thisHtml;
};

// RENDER CARDS TO DOM FUNCTIONS
// GRYFFINDOR:
const renderGryffindor = (array) => {
  let cards = "";
  array.forEach((student) => {
    if (student.house === 'Gryffindor') {
      cards += studentCard(student);
    }
    return cards;
  })
  renderToDom("#gryffindor", cards)
};
// SLYTHERIN:
const renderSlytherin = (array) => {
  let cards = "";
  array.forEach((student) => {
    if (student.house === 'Slytherin') {
      cards += studentCard(student);
    }
    return cards;
  })
  renderToDom("#slytherin", cards)
};
// RAVENCLAW
const renderRavenclaw = (array) => {
  let cards = "";
  array.forEach((student) => {
    if (student.house === 'Ravenclaw') {
      cards += studentCard(student);
    }
    return cards;
  })
  renderToDom("#ravenclaw", cards)
};
// HUFFLEPUFF
const renderHufflepuff = (array) => {
  let cards = "";
  array.forEach((student) => {
    if (student.house === 'Hufflepuff') {
      cards += studentCard(student);
    }
    return cards;
  })
  renderToDom("#hufflepuff", cards)
};

// RENDER ALL EXISTING STUDENTS IN ARRAY TO HOUSE DIVS

const renderAll = () => {
  renderGryffindor(students);
  renderHufflepuff(students);
  renderSlytherin(students);
  renderRavenclaw(students); 
  renderArmy(army);
};


// CREATE NEW STUDENT FROM FORM VALUES (USER INPUT)

const createStudent = (event) => {
  event.preventDefault();
  const form = document.querySelector("form")

  const newStudent = {
    id: students.length + 1,
    firstName: document.querySelector("#fname").value,
    lastName: document.querySelector("#lname").value,
  }
  form.reset();
  students.push(newStudent);
  sortStudent(students[students.length - 1]);
  renderGryffindor(students);
  renderHufflepuff(students);
  renderSlytherin(students);
  renderRavenclaw(students);
};

// FUNCTION FOR FORM APPEARING ON BUTTON CLICK

const startSort = (event) => {
  if (event.target.id.includes("startSort")) {
    renderToDom("#formCont", formName);
    renderAll();
  }
  // DEFINE FORM - SELECT ON DOM & ADD EVENT LISTENER FOR SUBMITTING/CREATING STUDENT CARD 

  const form = document.querySelector("form")
  form.addEventListener('submit', createStudent);
}

// EVENT LISTENER FOR BUTTON CLICK - FORM APPEARS

app.addEventListener('click', startSort);


// BUILDING DELETE FUNCTIONALITY

app.addEventListener('click', (e) => {
  if (e.target.id.includes("expel")) {
    const [, id] = e.target.id.split("--");

    const index = students.findIndex(e=> e.id === Number(id));

    const darkSiding = students.splice(index, 1);
    const newSoldier = darkSiding.pop()
    army.push(newSoldier);
    console.log(army);
    renderAll();
    
  }
})
