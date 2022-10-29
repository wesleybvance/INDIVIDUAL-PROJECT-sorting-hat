console.log("sorting hat!")


// TARGET APP DIV 
const app = document.querySelector("#app");
// TARGET FORM DIV
const formBanner = document.querySelector("#formBanner");
// TARGET INTRO FORM DIV
const introCard = document.querySelector("#introCard");
// HOGWARTS LOGO IMG
const hogwartsLogo = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b4bdfc0-163c-4a6b-b800-0213094cfc2d/d665icx-cbbc58fe-5ff6-421e-bbeb-cedcfbe670e3.png/v1/fill/w_1600,h_1727,strp/hogwarts_crest_by_geijvontaen_d665icx-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcyNyIsInBhdGgiOiJcL2ZcLzViNGJkZmMwLTE2M2MtNGE2Yi1iODAwLTAyMTMwOTRjZmMyZFwvZDY2NWljeC1jYmJjNThmZS01ZmY2LTQyMWUtYmJlYi1jZWRjZmJlNjcwZTMucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.381VNcGRF2V5-_UQei_5yNyNPT8gjhJBAoNZcSZxYoQ";


const clearDiv = "";


// ARRAY HOLDING STUDENT OBJECTS
const students = [
  { id: 1,
    firstName: "Andre",
    lastName: "Vance",
    house: "Slytherin",
    img: "https://i.pinimg.com/564x/be/35/18/be35180c85de84ada35434f616d69068.jpg",
  },
  { id: 2,
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    img: "https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg",
  },
  {
    id: 3, 
    firstName: "Luna",
    lastName: "Lovegood",
    house: "Ravenclaw",
    img: "https://images.ctfassets.net/usf1vwtuqyxm/t6GVMDanqSKGOKaCWi8oi/74b6816d9f913623419b98048ec87d25/LunaLovegood_WB_F5_LunaLovegoodPromoCloseUp_Promo_080615_Port.jpg?w=914&q=70&fm=jpg",
  }, 
  {
    id: 4,
    firstName: "Cedric", 
    lastName: "Diggory", 
    house: "Hufflepuff", 
    img: "https://pbs.twimg.com/media/FQKotwOWYAMEXQ-.jpg", 
  }
];

