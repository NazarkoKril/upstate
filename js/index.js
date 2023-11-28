"use strick";
// forma email + validator
document.addEventListener("DOMContentLoaded", function () {
  let submitButton = document.getElementById("submitButton");

  submitButton.addEventListener("click", function () {
    validateEmail();
  });

  function validateEmail() {
    let emailInput = document.getElementById("email");
    let thankYouMessage = document.getElementById("thankYouMessage");
    let emailForm = document.getElementById("emailForm");
    let footerTitle = document.querySelector(".footer__title");

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(emailInput.value)) {
      thankYouMessage.style.display = "block";
      emailForm.style.display = "none";
      footerTitle.style.display = "none";
    } else {
      alert("Invalid email address");
    }
  }
});
// faq list
document.addEventListener("DOMContentLoaded", function () {
  let faqItems = document.querySelectorAll(".faq__item");

  faqItems.forEach(function (faqItem) {
    faqItem.addEventListener("click", toggleAnswer);
  });

  function toggleAnswer(event) {
    let clickedItem = event.currentTarget;

    faqItems.forEach(function (item) {
      if (item !== clickedItem && item.classList.contains("open")) {
        item.classList.remove("open");
        let answer = item.querySelector(".faq__answer");
        answer.style.animation = "fadeOutUp 0.5s ease-out";
        setTimeout(function () {
          answer.style.display = "none";
        }, 500);
      }
    });

    clickedItem.classList.toggle("open");
    let answer = clickedItem.querySelector(".faq__answer");
    if (clickedItem.classList.contains("open")) {
      answer.style.display = "block";
      answer.style.animation = "fadeInDown 0.5s ease-out";
    } else {
      answer.style.animation = "fadeOutUp 0.5s ease-out";
      setTimeout(function () {
        answer.style.display = "none";
      }, 500);
    }
  }
});
// header scroll
document.addEventListener("DOMContentLoaded", function () {
  let header = document.querySelector(".header__nav");
  let navItems = document.querySelectorAll(".nav__items a");
  let sections = document.querySelectorAll("section");

  header.classList.add("hidden");

  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;

    let activeSection = null;

    sections.forEach((section) => {
      if (
        scrollPosition >= section.offsetTop &&
        scrollPosition < section.offsetTop + section.offsetHeight
      ) {
        activeSection = section;
      }
    });

    navItems.forEach((item) => {
      if (
        activeSection &&
        item.getAttribute("href").substring(1) === activeSection.id
      ) {
        item.style.color = "#dad7d7";
      } else {
        item.style.color = "#ffffff";
      }
    });

    let servicesSectionTop = document.getElementById("services").offsetTop;

    if (scrollPosition >= servicesSectionTop) {
      header.classList.remove("hidden");
    } else {
      header.classList.add("hidden");
    }
  });
});

// LOCAL STORAGE
document.addEventListener("DOMContentLoaded", function () {
  let barDiv = document.getElementById("barDiv");
  let closeButton = document.getElementById("closeButton");

  closeButton.addEventListener("click", function () {
    barDiv.style.display = "none";
    localStorage.setItem("barDivHidden", "true");
  });

  if (localStorage.getItem("barDivHidden") === "true") {
    barDiv.style.display = "none";
  }
});

// burger
let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let body = document.body;

let anchorLinks = document.querySelectorAll(".menu__items a");

anchorLinks.forEach(function (anchor) {
  anchor.addEventListener("click", function () {
    menuBtn.classList.remove("active");
    menu.classList.remove("active");
    body.style.overflow = "auto";
    let targetId = this.getAttribute("href").substring(1);
    let targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
});

// burger-header
let menuBtn1 = document.querySelector(".menu-btn1");
let menu1 = document.querySelector(".menu1");
let body1 = document.body;

let anchorLinks1 = document.querySelectorAll(".menu__items1 a");

anchorLinks1.forEach(function (anchor) {
  anchor.addEventListener("click", function () {
    menuBtn1.classList.remove("active");
    menu1.classList.remove("active");
    body1.style.overflow = "auto";
    let targetId = this.getAttribute("href").substring(1);
    let targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

menuBtn1.addEventListener("click", function () {
  menuBtn1.classList.toggle("active");
  menu1.classList.toggle("active");

  if (menu1.classList.contains("active")) {
    body1.style.overflow = "hidden";
  } else {
    body1.style.overflow = "auto";
  }
});
