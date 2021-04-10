// variables/querySelectors

//variable targeting th button let's cook
// event listener to tell button which radio input is selected
// function to pull from array of selected radio button
//generate random dish
// use if statement to determine which radio button is selected?

var showRecipeBtn = document.querySelector('#show-recipe')
var sidesRadioBtn = document.querySelector('#rd-side')
var mainRadioBtn = document.querySelector('#rd-main')
var dessertRadioBtn = document.querySelector('#rd-dessert')
var recipeFormBtn = document.querySelector('#add-recipe')
var addNewBtn = document.querySelector('#add-new')

var cookPot = document.querySelector('img')
var footer = document.querySelector('footer')
var displayedRecipe = document.querySelector('#recipe')

var recipeType = document.querySelector('#recipe-type')
var recipeName = document.querySelector('#recipe-name')




showRecipeBtn.addEventListener('click', displayRecipe)
recipeFormBtn.addEventListener('click', displayAddForm)
addNewBtn.addEventListener('click', addRecipeToList)
addNewBtn.addEventListener('click', displayNewRecipe)
addNewBtn.addEventListener('click', validateType)


function displayRecipe() {
  var randomSide = sides[getRandomIndex(sides)];
  var randomMain = mains[getRandomIndex(mains)];
  var randomDessert = desserts[getRandomIndex(desserts)];
  if (sidesRadioBtn.checked) {
    cookPot.classList.add('hidden')
    displayedRecipe.innerHTML = `
      <h5 class='recipe'>You should make:</h5>
      <h3 class='main'>${randomSide}</h3>`
  } else if (mainRadioBtn.checked) {
      cookPot.classList.add('hidden')
      displayedRecipe.innerHTML = `
        <h5 class='recipe'>You should make:</h5>
        <h3 class='main'>${randomMain}</h3>`
    } else{
      if (dessertRadioBtn.checked) {
        cookPot.classList.add('hidden')
        displayedRecipe.innerHTML = `
          <h5 class='recipe'>You should make:</h5>
          <h3 class='main'>${randomDessert}</h3>`
        }
      }
}

function displayAddForm() {
  footer.classList.toggle('fadeIn');
}

function addRecipeToList() {
  console.log('hi')
  if (recipeType.value === 'side') {
    sides.push(recipeName.value)
    console.log('hello')
  } else if (recipeType.value === 'main') {
    mains.push(recipeName.value)
  } else if (recipeType.value === 'dessert') {
    dessert.push(recipeName.value)
  }
}


function displayNewRecipe () {
  if (recipeType.value !== '' && recipeName.value !== '') {
    cookPot.classList.add('hidden');
    displayedRecipe.innerHTML = `
    <h5 class='recipe'>You should make:</h5>
    <h3 class='main'>${recipeName.value}</h3>`
  }
}

function validateType() {
  var type = 'side' || 'main' || 'dessert';
  if (recipeType.value !== type) {
    alert(`${recipeType.value} is not a valid input!`)
  }
}



function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
