function aceitarCookies() {
  localStorage.setItem("cookie-aceito", "true");
  document.getElementById("cookie-banner").style.display = "none";
}

window.onload = function() {
  if (localStorage.getItem("cookie-aceito") === "true") {
    document.getElementById("cookie-banner").style.display = "none";
  }
};

const toRoll = document.getElementById("header");
const pixelsAmount = "50";

document.addEventListener("scroll", function() {
    if(window.scrollY > pixelsAmount) {
        toRoll.classList.add("scrolled")
    } else {
        toRoll.classList.remove("scrolled")
    }
});

document.querySelector('.open-menu').addEventListener('click', e => {
    document.querySelector('header .sidebar').classList.add('open')
})

document.querySelector('.close-menu button').addEventListener('click', e => {
    document.querySelector('header .sidebar').classList.remove('open')
})

document.querySelector('.sidebar .backdrop').addEventListener('click', e => {
    document.querySelector('header .sidebar').classList.remove('open')
})

const questions = document.querySelectorAll('.faq-question');

    questions.forEach((question) => {
      question.addEventListener('click', () => {
        question.classList.toggle('active');
        const answer = question.nextElementSibling;
        answer.classList.toggle('open');
      });
    });