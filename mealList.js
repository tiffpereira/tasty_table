// Retrieve data from sessionStorage
let mealData = JSON.parse(sessionStorage.getItem('mealData'));

// Now you can use mealData in this file
console.log(mealData.meals);

const mealsList = mealData.data 

mealsList.map((meal) => {
    

})