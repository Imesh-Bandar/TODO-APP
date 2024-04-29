const inputbox = document.getElementById("input-box");
const tasklist = document.getElementById("list-container");

function addtodo() {
  if (inputbox.value === "") {
    // Alret send
    alert("You must write something");
  } else {
    //Get element id value
    let li = document.createElement("li");
    //write inbox value as a li 
    li.innerHTML = inputbox.value;
    tasklist.appendChild(li);
    // Create Span Tag
    let span = document.createElement("span");
    // Write span with closing icon
    span.innerHTML = "\u00d7";
    //Appened it with li tag
    li.appendChild(span);
  }
  //add new item
  inputbox.value = "";
  savedata();
}
//When I click  the button
tasklist.addEventListener("click",

  function (e) {
    // Click ELEMENT IS LI
    if (e.target.tagName === "LI") {
        // change classname as a checked
      e.target.classList.toggle("checked");
    //   calling save data
      savedata()
    //   If I selected the span close icon
    } else if (e.target.tagName === "SPAN") {
        // remove the parent elemnt (LI element)
      e.target.parentElement.remove();
    //   calling save data
      savedata()
    }
  },
  false//Alrady close
);


function savedata(){
    // save tododata in a local storage as a data
    localStorage.setItem("data",tasklist.innerHTML);
}

function showTask(){
    // show alrady save data in a local storage
    tasklist.innerHTML=localStorage.getItem("data");
}
// call show task function 
showTask();