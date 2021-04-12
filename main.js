
var showRecipeBtn = document.querySelector('#show-recipe')
var sidesRadioBtn = document.querySelector('#rd-side')
var mainRadioBtn = document.querySelector('#rd-main')
var dessertRadioBtn = document.querySelector('#rd-dessert')
var recipeFormBtn = document.querySelector('#add-recipe')
var addNewBtn = document.querySelector('#add-new')
var clearBtn = document.querySelector('#clear-recipe')

var cookPot = document.querySelector('img')
var footer = document.querySelector('footer')
var displayedRecipe = document.querySelector('#recipe')

var recipeType = document.querySelector('#recipe-type')
var recipeName = document.querySelector('#recipe-name')


showRecipeBtn.addEventListener('click', displayRecipe)
recipeFormBtn.addEventListener('click', displayAddForm)
addNewBtn.addEventListener('click', addRecipeToList)
addNewBtn.addEventListener('click', displayNewRecipe)
clearBtn.addEventListener('click', clearRecipe)
mainRadioBtn.addEventListener('click', enableBtn)
sidesRadioBtn.addEventListener('click', enableBtn)
dessertRadioBtn.addEventListener('click', enableBtn)

function enableBtn() {
  showRecipeBtn.classList.add('fadeIn')
}

function displayRecipe() {
  var randomSide = sides[getRandomIndex(sides)];
  var randomMain = mains[getRandomIndex(mains)];
  var randomDessert = desserts[getRandomIndex(desserts)];
  cookPot.classList.toggle('hidden')
  clearBtn.classList.toggle('fadeIn')
  if (sidesRadioBtn.checked) {
    displayedRecipe.innerHTML = `
      <h5 class='recipe'>You should make:</h5>
      <h3 class='main'>${randomSide}</h3>`
  } else if (mainRadioBtn.checked) {
      displayedRecipe.innerHTML = `
        <h5 class='recipe'>You should make:</h5>
        <h3 class='main'>${randomMain}</h3>`
    } else if (dessertRadioBtn.checked) {
        displayedRecipe.innerHTML = `
          <h5 class='recipe'>You should make:</h5>
          <h3 class='main'>${randomDessert}</h3>`
    }
  }


function displayAddForm() {
  footer.classList.toggle('fadeIn');
}

function addRecipeToList() {
  if (recipeType.value === 'side') {
    sides.push(recipeName.value)
  } else if (recipeType.value === 'main') {
    mains.push(recipeName.value)
  } else if (recipeType.value === 'dessert') {
    desserts.push(recipeName.value)
  } else {
    alert('Please enter side, main, or dessert as your recipe type!')
  }
}

function displayNewRecipe () {
  if (!recipeType.value && !recipeName.value) {
    addNewBtn.disabled = true;
  } else {
    cookPot.classList.add('hidden');
    clearBtn.classList.toggle('fadeIn');
    displayedRecipe.innerHTML = `
    <h5 class='recipe'>You should make:</h5>
    <h3 class='main'>${recipeName.value}</h3>`
  }
  displayAddForm();
  addNewBtn.disabled = false;
}

function clearRecipe() {
  displayedRecipe.classList.toggle('hidden');
  cookPot.classList.remove('hidden');
  clearBtn.classList.remove('fadeIn')
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
