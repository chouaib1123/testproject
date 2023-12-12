var openDiv = null;

function toggleHeight(clickedDiv) {
  if (openDiv && openDiv !== clickedDiv) {
    openDiv.style.maxHeight = "100px";
    openDiv.querySelector(".question .vect").classList.remove("rotate");
  }

  if (
    clickedDiv.style.maxHeight === "100px" ||
    clickedDiv.style.maxHeight === ""
  ) {
    clickedDiv.style.maxHeight = "500px";

    openDiv = clickedDiv;
    openDiv.querySelector(".question .vect").classList.add("rotate");
  } else {
    clickedDiv.style.maxHeight = "100px";
    openDiv.querySelector(".question .vect").classList.remove("rotate");
    openDiv = null;
  }
}
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const navbarHeight = navbar.offsetHeight;
  const scrollPosition = window.scrollY;
  const firstsection = document.querySelector(".first_vue");
  const home = document.querySelector(".gobacktotop");
  if (scrollPosition >= navbarHeight) {
    navbar.classList.add("sticky");
    firstsection.classList.add("under-navbar");
    home.classList.add("stickky");
  } else {
    navbar.classList.remove("sticky");
    firstsection.classList.remove("under-navbar");
    home.classList.remove("stickky");
  }
});
function joinUs() {
  const container = document.querySelector(".main-container");
  const content = document.querySelector(".screen1");
  const home = document.querySelector(".gobacktotop");
  home.style.display = "none";
  container.style.transform = "translateX(-100%)";
  content.style.transform = "translateX(0%)";

  document.body.classList.add("overflow-hidden");
}
function next1() {
  const content1 = document.querySelector(".screen21");
  const content2 = document.querySelector(".screen22");
  const test = document.querySelector(".joinaschoices1 .inp").textContent;
  const one = document.getElementById("nameInput");
  const two = document.getElementById("phoneInput");
  const three = document.getElementById("emailInput");
  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const msg = document.querySelector(".message1");
  const msg2 = document.querySelector(".message4");

  if (
    one.value.trim() === "" ||
    two.value.trim() === "" ||
    three.value.trim() === ""
  ) {
    msg.style.display = "block";
  } else {
    if (!emailPattern.test(emailInput.value)) {
      msg.style.display = "none";
      msg2.style.display = "block";
    } else {
      msg2.style.display = "none";
      if (test === "Affiliate" || test === "مسوق") {
        msg.style.display = "none";
        content1.style.transform = "translateX(0%)";
      } else if (test === "Seller" || test === "بائع") {
        msg.style.display = "none";
        content2.style.transform = "translateX(0%)";
      }
    }
  }
}

function next2() {
  const content = document.querySelector(".screen211");
  const textContent = document.querySelector(
    ".joinaschoices2 .inp"
  ).textContent;
  const input = document.getElementById("hiddenInput2");
  msg = document.querySelector(".message2");

  if (input.value.trim() !== "") {
    content.style.transform = "translateX(0%)";
    msg.style.display = "none";
  } else {
    msg.style.display = "block";
  }
}
function next21() {
  const content = document.querySelector(".screen222");
  msg = document.querySelector(".message3");
  const textContent = document.querySelector(
    ".joinaschoices3 .inp"
  ).textContent;
  const textContent2 = document.querySelector(
    ".joinaschoices4 .inp"
  ).textContent;
  const one = document.getElementById("hiddenInput3");
  const two = document.getElementById("hiddenInput4");
  if (one.value.trim() !== "" && two.value.trim() !== "") {
    content.style.transform = "translateX(0%)";
    msg.style.display = "none";
  } else {
    msg.style.display = "block";
  }
}
function next3() {
  const content = document.querySelector(".screen_last");
  content.style.transform = "translateX(0%)";
}
function back2() {
  const content = document.querySelector(".screen211");
  content.style.transform = "translateX(100%)";
}
function back21() {
  const content = document.querySelector(".screen222");
  content.style.transform = "translateX(100%)";
}
function back1() {
  const content = document.querySelectorAll(".screen2");
  content.forEach((container) => {
    container.style.transform = "translateX(100%)";
  });
}
function goback() {
  const content = document.querySelector(".main-container");
  const containers = document.querySelectorAll(".screen");

  containers.forEach((container) => {
    container.style.transform = "translateX(100%)";
  });
  content.style.transform = "translateX(0%)";

  setTimeout(function () {
    location.reload();
  }, 1000);

  document.body.classList.remove("overflow-hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-item");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop =
          targetSection.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

const backToTopButton = document.getElementById("back-to-top-btn");

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

function setupDropdownListeners(
  choicesSelector,
  dropdownSelector,
  updateFunction,
  hiddenInputId
) {
  document
    .querySelector(choicesSelector)
    .addEventListener("click", function () {
      var dropdown = document.querySelector(dropdownSelector);

      dropdown.style.display =
        dropdown.style.display === "none" || dropdown.style.display === ""
          ? "block"
          : "none";
    });

  document
    .querySelectorAll(`${dropdownSelector} .choix`)
    .forEach(function (choix) {
      choix.addEventListener("click", function () {
        var flech = document.querySelector(`${choicesSelector} .flech`);
        flech.classList.remove("rotate");
        updateFunction(choix.textContent);
        joinastype = choix.textContent;
        if (hiddenInputId) {
          var hiddenInput = document.getElementById(hiddenInputId);
          hiddenInput.value = joinastype;
        }
      });
    });
}

function updateJoinAs(type, choicesSelector, dropdownSelector) {
  document.querySelector(`${choicesSelector} .inp`).textContent = type;
  var dropdown = document.querySelector(dropdownSelector);
  dropdown.style.display =
    dropdown.style.display === "none" || dropdown.style.display === ""
      ? "block"
      : "none";
}

setupDropdownListeners(
  ".joinaschoices1",
  ".joinasdropdown1",
  function (type) {
    updateJoinAs(type, ".joinaschoices1", ".joinasdropdown1");
  },
  "hiddenInput"
);

setupDropdownListeners(
  ".joinaschoices2",
  ".joinasdropdown2",
  function (type) {
    updateJoinAs(type, ".joinaschoices2", ".joinasdropdown2");
  },
  "hiddenInput2"
);

setupDropdownListeners(
  ".joinaschoices3",
  ".joinasdropdown3",
  function (type) {
    updateJoinAs(type, ".joinaschoices3", ".joinasdropdown3");
  },
  "hiddenInput3"
);

setupDropdownListeners(
  ".joinaschoices4",
  ".joinasdropdown4",
  function (type) {
    updateJoinAs(type, ".joinaschoices4", ".joinasdropdown4");
  },
  "hiddenInput4"
);

document.querySelectorAll(".joinaschoices").forEach(function (joinaschoice) {
  joinaschoice.addEventListener("click", function () {
    var flech = joinaschoice.querySelector(".flech");
    flech.classList.toggle("rotate");
  });
});