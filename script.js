const button = document.querySelector('#search')
const searchInput = document.querySelector('#search-input')
const randomButton = document.querySelector('#random')

//Button 1 
button.addEventListener("click", async () => {
    const recipe = searchInput.value 
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`)

    console.log(response)

    const renderList = response.data.meals 
})

//Button 2
randomButton.addEventListener("click", async () => {
    const recipe = searchInput.value 
    const response = await axios.get(`https:www.themealdb.com/api/json/v1/1/random.php`)

    console.log(response)

    const renderList = response.data.meals
})

