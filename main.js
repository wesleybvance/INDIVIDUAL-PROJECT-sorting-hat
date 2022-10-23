console.log("sorting hat!")


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
</div>
</form>`;


// FUNCTION RENDERS CHOSEN HTML TO CHOSEN DIV
const renderToDom = (thisDiv, thisHtml) => {
  const selectedDiv = document.querySelector(thisDiv);
  selectedDiv.innerHTML = thisHtml;
};


// FUNCTION FOR FORM APPEARING ON BUTTON CLICK

const startSort = (event) => {
  if (event.target.id.includes("startSort")) {
    console.log('Start Sort - Form Appears')
  }
}

// EVENT LISTENER FOR BUTTON CLICK - FORM APPEARS

app.addEventListener('click', startSort);