// ARRAY HOLDING VOLD ARMY OBJECTS
const army = [
  { id: 1,
    firstName: "Voldemort",
    lastName: "",
    house: "Slytherin",
    img: "https://static.wikia.nocookie.net/harrypotter/images/a/aa/Voldemort_Headshot_DHP1.png"
  },
  { id: 2,
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    img: "https://static.wikia.nocookie.net/hogwarts-life/images/8/82/Draco_Malfoy.jpg",
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

// FUNCTION CREATES UNIQUE USER ID
const username = (student) => {
  const fname = `${student.firstName}`;
  const lname = `${student.lastName}`;
  const house = `${student.house}`;
  const lnamep = lname.slice(0, 8);
  const newId = fname.charAt(0)+lnamep+"-"+house;
  return newId;
};

const assignId = (student) => {
  student.id = username(student);
};

// HOUSES FORM HTML 
const houseSelect = `<select id="houseMenu" class="form-select" aria-label="Default select example">
<option selected>Select A House</option>
<option value="1">Gryffindor</option>
<option value="2">Slytherin</option>
<option value="3">Ravenclaw</option>
<option value="4">Hufflepuff</option>
<option value="5">All Houses</option>
</select>`

// MAIN PAGE HTML 
const mainPage = `<div id="formBanner" class="container-two"></div>

<div id="enrolled" class="container-three"></div>

<div id="currentClass" class="container-four">
  <div id="allHouses" class="container-four-inner">
    
      <div id="gryffindor" class="house"></div>
    
    
      <div id="slytherin" class="house"></div>
    
    
      <div id="ravenclaw" class="house"></div>
    
    
      <div id="hufflepuff" class="house"></div>
    
  </div>
  <div id="voldArmy" class="army"></div>
</div>`


// STUDENT FORM HTML
const formName =  `<form id="studentForm">
<div class="row">
  <div class="col">
    <input type="text" id="fname" class="form-control" placeholder="First name" required>
  </div>
  <div class="col">
    <input type="text" id="lname" class="form-control" placeholder="Last name">
  </div>
  <p><div class="col">
    <input type="text" id="imgurl" class="form-control" placeholder="Image URL">
  </div></p>
  <button type="submit" class="btn btn-primary" id="sortMe">Sort Me!</button>
  <div class="error" id="formError"></div>
</div>
</form>`;

// STUDENT TO CARD HTML FUNCTION
const studentCard = (student) => {
  return `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${student.img}" alt="${student.firstName}, proud member of ${student.house}.">
  <div class="card-body" id="${student.house}card">
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
  </div>
</div>`}

const renderArmy = (array) => {
  let cards = "";
  array.forEach((soldier) => {
    cards += armyCard(soldier);
  })
  renderToDom("#voldArmy", cards)
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
  const form = document.querySelector("#studentForm");
  const newStudent = {
    id: students.length + 1,
    firstName: document.querySelector("#fname").value,
    lastName: document.querySelector("#lname").value,
    img: document.querySelector("#imgurl").value,
  };
  
  if ((document.querySelector("#imgurl").value)==="") {
   newStudent.img = hogwartsLogo;
  } else
  form.reset();
  students.push(newStudent);
  sortStudent(students[students.length - 1]);
  assignId(students[students.length - 1]);
  renderGryffindor(students);
  renderHufflepuff(students);
  renderSlytherin(students);
  renderRavenclaw(students);
};

// CLEARDIV FUNCTION 

const clearHouse = (id) => {
  renderToDom(id, clearDiv);
};

// FILTER BY HOUSE FUNCTION 

const filterHouse = (e) => {
  const griffId = `<div id="gryffindor" class="house"></div>`;
  const slythId = `<div id="slytherin" class="house"></div>`;
  const ravenId = `<div id="ravenclaw" class="house"></div>`;
  const huffId = `<div id="hufflepuff" class="house"></div>`;
  const allId = `<div id="gryffindor" class="house"></div>
                <div id="slytherin" class="house"></div>
                <div id="ravenclaw" class="house"></div>
                <div id="hufflepuff" class="house"></div>`
  if (houseMenu.value==="1") {
    renderToDom("#allHouses", clearDiv);
    renderToDom("#allHouses", griffId);
    renderGryffindor(students);
  } else if (houseMenu.value==="2") {
    renderToDom("#allHouses", clearDiv);
    renderToDom("#allHouses", slythId);
    renderSlytherin(students);
  } else if (houseMenu.value==="3") {
    renderToDom("#allHouses", clearDiv);
    renderToDom("#allHouses", ravenId);
    renderRavenclaw(students);
  } else if (houseMenu.value==="4") {
    renderToDom("#allHouses", clearDiv);
    renderToDom("#allHouses", huffId);
    renderHufflepuff(students);
  } else if (houseMenu.value==="5") {
    renderToDom("#allHouses", clearDiv);
    renderToDom("#allHouses", allId);
    renderAll(students);
  }
};



// FUNCTION FOR CREATE STUDENT FORM, HOUSES, AND ARMY APPEARING ON PAGE ON BUTTON CLICK + SETTING UP RESULTING FUNCTIONS

const startSort = (event) => {
  if (event.target.id.includes("startSort")) {
    renderToDom("#app", mainPage)
    renderToDom("#formBanner", formName);
    // renderToDom("#introCard", clearDiv);
    renderToDom("#enrolled", houseSelect);
    renderAll();
    const houseMenu = document.querySelector("#houseMenu");
    const houseDiv = document.querySelector("#enrolled");
    houseMenu.addEventListener('change', filterHouse);
  }


  // DEFINE FORM - SELECT ON DOM & ADD EVENT LISTENER FOR SUBMITTING/CREATING STUDENT CARD 

  const form = document.querySelector("#studentForm")
  form.addEventListener('submit', createStudent);
}

// EVENT LISTENER FOR BUTTON CLICK - FORM APPEARS

app.addEventListener('click', startSort);


// EXPEL FUNCTIONALITY

app.addEventListener('click', (e) => {
  if (e.target.id.includes("expel")) {
    const [, id] = e.target.id.split("--");

    const index = students.findIndex(e=> e.id === Number(id));

    const darkSiding = students.splice(index, 1);
    const newSoldier = darkSiding.pop()
    army.push(newSoldier);
    console.log(army);
    renderAll(students);
  }
});
