// Retrieve data from sessionStorage
let mealData = JSON.parse(sessionStorage.getItem('mealData'));

// Now you can use mealData in this file
console.log(mealData.meals);

const mealSection = document.querySelector('.meal-section')

const mealsList = mealData.meals 

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

    const mealImg = document.createElement('img')
    mealImg.classList.add('meal-card-img')
    mealImg.src = `${meal.strMealThumb}`

    mealCard.append(mealInfo, mealImg)

    mealSection.append(mealCard)
})