const projects = document.querySelector('.projects')

const tagList = document.querySelectorAll('.tagList')

const projectItems = [
  // {
  //   pageAddr: './smallStoreReact.html',
  //   imgSrc: './img/projects/p281.png',
  //   imgAlt: 'Small Store React',
  //   title: 'Small Store Website in React',
  //   gitAddr: 'https://github.com/hazedrops/React_SmallStore',
  //   tags: ['React', 'API', 'JavaScript', 'Responsive', 'SASS'],
  // },
  {
    pageAddr: './houseMarketplaceReact.html',
    imgSrc: './img/projects/p291.png',
    imgAlt: 'House Marketplace React',
    title: 'House Marketplace',
    gitAddr: 'https://github.com/hazedrops/React_HouseMarketplace',
    tags: ['React', 'Responsive', 'JavaScript'],
  },
  {
    pageAddr: './exchangeRateCalculatorReact.html',
    imgSrc: './img/projects/p261.png',
    imgAlt: 'Exchange Rate Calculator React',
    title: 'Exchange Rate Calculator',
    gitAddr: 'https://github.com/hazedrops/React_ExchangeRateCalculator',
    tags: ['React', 'API', 'JavaScript'],
  },
  {
    pageAddr: './jewelryStoreShoppingCart.html',
    imgSrc: './img/projects/p257.png',
    imgAlt: 'Jewelry Store Shopping Cart Project',
    title: 'Jewelry Store Shopping Cart',
    gitAddr: 'https://github.com/hazedrops/JS_JewelryStoreShoppingCart',
    tags: ['CSS', 'JavaScript'],
  },
  {
    pageAddr: './mealFinderReact.html',
    imgSrc: './img/projects/p272.png',
    imgAlt: 'Meal Finder Project',
    title: 'Meal Finder',
    gitAddr: 'https://github.com/hazedrops/React_MealFinder',
    tags: ['React', 'API', 'Responsive', 'SASS', 'JavaScript'],
  },
  {
    pageAddr: './weatherAppReact.html',
    imgSrc: './img/projects/p151.png',
    imgAlt: 'The Weather App Project',
    title: 'Weather App',
    gitAddr: 'https://github.com/hazedrops/React_WeatherApp',
    tags: ['React', 'API', 'Responsive', 'SASS', 'JavaScript'],
  },
  {
    pageAddr: './netflixClone.html',
    imgSrc: './img/projects/p181.png',
    imgAlt: 'Netflix Landing Page Clone',
    title: 'Netflix Page Clone',
    gitAddr: 'https://github.com/hazedrops/CSS_NetflixClone',
    tags: ['CSS', 'Responsive', 'JavaScript'],
  },
  {
    pageAddr: './textReader.html',
    imgSrc: './img/projects/p231.png',
    imgAlt: 'Text Reader',
    title: 'Text Reader',
    gitAddr: 'https://github.com/hazedrops/JS_CSS_SpeechTextReader',
    tags: ['API', 'Responsive', 'Audio', 'JavaScript'],
  },
  {
    pageAddr: './hangmanGame.html',
    imgSrc: './img/projects/p201.png',
    imgAlt: 'Hangman Game',
    title: 'Hangman Game',
    gitAddr: 'https://github.com/hazedrops/JS_CSS_HangmanGame',
    tags: ['CSS', 'Game', 'JavaScript'],
  },
  {
    pageAddr: './heroQ.html',
    imgSrc: './img/projects/p101.png',
    imgAlt: 'HeroQ Custom Website Project',
    title: 'HeroQ Custom Website',
    gitAddr: 'https://github.com/hazedrops/CSS_HeroQ-Website',
    tags: ['CSS', 'Responsive'],
  },
  {
    pageAddr: './shoppingCart.html',
    imgSrc: './img/projects/p11.png',
    imgAlt: 'Shopping cart Project',
    title: 'Music Store Shopping Cart',
    gitAddr: 'https://github.com/hazedrops/JS_ShoppingCart',
    tags: ['CSS', 'Responsive', 'JavaScript'],
  },
  {
    pageAddr: './breakingBadCastSearch.html',
    imgSrc: './img/projects/p21.png',
    imgAlt: 'Breaking Bad Cast Search Project',
    title: 'Breaking Bad Cast Search',
    gitAddr: 'https://github.com/hazedrops/React_BreakingBadCast',
    tags: ['React', 'API', 'Responsive', 'JavaScript'],
  },
  {
    pageAddr: './expenseTracker.html',
    imgSrc: './img/projects/p31.png',
    imgAlt: 'Expense Tracker Project',
    title: 'Expense Tracker',
    gitAddr: 'https://github.com/hazedrops/React_ExpenseTracker',
    tags: ['React', 'JavaScript'],
  },
  {
    pageAddr: './passwordGenerator.html',
    imgSrc: './img/projects/p41.png',
    imgAlt: 'Password Generator Project',
    title: 'Password Generator',
    gitAddr: 'https://github.com/hazedrops/JS_PasswordGenerator',
    tags: ['JavaScript'],
  },
  {
    pageAddr: './calculator.html',
    imgSrc: './img/projects/p51.png',
    imgAlt: 'Calculator Project',
    title: 'Calculator',
    gitAddr: 'https://github.com/hazedrops/JS_Calculator',
    tags: ['CSS', 'JavaScript'],
  },
  {
    pageAddr: './drawingApp.html',
    imgSrc: './img/projects/p61.png',
    imgAlt: 'Drawing App Project',
    title: 'Drawing App',
    gitAddr: 'https://github.com/hazedrops/JS_DrawingApp',
    tags: ['CSS', 'JavaScript'],
  },
  {
    pageAddr: './drinkWaterApp.html',
    imgSrc: './img/projects/p71.png',
    imgAlt: 'Drink Water App Project',
    title: 'Drink Water App',
    gitAddr: 'https://github.com/hazedrops/JS_DrinkWaterApp',
    tags: ['CSS', 'JavaScript'],
  },
  // {
  //   pageAddr : "./exchangeRateCalculator.html",
  //   imgSrc  : "./img/projects/p81.png",
  //   imgAlt     : "Exchange Rate Calculator",
  //   title  : "Exchange Rate Calculator",
  //   gitAddr : "https://github.com/hazedrops/JS_ExchangeRateCalculatorApp",
  //   tags : ["API", "JavaScript"]
  // },
  {
    pageAddr: './formValidator.html',
    imgSrc: './img/projects/p91.png',
    imgAlt: 'Form Validation',
    title: 'Form Validation',
    gitAddr: 'https://github.com/hazedrops/JS_FormValidator',
    tags: ['JavaScript'],
  },
  {
    pageAddr: './mineSweeper.html',
    imgSrc: './img/projects/p111.png',
    imgAlt: 'MineSweeper Game',
    title: 'MineSweeper Game',
    gitAddr: 'https://github.com/hazedrops/JS_Minesweeper',
    tags: ['Game', 'JavaScript'],
  },
  {
    pageAddr: './movieApp.html',
    imgSrc: './img/projects/p121.png',
    imgAlt: 'Movie App',
    title: 'Movie App',
    gitAddr: 'https://github.com/hazedrops/JS_MovieApp',
    tags: ['API', 'CSS', 'Responsive', 'JavaScript'],
  },
  {
    pageAddr: './searchMe.html',
    imgSrc: './img/projects/p131.png',
    imgAlt: 'SearchMe App',
    title: 'SearchMe App',
    gitAddr: 'https://github.com/hazedrops/SCSS_JS_VanillaJsSearchApp',
    tags: ['API', 'SASS', 'Responsive', 'JavaScript'],
  },
  {
    pageAddr: './movieSeatBooking.html',
    imgSrc: './img/projects/p161.png',
    imgAlt: 'Movie Seat Booking Page',
    title: 'Movie Seat Booking Page',
    gitAddr: 'https://github.com/hazedrops/JS_CSS_MovieSeatBooking',
    tags: ['CSS', 'JavaScript'],
  },
  {
    pageAddr: './musicPlayer.html',
    imgSrc: './img/projects/p171.png',
    imgAlt: 'Music Player App',
    title: 'Music Player',
    gitAddr: 'https://github.com/hazedrops/JS_CSS_MusicPlayer',
    tags: ['API', 'CSS', 'Audio', 'JavaScript'],
  },
  {
    pageAddr: './noteApp.html',
    imgSrc: './img/projects/p191.png',
    imgAlt: 'Note App',
    title: 'Note App',
    gitAddr: 'https://github.com/hazedrops/JS_Markdown_NotesApp',
    tags: ['Library', 'Responsive', 'JavaScript'],
  },
  {
    pageAddr: './twoModeClock.html',
    imgSrc: './img/projects/p211.png',
    imgAlt: 'Two Mode Clock',
    title: 'Two Mode Clock',
    gitAddr: 'https://github.com/hazedrops/JS_CSS_ThemeClock',
    tags: ['CSS', 'JavaScript'],
  },
  {
    pageAddr: './typingGame.html',
    imgSrc: './img/projects/p221.png',
    imgAlt: 'Typing Game',
    title: 'Typing Game',
    gitAddr: 'https://github.com/hazedrops/JS_CSS_TypingGame',
    tags: ['CSS', 'Game', 'JavaScript'],
  },
  {
    pageAddr: './githubProfile.html',
    imgSrc: './img/projects/p241.png',
    imgAlt: 'Github Profile Search',
    title: 'Github Profile Search',
    gitAddr: 'https://github.com/hazedrops/JS_GithubProfileSearchApp',
    tags: ['API', 'CSS', 'JavaScript'],
  },
]

