/*------- SHOW MENU -------*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*------- REMOVE MENU MOBILE -------*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*------- SCROLL ARTICLE ACTIVE LINK -------*/
const articles = document.querySelectorAll("article[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  articles.forEach((current) => {
    const articleHeight = current.offsetHeight;
    const articleTop = current.offsetTop - 50;
    articleId = current.getAttribute("id");

    if (scrollY > articleTop && scrollY <= articleTop + articleHeight) {
      document.querySelector(".nav__menu a[href*=" + articleId + "]").classList.add("active-link");
    } else {
      document.querySelector(".nav__menu a[href*=" + articleId + "]").classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*------- CHANGE BACKGROUND HEADER -------*/
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*------- SHOW SCROLL TOP -------*/
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

/*------- DARK LIGHT THEME -------*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-toggle-right";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light");
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? "bx-toggle-left" : "bx-toggle-right");

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
  themeButton.classList[selectedIcon === "bx-toggle-left" ? "add" : "remove"](iconTheme);
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*------- SCROLL ANIMATION -------*/
const sr = ScrollReveal({
  distance: "30px",
  duration: 1800,
  reset: true,
});

sr.reveal(
  `.home__data, .home__img, 
           .product__data,
           .footer__content`,
  {
    origin: "top",
    interval: 200,
  }
);

sr.reveal(`.aboutus__img, .profile__content`, {
  origin: "left",
});

sr.reveal(`.aboutus__data, .profile__img`, {
  origin: "right",
});
