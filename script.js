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

// Appeler la fonction pour l'exécuter dès que la page est chargée
window.onload = ajouterTargetBlank;
