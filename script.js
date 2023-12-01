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

document.addEventListener("DOMContentLoaded", function () {
  const texte = "Je suis Jelain John Jesuratnam ";
  const texteDiv = document.querySelector(".prenom");
  let i = 0;

  function afficherTexte() {
    texteDiv.textContent = texte.slice(0, i);
    i++;

    if (i <= texte.length) {
      const delai = Math.random() * 130 + 60;
      setTimeout(afficherTexte, delai);
    } else {
      document.querySelector(".clignotant").style.display = "none";
    }
  }

  afficherTexte();
});

document.addEventListener("DOMContentLoaded", function () {
  const cardWrapper = document.querySelector(".card-wrapper");
  const cards = document.querySelectorAll(".card");
  const totalCards = cards.length;
  const middleIndex = Math.floor(totalCards / 2);

  // Fonction pour déplacer les cartes vers la gauche
  function moveLeft() {
    cardWrapper.appendChild(cardWrapper.firstElementChild);
    updateCardStyles();
  }

  // Fonction pour déplacer les cartes vers la droite
  function moveRight() {
    cardWrapper.insertBefore(
      cardWrapper.lastElementChild,
      cardWrapper.firstElementChild
    );
    updateCardStyles();
  }

  // Fonction pour mettre à jour les styles des cartes
  function updateCardStyles() {
    const cardElements = Array.from(cards);
    const middleCardIndex = cardElements.indexOf(
      cardWrapper.querySelector(".card:nth-child(2)")
    );

    cardElements.forEach((card, index) => {
      const adjustedIndex =
        (index - middleCardIndex + middleIndex + totalCards) % totalCards;
      if (adjustedIndex === middleIndex) {
        // Si la carte est au milieu, changez le fond en rouge
        card.classList.add("active");
        card.classList.remove("cote");
      } else {
        // Sinon, réinitialisez le fond à sa valeur d'origine
        card.classList.remove("active");
        card.classList.add("cote");
      }
    });
  }

  // Ajout des écouteurs d'événements pour les flèches
  const leftArrow = document.querySelector(".left-arrow");
  leftArrow.addEventListener("click", moveRight);

  const rightArrow = document.querySelector(".right-arrow");
  rightArrow.addEventListener("click", moveLeft);

  // Appliquez initialement les styles des cartes

  updateCardStyles();
});
