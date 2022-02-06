const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  let flag = false;

  burger.addEventListener("click", () => {
    nav.style.opacity = 1;

    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    burger.classList.toggle("toggle");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      flag = true;
      if (flag === true) {
        navLinks.forEach((linke) => {
          linke.style.animation = "";
        });
      }

      burger.classList.toggle("toggle");
    });
  });
};
const anchorColor = () => {
  const anchor = document.querySelectorAll(".link-a-kov-oldalra");
  const currentPage = window.location.href.split("/")[3];
  switch (currentPage) {
    case "":
      anchor[0].style.borderBottom = "1px solid red";
      break;
    case "index.html":
      anchor[0].style.borderBottom = "1px solid red";
      break;
    case "bevezetes.html":
      anchor[1].style.borderBottom = "1px solid red";
      break;
    case "monitorok.html":
      anchor[2].style.borderBottom = "1px solid red";
      break;
    case "grafikus_kartyak.html":
      anchor[3].style.borderBottom = "1px solid red";
      break;
    case "nyomtatok.html":
      anchor[4].style.borderBottom = "1px solid red";
      break;
    case "plotterek.html":
      anchor[5].style.borderBottom = "1px solid red";
      break;
    case "projektorok.html":
      anchor[6].style.borderBottom = "1px solid red";
      break;
    case "hangszorok.html":
      anchor[7].style.borderBottom = "1px solid red";
      break;
    case "hivatkozasok.html":
      anchor[8].style.borderBottom = "1px solid red";
      break;
    default:
      anchor[0].style.borderBottom = "1px solid red";
      break;
  }
};
navSlide();
anchorColor();