let previousIdx = 0

const createProjectsDiv = (project, projects) => {
  const item = document.createElement('div')
  item.classList.add('item')

  const imgLink = document.createElement('a')
  imgLink.href = `${project.pageAddr}`

  const img = document.createElement('img')
  img.src = project.imgSrc
  img.alt = project.imgAlt
  imgLink.append(img)

  const titleLink = document.createElement('a')
  titleLink.classList.add('btn-light')
  titleLink.target = '_blank'
  titleLink.innerHTML = `<i class="fas fa-eye"></i> ${project.title}`

  titleLink.href = `${project.pageAddr}`

  const gitLink = document.createElement('a')
  gitLink.classList.add('btn-dark')
  gitLink.target = '_blank'
  gitLink.href = `${project.gitAddr}`
  gitLink.innerHTML = `<i class="fab fa-github"></i> Github`
  gitLink.href = `${project.gitAddr}`

  item.append(imgLink)
  item.append(titleLink)
  item.append(gitLink)

  projects.append(item)

  return projects
}

const filterProjectDiv = (projectItems, tag) => {
  projects.innerHTML = ''

  projectItems.forEach((project) => {
    if (!project.tags.includes(tag) && tag !== 'All') {
      return
    }

    createProjectsDiv(project, projects)
  })
}

tagList.forEach((list, index) => {
  list.addEventListener('click', () => {
    tagList[previousIdx].classList.remove('active')

    list.classList.add('active')

    switch (list.innerText) {
      case 'JavaScript':
        filterProjectDiv(projectItems, 'JavaScript')
        break

      case 'CSS':
        filterProjectDiv(projectItems, 'CSS')
        break

      case 'SASS':
        filterProjectDiv(projectItems, 'SASS')
        break

      case 'Responsive':
        filterProjectDiv(projectItems, 'Responsive')
        break

      case 'API':
        filterProjectDiv(projectItems, 'API')
        break

      case 'Library':
        filterProjectDiv(projectItems, 'Library')
        break

      case 'React':
        filterProjectDiv(projectItems, 'React')
        break

      case 'Game':
        filterProjectDiv(projectItems, 'Game')
        break

      case 'Audio':
        filterProjectDiv(projectItems, 'Audio')
        break

      default:
        filterProjectDiv(projectItems, 'All')
        break
    }

    previousIdx = index
    console.log(previousIdx)
  })
})

filterProjectDiv(projectItems, 'All')
