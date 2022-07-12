

  $(document).ready(function(){
    $('.modal').modal();
  });

var age_confirmed = localStorage.getItem("Age_Confirmed");    

if((age_confirmed != "true") || (age_confirmed === 'undefined')){

    window.location.href="pages/age_verification.html";

}


//-----------------------------------------------button to reset local storeage for Age_Confirmed to test --------------------------------------------------
var $btn_resetAge = $(`#age_reset`); 


$btn_resetAge.click(function(){
    
    localStorage.setItem("Age_Confirmed", "false");

    var age_status = localStorage.getItem("Age_Confirmed");

    console.log(age_status);

})

//-----------------------------------------------------------^^^^  TEST BUTTON   ^^^^-----------------------------------------------------------------------------------------



//-----------------------------------------------------------SIDEBAR BELOW-----------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    // var instances = M.Sidenav.init(elems, options);
  });

  // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
//   var collapsibleElem = document.querySelector('.collapsible');
//   var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    // var instances = M.Dropdown.init(elems, options);
  });

  // Or with jQuery

  $('.dropdown-trigger').dropdown();

//------------------------------------------------Create Cards With the drink: Name and Image ----------------------------------------------------------

// //--------------getting clicked drink data---------------
// get_by_ingredient().then(display_drink_listings);

// function get_by_ingredient(){
//     var url2 = 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Vodka,Rum';

//     return fetch(url2).then(function(resObject){
//         return resObject.json();
//     });

// }

// function display_drink_listings(drink_data){

//     var drink_by_id = 'https:www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=';

//     fetch(drink_by_id + drink_data.drinks[0].idDrink).then(function(resObject){ 
//         return resObject.json();
//     }).then(function(data){                  
//         console.log(data);

//     });  

// }
// //-------------------------------------------------------

//var drinks_by_chosen_ingredients = [];  //practicing setting var in create card
//get_by_ingredient();   //practicing calling in create card function


// var drinks_by_object;

// function get_by_ingredient(){
//     var url2 = 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Vodka,Rum';

//     return fetch(url2).then(function(resObject){
//         return resObject.json();
//     }).then(function(data){   
//         drinks_by_object = data.drinks;               
//         console.log(data);
//     });

// }



//-----------------------Populate cards using array of drinks with chosen ingredients---------

// function createCard () {


//     for (var i = 0; i < 30; i++) {
        
//         document.getElementById("created_card").innerHTML += `
//         <div class="col s3">
//         <div class="card">
//           <div class="card-image">
//             <img src="images/booze-background.jpg">
//           </div>
//           <div class="card-content">
//             <p>Drink # ${i + 1} </p>
//           </div>
//           <div class="card-action">
//             <a href="#">View Full Recipe</a>
//           </div>
//         </div>
//       </div>
        
//         `
// }}


$(`#create-cards`).on('click', get_by_ingredient);

function get_by_ingredient(){
    var url2 = 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Vodka,Rum';

    console.log(url2);

    return fetch(url2).then(function(resObject){
        return resObject.json();
    }).then(function(data){
        console.log(data);
        console.log(data.drinks);
        console.log(data.drinks.length);


        for (var i = 0; i < data.drinks.length; i++) {
        
            document.getElementById("created_card").innerHTML += `
            <div class="col s3">
            <div class="card">
              <div class="card-image">
                <img src="${data.drinks[i].strDrinkThumb}">
              </div>
              <div class="card-content">
                <p>Drink # ${i + 1}: ${data.drinks[i].strDrink} </p>
              </div>
              <div class="card-action">
                <a href="#">View Full Recipe</a>
              </div>
            </div>
          </div>
            
            `
        }
    })
}




// $(`#createIngredientBtn`).on('click', create_ingredient_btns);

function create_ingredient_btns () {
  var ingredients = {
    'A': ['a'],
    'B': ['b'],
    'C': ['c'],
    'D': ['d'],
    'E': ['e'],
    'F': ['f'],
    'G': ['g'],
    'H': ['h'],
    'I': ['i'],
    'J': ['j'],
    'K': ['k'],
    'L': ['l'],
    'M': ['m'],
    'N': ['n'],
    'O': ['o'],
    'P': ['p'],
    'Q': ['q'],
    'R': ['r'],
    'S': ['s'],
    'T': ['t'],
    'U': ['u'],
    'V': ['v'],
    'W': ['w'],
    'X': ['x'],
    'Y': ['y'],
    'Z': ['z']
  }
  console.log(ingredients);
  // console.log(ingredients[0].value);

  for(const property in ingredients) {
    document.getElementById('ingredientBtns').innerHTML +=`
    <li><a class="dropdown-trigger btn" href="#!" data-target="dropdown1">${property}</a></li>
    <ul id='dropdown1' class='dropdown-content'>
      <li><a href="#!">First</a></li>
      <li><a href="#!">Second</a></li>
      <li><a href="#!">Third</a></li>
      <li><a href="#!">Fourth</a></li>
    </ul>`
  }



  
}





create_ingredient_btns ()

// <li><a class='dropdown-trigger btn' href='#' data-target='dropdown1'>${property}</a></li>
// <ul id='dropdown1' class='dropdown-content'>
//   <li><a href="#!">one</a></li>
//   <li><a href="#!">two</a></li>
//   <li class="divider" tabindex="-1"></li>
//   <li><a href="#!">two</a></li>
// </ul>`