const projects = document.querySelector(".projects");

const projectItems = [
  {
    pageAddr : "./mealFinder.html",
    imgSrc  : "./img/projects/p141.png",
    imgAlt     : "Meal Finder Project",
    title  : "Meal Finder",
    gitAddr : "https://github.com/hazedrops/SASS_API_MealFinder"
  },
  {
    pageAddr : "./weatherApp.html",
    imgSrc  : "./img/projects/p151.png",
    imgAlt     : "The Weather App Project",
    title  : "Weather App",
    gitAddr : "https://github.com/hazedrops/SASS_JS_WeatherApp"
  },
  {
    pageAddr : "./netflixClone.html",
    imgSrc  : "./img/projects/p181.png",
    imgAlt     : "Netflix Landing Page Clone",
    title  : "Netflix Page Clone",
    gitAddr : "https://github.com/hazedrops/CSS_NetflixClone"
  },
  {
    pageAddr : "./textReader.html",
    imgSrc  : "./img/projects/p231.png",
    imgAlt     : "Text Reader",
    title  : "Text Reader",
    gitAddr : "https://github.com/hazedrops/JS_CSS_SpeechTextReader"
  },
  {
    pageAddr : "./hangmanGame.html",
    imgSrc  : "./img/projects/p201.png",
    imgAlt     : "Hangman Game",
    title  : "Hangman Game",
    gitAddr : "https://github.com/hazedrops/JS_CSS_HangmanGame"
  },
  {
    pageAddr : "./heroQ.html",
    imgSrc  : "./img/projects/p101.png",
    imgAlt     : "HeroQ Custom Website Project",
    title  : "HeroQ Custom Website",
    gitAddr : "https://github.com/hazedrops/CSS_HeroQ-Website"
  },
  {
    pageAddr : "./shoppingCart.html",
    imgSrc  : "./img/projects/p11.png",
    imgAlt     : "Shopping cart Project",
    title  : "Music Store Shopping Cart",
    gitAddr : "https://github.com/hazedrops/JS_ShoppingCart"
  },
  {
    pageAddr : "./breakingBadCastSearch.html",
    imgSrc  : "./img/projects/p21.png",
    imgAlt     : "Breaking Bad Cast Search Project",
    title  : "Breaking Bad Cast Search",
    gitAddr : "https://github.com/hazedrops/React_BreakingBadCast"
  },
  {
    pageAddr : "./expenseTracker.html",
    imgSrc  : "./img/projects/p31.png",
    imgAlt     : "Expense Tracker Project",
    title  : "Expense Tracker",
    gitAddr : "https://github.com/hazedrops/React_ExpenseTracker"
  },
  {
    pageAddr : "./passwordGenerator.html",
    imgSrc  : "./img/projects/p41.png",
    imgAlt     : "Password Generator Project",
    title  : "Password Generator",
    gitAddr : "https://github.com/hazedrops/JS_PasswordGenerator"
  },
  {
    pageAddr : "./calculator.html",
    imgSrc  : "./img/projects/p51.png",
    imgAlt     : "Calculator Project",
    title  : "Calculator",
    gitAddr : "https://github.com/hazedrops/JS_Calculator"
  },
  {
    pageAddr : "./drawingApp.html",
    imgSrc  : "./img/projects/p61.png",
    imgAlt     : "Drawing App Project",
    title  : "Drawing App",
    gitAddr : "https://github.com/hazedrops/JS_DrawingApp"
  },
  {
    pageAddr : "./drinkWaterApp.html",
    imgSrc  : "./img/projects/p71.png",
    imgAlt     : "Drink Water App Project",
    title  : "Drink Water App",
    gitAddr : "https://github.com/hazedrops/JS_DrinkWaterApp"
  },
  {
    pageAddr : "./exchangeRateCalculator.html",
    imgSrc  : "./img/projects/p81.png",
    imgAlt     : "Exchange Rate Calculator",
    title  : "Exchange Rate Calculator",
    gitAddr : "https://github.com/hazedrops/JS_ExchangeRateCalculatorApp"
  },
  {
    pageAddr : "./formValidator.html",
    imgSrc  : "./img/projects/p91.png",
    imgAlt     : "Form Validation",
    title  : "Form Validation",
    gitAddr : "https://github.com/hazedrops/JS_FormValidator"
  },
  {
    pageAddr : "./mineSweeper.html",
    imgSrc  : "./img/projects/p111.png",
    imgAlt     : "MineSweeper Game",
    title  : "MineSweeper Game",
    gitAddr : "https://github.com/hazedrops/JS_Minesweeper"
  },
  {
    pageAddr : "./movieApp.html",
    imgSrc  : "./img/projects/p121.png",
    imgAlt     : "Movie App",
    title  : "Movie App",
    gitAddr : "https://github.com/hazedrops/JS_MovieApp"
  },
  {
    pageAddr : "./searchMe.html",
    imgSrc  : "./img/projects/p131.png",
    imgAlt     : "SearchMe App",
    title  : "SearchMe App",
    gitAddr : "https://github.com/hazedrops/SCSS_JS_VanillaJsSearchApp"
  },
  {
    pageAddr : "./movieSeatBooking.html",
    imgSrc  : "./img/projects/p161.png",
    imgAlt     : "Movie Seat Booking Page",
    title  : "Movie Seat Booking Page",
    gitAddr : "https://github.com/hazedrops/JS_CSS_MovieSeatBooking"
  },
  {
    pageAddr : "./musicPlayer.html",
    imgSrc  : "./img/projects/p171.png",
    imgAlt     : "Music Player App",
    title  : "Music Player",
    gitAddr : "https://github.com/hazedrops/JS_CSS_MusicPlayer"
  },
  {
    pageAddr : "./noteApp.html",
    imgSrc  : "./img/projects/p191.png",
    imgAlt     : "Note App",
    title  : "Note App",
    gitAddr : "https://github.com/hazedrops/JS_Markdown_NotesApp"
  },  
  {
    pageAddr : "./twoModeClock.html",
    imgSrc  : "./img/projects/p211.png",
    imgAlt     : "Two Mode Clock",
    title  : "Two Mode Clock",
    gitAddr : "https://github.com/hazedrops/JS_CSS_ThemeClock"
  },  
  {
    pageAddr : "./typingGame.html",
    imgSrc  : "./img/projects/p221.png",
    imgAlt     : "Typing Game",
    title  : "Typing Game",
    gitAddr : "https://github.com/hazedrops/JS_CSS_TypingGame"
  },  
  {
    pageAddr : "./githubProfile.html",
    imgSrc  : "./img/projects/p241.png",
    imgAlt     : "Github Profile Search",
    title  : "Github Profile Search",
    gitAddr : "https://github.com/hazedrops/JS_GithubProfileSearchApp"
  }  
];

const createProjectDiv = (projects, projectItems) => {
  projectItems.forEach( project => {
    const item = document.createElement("div");  
    item.classList.add("item");

    const imgLink = document.createElement("a"); 
    imgLink.href = `${project.pageAddr}`;

    const img = document.createElement("img");
    img.src = project.imgSrc;
    img.alt = project.imgAlt;
    imgLink.append(img);

    const titleLink = document.createElement("a"); 
    titleLink.classList.add("btn-light");
    titleLink.target = "_blank";    
    titleLink.innerHTML = `<i class="fas fa-eye"></i> ${project.title}`;

    titleLink.href = `${project.pageAddr}`;

    const gitLink = document.createElement("a"); 
    gitLink.classList.add("btn-dark");
    gitLink.target = "_blank";   
    gitLink.href = `${project.gitAddr}`;
    gitLink.innerHTML = `<i class="fab fa-github"></i> Github`;
    gitLink.href = `${project.gitAddr}`;  

    item.append(imgLink);
    item.append(titleLink);
    item.append(gitLink);

    projects.append(item);
  });

  return projects;
}

createProjectDiv(projects, projectItems); 


