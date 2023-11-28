document.addEventListener("DOMContentLoaded", () => {
  const createBtn = document.querySelector(".create-btn");
  const inputFields = document.querySelectorAll(".inputt");
  const alert = document.querySelector(".fil-alert");

  createBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let allFieldsFilled = true;

    // Check if all input fields have values
    for (const inputField of inputFields) {
      if (inputField.value.trim() === "") {
        alert.style.display = "block";
        allFieldsFilled = false;
        break;
      }
    }

    if (allFieldsFilled) {
      // All input fields are filled, redirect to noti.html
      alert.style.display = "none";
      createBtn.innerHTML = "Loading...";
      // Save input values to localStorage
      inputFields.forEach((inputField, index) => {
        localStorage.setItem(`inputValue${index + 1}`, inputField.value);
      });
    }
  });

  window.hist.replaceState({}, "Your Website", "/");
});
