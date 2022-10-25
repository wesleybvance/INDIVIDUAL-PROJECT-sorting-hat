console.log("sorting hat!")

// ARRAYS HOLDING STUDENT OBJECTS
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



// TARGET APP DIV 
const app = document.querySelector("#app");

// TARGET FORM DIV
const formCont = document.querySelector("#formCont");


// FORM HTML
const formName =  `<form>
<div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name">
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name">
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
    <a href="#" class="btn btn-primary expel">EXPEL?</a>
  </div>
</div>`}


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

// TEST CALLING CARDS
renderGryffindor(students);
renderHufflepuff(students);
renderSlytherin(students);
renderRavenclaw(students);

// FUNCTION FOR FORM APPEARING ON BUTTON CLICK

const startSort = (event) => {
  if (event.target.id.includes("startSort")) {
    renderToDom("#formCont", formName);
  }
}

// EVENT LISTENER FOR BUTTON CLICK - FORM APPEARS

app.addEventListener('click', startSort);


// FUNCTION TO ADD CARDS TO DOM
