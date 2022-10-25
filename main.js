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
    object.house = "gryffindor";
  } else if (bead === 2) {
    object.house = "slytherin";
  } else if (bead === 3) {
    object.house = "ravenclaw";
  } else if (bead === 4) {
    object.house = "hufflepuff";
  } else object.house = "parseltongue?"
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

// CARDS TO HTML FUNCTION



// FUNCTION RENDERS CHOSEN HTML TO CHOSEN DIV
const renderToDom = (thisDiv, thisHtml) => {
  const selectedDiv = document.querySelector(thisDiv);
  selectedDiv.innerHTML = thisHtml;
};


// FUNCTION FOR FORM APPEARING ON BUTTON CLICK

const startSort = (event) => {
  if (event.target.id.includes("startSort")) {
    renderToDom("#formCont", formName);
  }
}

// EVENT LISTENER FOR BUTTON CLICK - FORM APPEARS

app.addEventListener('click', startSort);


// FUNCTION TO ADD CARDS TO DOM
