function redirectToLink(url) {
  window.location.href = url;
}

const buttons = document.querySelectorAll(".contenu .button");

buttons.forEach((button) => {
  button.addEventListener("mouseover", function () {
    const child = this.querySelector(".degrade");
    if (child) {
      child.classList.remove("degrade");
    }
  });

  button.addEventListener("mouseout", function () {
    const child = this.querySelector("*");
    if (child && !child.classList.contains("degrade")) {
      child.classList.add("degrade");
    }
  });
});

/*
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
});*/

function activateBlocs(containerId) {
  const blocs = document.querySelectorAll(`#${containerId} .bloc`);
  blocs.forEach((bloc) => {
    bloc.addEventListener("mouseover", () => {
      blocs.forEach((b) => b.classList.remove("active"));
      bloc.classList.add("active");
      document.getElementById(containerId).classList.remove("noncol");
      // Ajouter la classe "degrade" au h3 du bloc survolé
      const heading = bloc.querySelector("h3");
      if (heading) {
        heading.classList.add("degrade");
      }
      // Ajouter la classe "degrade" à l'élément i (icône) du bloc survolé
      const icon = bloc.querySelector("i");
      if (icon) {
        icon.classList.add("degrade");
      }
    });
  });
  // Pour retirer la classe active quand la souris quitte les blocs
  document.addEventListener("mouseout", () => {
    blocs.forEach((b) => b.classList.remove("active"));
    document.getElementById(containerId).classList.add("noncol");
    // Retirer la classe "degrade" de tous les h3 et i
    const headings = document.querySelectorAll(`#${containerId} .bloc h3`);
    headings.forEach((heading) => {
      heading.classList.remove("degrade");
    });
    const icons = document.querySelectorAll(`#${containerId} .bloc i`);
    icons.forEach((icon) => {
      icon.classList.remove("degrade");
    });
  });
}
activateBlocs("a");
activateBlocs("b");

const links = document.querySelectorAll(".navbar ul li a");
const container = document.querySelector(".main-container");

container.addEventListener("scroll", () => {
  const scrollPosition = container.scrollTop + container.offsetHeight / 2;

  links.forEach((link) => {
    const sectionId = link.getAttribute("href").substring(1);
    const section = document.getElementById(sectionId);

    if (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        link.parentElement.classList.add("active");
      } else {
        link.parentElement.classList.remove("active");
      }
    }
  });
});

document.querySelector(".btnForm").addEventListener("click", function (event) {
  event.preventDefault(); // Empêcher le comportement par défaut du lien
  const form = document.querySelector("form");
  // Envoyer le formulaire
  form.submit();
});

// use a script tag or an external JS file

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  /*

  const mainContainer = document.querySelector(".main-container");
  const presentationParagraphs = document.querySelectorAll(
    "#apropos .presentation p"
  );

  const disableScrollSnap = () => {
    mainContainer.style.scrollSnapType = "none";
  };

  const enableScrollSnap = () => {
    mainContainer.style.scrollSnapType = ""; // ou une autre valeur appropriée
  };

  const animateLetters = (letters, paragraph) => {
    paragraph.textContent = "";
    letters.forEach((letter) => paragraph.appendChild(letter));

    gsap.from(letters, {
      opacity: 0,
      stagger: 0.03,
      scrollTrigger: {
        scroller: ".main-container",
        trigger: paragraph, // Utilisation du paragraphe comme déclencheur
        start: "top 38%",
        end: "400% 38%",
        scrub: true, // Activation du scrubbing
        markers: true,
        pin: "#apropos .sous-container",
        onToggle: ({ isActive }) => {
          if (isActive) {
            disableScrollSnap(); // Désactive le scroll snap pendant l'animation
          } else {
            enableScrollSnap(); // Réactive le scroll snap après l'animation
          }
        },
      },
    });
  };

  presentationParagraphs.forEach((paragraph) => {
    const letters = Array.from(paragraph.textContent).map((letter) => {
      const span = document.createElement("span");
      span.textContent = letter;
      return span;
    });
    animateLetters(letters, paragraph);
  });
  */
});

