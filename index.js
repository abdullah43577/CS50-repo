// JS code for active page
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll(".nav a").forEach((link) => {
  //for each links that includes the reference in the activePage, where activePage = window.location.pathname; execute this lines of code
  if (link.href.includes(activePage)) {
    link.classList.add("active");
  }
});

// Responsive Navbar

const icon = document.getElementById("icon");
const bar = document.querySelector("header .nav ul");

icon.addEventListener("click", () => {
  bar.classList.toggle("show");
});

// FAQ Section
const questions = document.querySelectorAll(".question i");
const answers = document.querySelectorAll(".answer");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", () => {
    //console.log(questions[i]);

    //rotate the icon onClick
    questions[i].classList.toggle("fa-rotate-180");
    answers[i].classList.toggle("hidden");
  });
}
