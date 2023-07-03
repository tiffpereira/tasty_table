//Hamburger menu functionality 
const hamburgerMenu = document.querySelector('.hamburger-menu')
const hamburgerIcon = document.querySelector('.hamburger-menu .fas')
const leftNav = document.querySelector('.leftNav')

hamburgerMenu.addEventListener('click', (event) => {
    event.stopPropagation()
    leftNav.classList.toggle('show')
    hamburgerIcon.classList.toggle('fa-bars')
    hamburgerIcon.classList.toggle('fa-times')
  })
  
  document.addEventListener('click', () => {
    leftNav.classList.remove('show')
    hamburgerIcon.classList.add('fa-bars')
    hamburgerIcon.classList.remove('fa-times')
  })

//mealData from categories
const CancelToken = axios.CancelToken
let cancel

const categoryBtn = document.querySelectorAll('.category-card-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        const category = this.dataset.category
        console.log(`Button clicked, category: ${category}`); 
        getMealList(category)
    })
})

async function getMealList(category) {
    console.log(`getMealList called with category: ${category}`)
    sessionStorage.removeItem('mealData')
    if (cancel !== undefined) {
        cancel()
    }
    try {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`, 
        { cancelToken: new CancelToken(function executor(c) {
            // An executor function receives a cancel function as a parameter
            cancel = c;
            })
        })
        console.log(res.data.meals)
        sessionStorage.setItem('mealData', JSON.stringify(res.data.meals))
        window.location.href = 'mealList.html'
    } catch (error){
        console.error('Cannot get meals', error)
    }
    
}