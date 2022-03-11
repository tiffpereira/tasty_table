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
        recipePhoto.innerHTML = `<img div class = "recipe-photo" src = ${recipe.strMealThumb} >`
        recipeList.append(recipePhoto)
        //Ingredients title 
        const ingredientTitle = document.createElement('h4')
        ingredientTitle.innerHTML = `Ingredients`
        recipeList.append(ingredientTitle)
        //Ingredients 
        const ingredientsList1 = document.createElement('ul')
        ingredientsList1.innerHTML = `${recipe.strMeasure1} ${recipe.strIngredient1}`
        const ingredientsList2 = document.createElement('ul')
        ingredientsList2.innerHTML = `${recipe.strMeasure2} ${recipe.strIngredient2}`
        const ingredientsList3 = document.createElement('ul')
        ingredientsList3.innerHTML = `${recipe.strMeasure3} ${recipe.strIngredient3}`
        const ingredientsList4 = document.createElement('ul')
        ingredientsList4.innerHTML = `${recipe.strMeasure4} ${recipe.strIngredient4}`
        const ingredientsList5 = document.createElement('ul')
        ingredientsList5.innerHTML = `${recipe.strMeasure5} ${recipe.strIngredient5}`
        const ingredientsList6 = document.createElement('ul')
        ingredientsList6.innerHTML = `${recipe.strMeasure6} ${recipe.strIngredient6}`
        const ingredientsList7 = document.createElement('ul')
        ingredientsList7.innerHTML = `${recipe.strMeasure7} ${recipe.strIngredient7}`
        const ingredientsList8 = document.createElement('ul')
        ingredientsList8.innerHTML = `${recipe.strMeasure8} ${recipe.strIngredient8}`
        const ingredientsList9 = document.createElement('ul')
        ingredientsList9.innerHTML = `${recipe.strMeasure9} ${recipe.strIngredient9}`
        const ingredientsList10 = document.createElement('ul')
        ingredientsList10.innerHTML = `${recipe.strMeasure10} ${recipe.strIngredient10}`
        const ingredientsList11 = document.createElement('ul')
        ingredientsList11.innerHTML = `${recipe.strMeasure11} ${recipe.strIngredient11}`
        const ingredientsList12 = document.createElement('ul')
        ingredientsList12.innerHTML = `${recipe.strMeasure12} ${recipe.strIngredient12}`
        const ingredientsList13 = document.createElement('ul')
        ingredientsList13.innerHTML = `${recipe.strMeasure13} ${recipe.strIngredient13}`
        const ingredientsList14 = document.createElement('ul')
        ingredientsList14.innerHTML = `${recipe.strMeasure14} ${recipe.strIngredient14}`
        const ingredientsList15 = document.createElement('ul')
        ingredientsList15.innerHTML = `${recipe.strMeasure15} ${recipe.strIngredient15}`
        const ingredientsList16 = document.createElement('ul')
        ingredientsList16.innerHTML = `${recipe.strMeasure16} ${recipe.strIngredient16}`
        const ingredientsList17 = document.createElement('ul')
        ingredientsList17.innerHTML = `${recipe.strMeasure17} ${recipe.strIngredient17}`
        const ingredientsList18 = document.createElement('ul')
        ingredientsList18.innerHTML = `${recipe.strMeasure18} ${recipe.strIngredient18}`
        const ingredientsList19 = document.createElement('ul')
        ingredientsList19.innerHTML = `${recipe.strMeasure19} ${recipe.strIngredient19}`
        const ingredientsList20 = document.createElement('ul')
        ingredientsList20.innerHTML = `${recipe.strMeasure20} ${recipe.strIngredient20}`
    

        recipeList.append(ingredientsList1)
        recipeList.append(ingredientsList2)
        recipeList.append(ingredientsList3)
        recipeList.append(ingredientsList4)
        recipeList.append(ingredientsList5)
        recipeList.append(ingredientsList6)
        recipeList.append(ingredientsList7)
        recipeList.append(ingredientsList8)
        recipeList.append(ingredientsList9)
        recipeList.append(ingredientsList10)
        recipeList.append(ingredientsList11)
        recipeList.append(ingredientsList12)
        recipeList.append(ingredientsList13)
        recipeList.append(ingredientsList14)
        recipeList.append(ingredientsList15)
        recipeList.append(ingredientsList16)
        recipeList.append(ingredientsList17)
        recipeList.append(ingredientsList18)
        recipeList.append(ingredientsList19)
        recipeList.append(ingredientsList20)
        //Intructions title 
        const recipeInstructionsTitle = document.createElement('h4')
        recipeInstructionsTitle.innerHTML = `Instructions`
        recipeList.append(recipeInstructionsTitle)
        //Intructions 
        const recipeInstructions = document.createElement('p')
        recipeInstructions.innerHTML = `${recipe.strInstructions}`
        recipeList.append(recipeInstructions) 
        //footer 
        const footer = document.createElement('footer')
        footer.innerHTML = ''
        recipeList.append(footer)
    })
})


