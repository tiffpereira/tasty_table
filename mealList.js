//Hamburger menu functionality 
// const hamburgerMenu = document.querySelector('.hamburger-menu')
// const hamburgerIcon = document.querySelector('.hamburger-menu .fas')
// const leftNav = document.querySelector('.leftNav')

// hamburgerMenu.addEventListener('click', (event) => {
//     event.stopPropagation()
//     leftNav.classList.toggle('show')
//     hamburgerIcon.classList.toggle('fa-bars')
//     hamburgerIcon.classList.toggle('fa-times')
//   })
  
//   document.addEventListener('click', () => {
//     leftNav.classList.remove('show')
//     hamburgerIcon.classList.add('fa-bars')
//     hamburgerIcon.classList.remove('fa-times')
//   })

// Retrieve data from sessionStorage
let mealData = JSON.parse(sessionStorage.getItem('mealData'));

if (sessionStorage.getItem('searchData')) {
    mealData = JSON.parse(sessionStorage.getItem('searchData'));
    sessionStorage.removeItem('searchData');  // Clear the search data after using it
} else if (sessionStorage.getItem('mealData')) {
    mealData = JSON.parse(sessionStorage.getItem('mealData'));
    sessionStorage.removeItem('mealData');  // Clear the category data after using it
}
// Now you can use mealData in this file
console.log(mealData);

const mealSection = document.querySelector('.meal-section')

const mealsList = mealData 

mealsList.forEach((meal) => {
    //create meal card div and add a class to it 
    const mealCard = document.createElement('div')
    mealCard.classList.add('meal-card')

    //create meal info div and add a class to it 
    const mealInfo = document.createElement('div')
    mealInfo.classList.add('meal-info')

    //creating meal title, assigning class, passing data 
    const mealTitle = document.createElement('h3')
    mealTitle.classList.add('meal-title')
    mealTitle.innerHTML = `${meal.strMeal}`

    //creating meal btn, assigning class, passing data 
    const mealDetailsBtn = document.createElement('button')
    mealDetailsBtn.classList.add('meal-card-btn')
    mealDetailsBtn.innerHTML = "See Recipe"
    mealInfo.append(mealTitle, mealDetailsBtn)

    mealDetailsBtn.addEventListener('click', () => {
        sessionStorage.setItem('selectedMealData', JSON.stringify(meal)) //save meal object to sessionStorage to pull into recipe.html
        window.location.href = 'recipe.html'
    })

    const mealImg = document.createElement('img')
    mealImg.classList.add('meal-card-img')
    mealImg.src = `${meal.strMealThumb}`

    mealCard.append(mealInfo, mealImg)

    mealSection.append(mealCard)
})
