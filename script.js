const button = document.querySelector('#search')
const searchInput = document.querySelector('#search-input')

button.addEventListener("click", async () => {
    const recipe = searchInput.value 
    const response = await axios.get(`www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`)

    console.log(response)
})