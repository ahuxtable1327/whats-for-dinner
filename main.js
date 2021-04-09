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
var cookPot = document.querySelector('img')
// var randomSide =





showRecipeBtn.addEventListener('click', displayRecipe)

function displayRecipe() {
  var displayedRecipe = document.querySelector('#recipe')
  var randomSide = sides[getRandomIndex(sides)];
  var randomMain = mains[getRandomIndex(mains)];
  var randomDessert = desserts[getRandomIndex(desserts)];
  console.log(randomSide)
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


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
