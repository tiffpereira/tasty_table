const button = document.querySelector('#search')
const searchInput = document.querySelector('#search-input')
const randomButton = document.querySelector('#random')
const recipeList = document.querySelector('.Recipe-list')

//Button 1 - Searched Meals 
button.addEventListener("click", async () => {
    const recipe = searchInput.value 
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`)

    const renderList = response.data.meals 

    renderList.forEach((recipe) => {
        //Title
        const recipeOutput = document.createElement('h3')
        recipeOutput.innerHTML = `${recipe.strMeal}`
        recipeList.append(recipeOutput)
        //Photo 
        const recipePhoto = document.createElement('div')
        recipePhoto.innerHTML = `<img src = ${recipe.strMealThumb} >`
        recipeList.append(recipePhoto)
        //Intructions 
        const recipeInstructions = document.createElement('p')
        recipeInstructions.innerHTML = `Instructions: ${recipe.strInstructions}`
        recipeList.append(recipeInstructions) 
    })
})


//Button 2 - Random Meals 
randomButton.addEventListener("click", async () => {
    const recipe = searchInput.value 
    const response = await axios.get(`https:www.themealdb.com/api/json/v1/1/random.php`)

    const renderList = response.data.meals

    renderList.forEach((recipe) => {
        //Title
        const recipeOutput = document.createElement('h3')
        recipeOutput.innerHTML = `${recipe.strMeal}`
        recipeList.append(recipeOutput)
        //Photo 
        const recipePhoto = document.createElement('div')
        recipePhoto.innerHTML = `<img src = ${recipe.strMealThumb} >`
        recipeList.append(recipePhoto)
        //Intructions 
        const recipeInstructions = document.createElement('p')
        recipeInstructions.innerHTML = `Instructions: ${recipe.strInstructions}`
        recipeList.append(recipeInstructions)
    })
})


