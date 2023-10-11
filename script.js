let ancre = [...document.querySelectorAll(".menu li")];
let section = [...document.querySelectorAll(".section")];
let secPos;

function posCal() {
  secPos = section.map((section) => section.offsetTop);
}
posCal();

ancre.forEach((link) => link.addEventListener("click", addScrollSmooth));
function addScrollSmooth(e) {
  let linkIndex = ancre.indexOf(e.target);
  window.scrollTo({
    top: secPos[linkIndex],
    behavior: "smooth",
  });
}

let nav = document.querySelector(".menu");

let tailleban = document.querySelector(".ban").offsetHeight;
window.addEventListener("resize", () => {
  tailleban = document.querySelector(".ban").offsetHeight;
  console.log(tailleban);
});

document.addEventListener("scroll", () => {
  posPage = window.scrollY;
  if (posPage >= tailleban) {
    nav.style.position = "fixed";
    nav.style.top = "0";
    document.querySelector(".a").style.paddingTop = "120px";
  } else {
    nav.style.position = "relative";
    document.querySelector(".a").style.paddingTop = "60px";
  }
});

(function () {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();

const allBlocs = document.querySelectorAll(".bloc");
allBlocs.forEach((bloc) => {
  bloc.addEventListener("mouseover", (e) => {
    for (let i = 0; i < allBlocs.length; i++) {
      if (allBlocs[i] !== e.target) {
        allBlocs[i].classList.remove("active");
        e.target.querySelector(".bloc-haut").style.color = "#3e3d89";
        e.target.querySelector(".ligne").style.background = "#3e3d89";
      }
    }
  });
  bloc.addEventListener("mouseout", (e) => {
    document.querySelector("#a").classList.add("noncol");
    document.querySelector("#b").classList.add("noncol");
    e.target.querySelector(".bloc-haut").style.color = "#2a2b69";
    e.target.querySelector(".ligne").style.background = "#2a2b69";
  });
});

const aBlocs = document.querySelectorAll("#a .bloc");
allBlocs.forEach((bloc) => {
  bloc.addEventListener("mouseover", (e) => {
    e.target.classList.add("active");
    let ifCol = false;
    for (let i = 0; i < aBlocs.length; i++) {
      if (aBlocs[i].classList.contains("active")) {
        ifCol = true;
      }
    }
    if (ifCol === false) {
      document.querySelector("#a").classList.add("noncol");
      document.querySelector("#b").classList.remove("noncol");
    } else {
      document.querySelector("#a").classList.remove("noncol");
      document.querySelector("#b").classList.add("noncol");
    }
  });
});

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

var divs = document.querySelectorAll("div");

// Vérifie s'il y a au moins un div dans le document
if (divs.length > 0) {
  // Récupère le dernier div dans la liste
  var dernierDiv = divs[divs.length - 1];

  // Supprime le dernier div du document
  dernierDiv.parentNode.removeChild(dernierDiv);
} else {
  console.log("Aucun div trouvé dans le document.");
}