//Button 2 - Random Meals 
randomButton.addEventListener("click", async () => {
    const recipe = searchInput.value 
    const response = await axios.get(`https:www.themealdb.com/api/json/v1/1/random.php`)

    console.log(response)
    
    const renderList = response.data.meals

    renderList.forEach((recipe) => {
        //Title
        const recipeOutput = document.createElement('h3')
        recipeOutput.innerHTML = `${recipe.strMeal}`
        recipeList.append(recipeOutput)
        //Photo 
        const recipePhoto = document.createElement('div')
        recipePhoto.innerHTML = `<img div class = "recipe-photo" src = ${recipe.strMealThumb} >`
        recipeList.append(recipePhoto)
        //Ingredient title 
        const ingredientTitle = document.createElement('h4')
        ingredientTitle.innerHTML = `Ingredients`
        recipeList.append(ingredientTitle)
        //Ingredients 
        const ingredientsList1 = document.createElement('ul')
        ingredientsList1.innerHTML = `${recipe.strMeasure1} ${recipe.strIngredient1}`
        const ingredientsList2 = document.createElement('ul')
        ingredientsList2.innerHTML = `${recipe.strMeasure2} ${recipe.strIngredient2}`
        const ingredientsList3 = document.createElement('ul')
        ingredientsList3.innerHTML = `${recipe.strMeasure3} ${recipe.strIngredient3}`
        const ingredientsList4 = document.createElement('ul')
        ingredientsList4.innerHTML = `${recipe.strMeasure4} ${recipe.strIngredient4}`
        const ingredientsList5 = document.createElement('ul')
        ingredientsList5.innerHTML = `${recipe.strMeasure5} ${recipe.strIngredient5}`
        const ingredientsList6 = document.createElement('ul')
        ingredientsList6.innerHTML = `${recipe.strMeasure6} ${recipe.strIngredient6}`
        const ingredientsList7 = document.createElement('ul')
        ingredientsList7.innerHTML = `${recipe.strMeasure7} ${recipe.strIngredient7}`
        const ingredientsList8 = document.createElement('ul')
        ingredientsList8.innerHTML = `${recipe.strMeasure8} ${recipe.strIngredient8}`
        const ingredientsList9 = document.createElement('ul')
        ingredientsList9.innerHTML = `${recipe.strMeasure9} ${recipe.strIngredient9}`
        const ingredientsList10 = document.createElement('ul')
        ingredientsList10.innerHTML = `${recipe.strMeasure10} ${recipe.strIngredient10}`
        const ingredientsList11 = document.createElement('ul')
        ingredientsList11.innerHTML = `${recipe.strMeasure11} ${recipe.strIngredient11}`
        const ingredientsList12 = document.createElement('ul')
        ingredientsList12.innerHTML = `${recipe.strMeasure12} ${recipe.strIngredient12}`
        const ingredientsList13 = document.createElement('ul')
        ingredientsList13.innerHTML = `${recipe.strMeasure13} ${recipe.strIngredient13}`
        const ingredientsList14 = document.createElement('ul')
        ingredientsList14.innerHTML = `${recipe.strMeasure14} ${recipe.strIngredient14}`
        const ingredientsList15 = document.createElement('ul')
        ingredientsList15.innerHTML = `${recipe.strMeasure15} ${recipe.strIngredient15}`
        const ingredientsList16 = document.createElement('ul')
        ingredientsList16.innerHTML = `${recipe.strMeasure16} ${recipe.strIngredient16}`
        const ingredientsList17 = document.createElement('ul')
        ingredientsList17.innerHTML = `${recipe.strMeasure17} ${recipe.strIngredient17}`
        const ingredientsList18 = document.createElement('ul')
        ingredientsList18.innerHTML = `${recipe.strMeasure18} ${recipe.strIngredient18}`
        const ingredientsList19 = document.createElement('ul')
        ingredientsList19.innerHTML = `${recipe.strMeasure19} ${recipe.strIngredient19}`
        const ingredientsList20 = document.createElement('ul')
        ingredientsList20.innerHTML = `${recipe.strMeasure20} ${recipe.strIngredient20}`

        recipeList.append(ingredientsList1)
        recipeList.append(ingredientsList2)
        recipeList.append(ingredientsList3)
        recipeList.append(ingredientsList4)
        recipeList.append(ingredientsList5)
        recipeList.append(ingredientsList6)
        recipeList.append(ingredientsList7)
        recipeList.append(ingredientsList8)
        recipeList.append(ingredientsList9)
        recipeList.append(ingredientsList10)
        recipeList.append(ingredientsList11)
        recipeList.append(ingredientsList12)
        recipeList.append(ingredientsList13)
        recipeList.append(ingredientsList14)
        recipeList.append(ingredientsList15)
        recipeList.append(ingredientsList16)
        recipeList.append(ingredientsList17)
        recipeList.append(ingredientsList18)
        recipeList.append(ingredientsList19)
        recipeList.append(ingredientsList20)
        //Intructions title 
        const recipeInstructionsTitle = document.createElement('h4')
        recipeInstructionsTitle.innerHTML = `Instructions`
        recipeList.append(recipeInstructionsTitle)
        //Instructions
        const recipeInstructions = document.createElement('p')
        recipeInstructions.innerHTML = `${recipe.strInstructions}`
        recipeList.append(recipeInstructions)
        //footer 
        const footer = document.createElement('footer')
        footer.innerHTML = ''
        recipeList.append(footer)
    })
})
