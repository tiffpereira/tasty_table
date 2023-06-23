//RECIPE PAGE JS
const recipeSection = document.querySelector('.recipe-container')
const recipeHeader = document.querySelector('.recipe-header')
const recipeDets = document.querySelector('recipe-details')

window.onload = async function() {
    let mealData = JSON.parse(sessionStorage.getItem('selectedMealData'))
    console.log(mealData)

    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealData.idMeal}`)
    console.log(res.data.meals[0])
    const meal = res.data.meals[0]

    //create iframe, add class
    let video = document.createElement('iframe')
    video.classList.add('video')
    
    //get videoId from YouTube URL
    let videoId = meal.strYoutube.split('v=')[1] //spliting at v= into 2 arrays, we are selecting the 1th index to get video id and not the url section before v=
    let ampersandPosition = videoId.indexOf('&') //finding ampersand aka additional parameters after the video id
    if(ampersandPosition != -1) { //ampersand returns -1 if the parameter is not there
    videoId = videoId.substring(0, ampersandPosition) //if parameter is there it removes it 
    }

    //set src of the iframe
    video.src = `https://www.youtube.com/embed/${videoId}`

    recipeSection.append(video)

    //creating section and adding class
    const imgInstructionsContainer = document.createElement('div')
    imgInstructionsContainer.classList.add('recipe-img-container')
    
    //creating header and adding class
    const recipeTitleContainer = document.createElement('div')
    recipeTitleContainer.classList.add('recipe-title-container')

    //create category title, add pass, pass into recipe title 
    let categorytitle = document.createElement('h3')
    categorytitle.classList.add('recipe-category-title')
    categorytitle.innerHTML = `${meal.strArea}`
    recipeTitleContainer.append(categorytitle)

    //create title, add class, pass into title container
    let recipeTitle = document.createElement('h1')
    recipeTitle.classList.add('recipe-title')
    recipeTitle.innerHTML = `${meal.strMeal}`
    recipeTitleContainer.append(recipeTitle)

    //create img, add class, pass into title container
    let recipeImg = document.createElement('img')
    recipeImg.classList.add('recipe-img')
    recipeImg.src = `${meal.strMealThumb}`

    //div to wrap title in for styling purposes
    let titleWrapper = document.createElement('div')
    titleWrapper.classList.add('title-wrapper')
    titleWrapper.append(recipeTitleContainer)
    recipeSection.append(titleWrapper)

    recipeSection.append(recipeImg)

    let ingredientSection = document.createElement('div')
    ingredientSection.classList.add('ingredients-section')
    
    let ingredientsTitle = document.createElement('h1')
    ingredientsTitle.classList.add('ingredients-title')
    ingredientsTitle.innerHTML = 'Ingredient Checklist'
    ingredientSection.append(ingredientsTitle)

    let ingredientsList = document.createElement('ul')
    ingredientsList.classList.add('ingredients-list')

    for (let i = 1; i <= 20; i++) {
        let ingredient = meal[`strIngredient${i}`]
        let measure = meal[`strMeasure${i}`]

        //trim removes any whitespace so that empty strings are not rendered 
        if (ingredient && ingredient.trim() !== '' && measure && measure.trim() !== ''){
            let list = document.createElement('li')
            list.classList.add('list')
            ingredientsList.appendChild(list)

            // create checkbox input element
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('checkbox')
            
            // Create a label for the checkbox
            let label = document.createElement('label');
            label.htmlFor = `ingredient${i}`;
            label.textContent = `${measure} ${ingredient}`;
            
            // Append the checkbox and label to the list item
            list.appendChild(checkbox);
            list.appendChild(label);
    
        }
    }

    ingredientSection.append(ingredientsList)
    imgInstructionsContainer.append(ingredientSection, recipeImg)
    recipeSection.append(imgInstructionsContainer)


    //create instructions title 
    let instructions = document.createElement('h1')
    instructions.classList.add('instructions-title')
    instructions.innerHTML = 'Instructions'
    recipeSection.append(instructions)

    let instructionsInfo = document.createElement('p')
    instructionsInfo.classList.add('instructions')
    instructionsInfo.innerHTML = `${meal.strInstructions}`
    recipeSection.append(instructionsInfo)

}