function createPopup(popupNode) {
  let overlay = popupNode.querySelector(".overlay");
  let closeBtn = popupNode.querySelector(".close-btn");

  function openPopup() {
    popupNode.classList.add("active");
  }
  function closePopup() {
    popupNode.classList.remove("active");
  }
  overlay.addEventListener("click", closePopup);
  closeBtn.addEventListener("click", closePopup);
  return openPopup;
}

let popups = document.querySelectorAll(".popup");
popups.forEach(function (popupNode) {
  let popup = createPopup(popupNode);
  let card = popupNode.previousElementSibling;
  card.addEventListener("click", function () {
    popup();
  });
});

function ajouterTargetBlank() {
  var liens = document.getElementsByTagName("a");
  for (var i = 0; i < liens.length; i++) {
    // Vérifier si le lien est à l'intérieur de la div "nav"
    if (!liens[i].closest(".navbar") && !liens[i].closest("#home")) {
      liens[i].setAttribute("target", "_blank");
    }
  }
}
window.onload = ajouterTargetBlank;

document.addEventListener("DOMContentLoaded", function () {
  const barItems = document.querySelectorAll(".bar i");
  let moonIcon = document.querySelector(".bar .bx");

  let couleursModifiees = false; // Variable pour suivre si les couleurs ont été modifiées

  barItems.forEach((item) => {
    item.addEventListener("click", function () {
      if (!couleursModifiees) {
        // COULEURS CLAIR
        document.documentElement.style.setProperty(
          "--couleur-principale",
          "#E9EDEF"
        );
        document.documentElement.style.setProperty(
          "--couleur-secondaire",
          "#D5DADE"
        );
        document.documentElement.style.setProperty("--blanc", "#101019");
        document.documentElement.style.setProperty(
          "--degrade",
          "-webkit-linear-gradient(45deg, #9f89e1, #7f95c6, #83c0f2)"
        );

        // Au clic sur l'icône, change la classe
        moonIcon.classList.remove("bx-moon"); // Supprime la classe "bx-moon"
        moonIcon.classList.add("bx-sun"); // Ajoute la classe "bx-sun"

        /*// BUTTONS
        const buttons = document.querySelectorAll(".button");

        buttons.forEach((button) => {
          button.addEventListener("mouseenter", function () {
            this.querySelector("p").style.color = "#E9EDEF";
          });

          button.addEventListener("mouseleave", function () {
            this.querySelector("p").style.color = "";
          });
        });

        buttons.forEach((button) => {
          button.addEventListener("mouseenter", function () {
            this.querySelector("a").style.color = "#E9EDEF";
          });

          button.addEventListener("mouseleave", function () {
            this.querySelector("a").style.color = "";
          });
        });
*/
        couleursModifiees = true; // Mettre à jour le statut des couleurs
      } else {
        // COULEURS FONCE
        document.documentElement.style.setProperty(
          "--couleur-principale",
          "#101019"
        );
        document.documentElement.style.setProperty(
          "--couleur-secondaire",
          "#1e1e29"
        );
        document.documentElement.style.setProperty("--blanc", "#fcfcfe");
        document.documentElement.style.setProperty(
          "--degrade",
          "-webkit-linear-gradient(45deg, #9f89e1, #7f95c6, #83c0f2)"
        );

        moonIcon.classList.remove("bx-sun"); // Supprime la classe "bx-moon"
        moonIcon.classList.add("bx-moon"); // Ajoute la classe "bx-sun"

        couleursModifiees = false; // Mettre à jour le statut des couleurs
      }
    });
  });
});

document.body.style.cursor = "none";

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#9f89e1",
  "#9a8fe5",
  "#9595e8",
  "#909aeb",
  "#8ca0ee",
  "#88a5ef",
  "#85aaf1",
  "#83aef2",
  "#81b3f2",
  "#81b8f2",
  "#82bcf2",
  "#83c0f2",
  "#81b3f2",
  "#81b8f2",
  "#82bcf2",
  "#83c0f2",
  "#81b3f2",
  "#81b8f2",
  "#82bcf2",
  "#83c0f2",
  "#81b3f2",
  "#81b8f2",
  "#82bcf2",
  "#83c0f2",
];
circles.forEach((circle, index) => {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", (e) => {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircle() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach((circle, index) => {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircle);
}

animateCircle();
