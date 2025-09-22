// form js
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (e) {
    const inputs = this.querySelectorAll("input, textarea"); // include textarea
    let allFilled = true;

    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        allFilled = false;
        input.style.border = "2px solid red";
      } else {
        input.style.border = "";
      }
    });

    if (!allFilled) {
      e.preventDefault(); // stop submission
      alert("Please fill in all fields.");
    }
  });
// navbar js
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Toggle hamburger and close icon
  if (navLinks.classList.contains("active")) {
    hamburger.textContent = "×"; // Close icon
  } else {
    hamburger.textContent = "☰"; // Hamburger icon
  }
});
