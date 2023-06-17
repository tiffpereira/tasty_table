// Retrieve data from sessionStorage
let mealData = JSON.parse(sessionStorage.getItem('mealData'));

// Now you can use mealData in this file
console.log(mealData.meals);

const mealInfo = document.querySelector('.meal-card')

const mealsList = mealData.meals 

mealsList.forEach((meal) => {
    const mealTitle = document.createElement('h3')
    mealTitle.innerHTML = `${meal.strMeal}`
    mealInfo.append(mealTitle)
})