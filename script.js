AOS.init();

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsiv";
  } else {
    x.className = "topnav";
  }
}


const createBtn = document.querySelector(".create-btn");

createBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputt = document.querySelector(".inputt").value;
  alert(inputt);
});

window.history.replaceState({}, 'Your Website', '/');
