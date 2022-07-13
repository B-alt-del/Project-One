//------------------------------------------------------------create ingredients array--------------------------------------------------------------------

var get_ingredients_alphabetically = "https://www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list";
var ingredients_array = [];
var ingredients_array_object = { "A" : [], "B" : [], "C" : [], "D" : [], "E" : [], "F" : [], "G" : [], "H" : [], "I" : [], "J" : [], "K" : [], "L" : [], "M" : [], "N" : [], "O" : [], "P" : [], "Q" : [], "R" : [], "S" : [], "T" : [], "U" : [], "V" : [], "W" : [], "X" : [], "Y" : [], "Z" : [], "1" : [], "2" : [], "3" : [], "4" : [], "5" : [], "6" : [], "7" : [], "8" : [], "9" : [], "0" : [] };

make_ingredients_array();

$(`#console_ingredients`).on('click', function(){console.log(ingredients_array_object)});

function make_ingredients_array(){

    fetch(get_ingredients_alphabetically).then(function(resObject){
        return resObject.json();
    }).then(function(data){   
        
        data.drinks[239].strIngredient1 = "Lemon-lime";
        data.drinks[240].strIngredient1 = "Lemon";

        for(var i = 0; i < data.drinks.length; i++){

            ingredients_array[i] = data.drinks[i].strIngredient1;
        }        

        for(var i = 0; i < ingredients_array.length; i++){

           var First = ingredients_array[i][0];

           ingredients_array_object[First].push(ingredients_array[i]);
        }
    })
}
//------------------------------------------------------get info based on ingredients selected------------------------------------------------------------

$(`#create-cards`).on('click', get_by_ingredient);
$(`#get_selected_drinks_info`).on('click', function(){console.log(selected_drinks_object)});

var selected_drinks_ids = [];
var selected_drinks_object = [];

function get_by_ingredient(){       //calls all other functions in this section

    var API_drinkIds_by_ingredients = 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Vodka,Rum';

    //funciton pass checked items to otherfunction

    return fetch(API_drinkIds_by_ingredients).then(function(resObject){
        return resObject.json();
    }).then(function(data){

        document.getElementById("created_card").innerHTML = `<div></div>`;

        for (var i = 0; i < data.drinks.length; i++) {

            selected_drinks_ids[i] = data.drinks[i].idDrink;

        }

        createCard(data);

        get_info_by_id();
    });
}


function get_info_by_id(){

    var API_drink_by_ID = 'https:www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=';

    for(i = 0; i < selected_drinks_ids.length; i++){

        fetch(API_drink_by_ID + selected_drinks_ids[i]).then(function(resObject){ 
            return resObject.json();
        }).then(function(data){
            selected_drinks_object.push(data.drinks[0])
        })
    }
}



function createCard(data) {     //possibly create array to store drink id to each card

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
            </div>`
}}

//--------------------------------------------------------------------------------------------------------------------------------------------------------

  $(document).ready(function(){
    $('.modal').modal();
  });

// var age_confirmed = localStorage.getItem("Age_Confirmed");    

// if((age_confirmed != "true") || (age_confirmed === 'undefined')){
//     window.location.href="pages/age_verification.html";
// }


//-----------------------------------------------button to reset local storeage for Age_Confirmed to test ------------------------------------------------

var $btn_resetAge = $(`#age_reset`); 


$btn_resetAge.click(function(){
    
    localStorage.setItem("Age_Confirmed", "false");

    var age_status = localStorage.getItem("Age_Confirmed");

    console.log(age_status);

})

//-----------------------------------------------------------^^^^  TEST BUTTON   ^^^^---------------------------------------------------------------------



//-----------------------------------------------------------SIDEBAR BELOW--------------------------------------------------------------------------------

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
      <li><a class="dropdown-trigger btn" href="#!" data-target="dropdown1">${property}</a>
      <ul id='dropdown1' class='dropdown-content'>
        <li><a href="#!">First</a></li>
        <li><a href="#!">Second</a></li>
        <li><a href="#!">Third</a></li>
        <li><a href="#!">Fourth</a></li>
      </ul></li>`
    }
  }