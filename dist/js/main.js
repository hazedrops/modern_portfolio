// import { createProjectDiv } from "./projects.js";

// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// const projects = document.querySelector(".projects");

// const projectItems = [
//   {
//     pageAddr : "./mealFinder.html",
//     imgSrc  : "./img/projects/p141.png",
//     imgAlt     : "Meal Finder Project",
//     title  : "Meal Finder",
//     gitAddr : "https://github.com/hazedrops/SASS_API_MealFinder"
//   },
//   {
//     pageAddr : "./weatherApp.html",
//     imgSrc  : "./img/projects/p151.png",
//     imgAlt     : "The Weather App Project",
//     title  : "Weather App",
//     gitAddr : "https://github.com/hazedrops/SASS_JS_WeatherApp"
//   },
//   {
//     pageAddr : "./netflixClone.html",
//     imgSrc  : "./img/projects/p181.png",
//     imgAlt     : "Netflix Landing Page Clone",
//     title  : "Netflix Page Clone",
//     gitAddr : "https://github.com/hazedrops/CSS_NetflixClone"
//   },
//   {
//     pageAddr : "./textReader.html",
//     imgSrc  : "./img/projects/p231.png",
//     imgAlt     : "Text Reader",
//     title  : "Text Reader",
//     gitAddr : "https://github.com/hazedrops/JS_CSS_SpeechTextReader"
//   }
// ];

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}

// const createProjectDiv = (projects, projectItems) => {
//   projectItems.forEach(project => {
//     const item = document.createElement("div");  
//     item.classList.add("item");

//     const imgLink = document.createElement("a"); 
//     imgLink.href = `${project.pageAddr}`;

//     const img = document.createElement("img");
//     img.src = project.imgSrc;
//     img.alt = project.imgAlt;
//     imgLink.append(img);

//     const titleLink = document.createElement("a"); 
//     titleLink.classList.add("btn-light");
//     titleLink.target = "_blank";    

//     const titleIcon = document.createElement("i");
//     titleIcon.classList.add("fas");
//     titleIcon.classList.add("fa-eye");
//     titleLink.append(titleIcon);
//     titleLink.innerText = ` ${project.title}`
//     titleLink.href = `${project.pageAddr}`;

//     const gitLink = document.createElement("a"); 
//     gitLink.classList.add("btn-dark");
//     gitLink.target = "_blank";   
//     gitLink.href = `${project.gitAddr}`;

//     const gitIcon = document.createElement("i");
//     gitIcon.classList.add("fab");
//     gitIcon.classList.add("fa-github");
//     gitLink.append(gitIcon);
//     gitLink.innerText = " Github",
//     gitLink.href = `${project.gitAddr}`;  

//     item.append(imgLink);
//     item.append(titleLink);
//     item.append(gitLink);

//     projects.append(item);
//   });

//   return projects;
// }

// require("./projects.js")();
// createProjectDiv();




