const searchBtn = document.querySelector('#search-button')
const randomBtn = document.querySelector('#random')
const recipeList = document.querySelector('.Recipe-list')

// Button 1 - Searched Meals 
searchBtn.addEventListener("click", function(event) {
    event.preventDefault()
    const searchInput = document.querySelector('#search-input').value 
    searchMeals(searchInput)
})

async function searchMeals(searchInput) {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
    console.log(response.data.meals)

    if (response.data.meals === null) {
        alert('No results found. Please try a different search.')
    } else {
        sessionStorage.removeItem('searchData') //clearing existing data
        sessionStorage.setItem('searchData', JSON.stringify(response.data.meals)) //storing search results into mealData
        window.location.href = 'mealList.html'
    }
   
}

// Button 2 - Random Meals 
randomBtn.addEventListener("click", async () => {
    const response = await axios.get(`https:www.themealdb.com/api/json/v1/1/random.php`)
    console.log(response)
    
    sessionStorage.removeItem('selectedMealData')
    sessionStorage.setItem('selectedMealData', JSON.stringify(response.data.meals[0])) //storing search results into mealData
    window.location.href = 'recipe.html'
})

//Category btns on landing page
const dessert = document.querySelector('#dessert-btn').addEventListener('click',async () => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert`)
    console.log(response.data.meals)
    sessionStorage.setItem('mealData', JSON.stringify(response.data.meals))
    window.location.href = 'mealList.html'
})

const breakfast = document.querySelector('#breakfast-btn').addEventListener('click',async () => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast`)
    console.log(response.data.meals)
    sessionStorage.setItem('mealData', JSON.stringify(response.data.meals))
    window.location.href = 'mealList.html'
})

const chicken = document.querySelector('#chicken-btn').addEventListener('click',async () => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken`)
    console.log(response.data.meals)
    sessionStorage.setItem('mealData', JSON.stringify(response.data.meals))
    window.location.href = 'mealList.html'
})