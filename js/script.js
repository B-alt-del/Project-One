//-----------------------------create ingredients array-----------------------//can try sorting by alcoholic after mvp

var get_ingredients_alphabetically = "https://www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list";

var ingredients_array = [];
var ingredients_array_object = { "A" : [], "B" : [], "C" : [], "D" : [], "E" : [], "F" : [], "G" : [], "H" : [], "I" : [], "J" : [], "K" : [], "L" : [], "M" : [], "N" : [], "O" : [], "P" : [], "Q" : [], "R" : [], "S" : [], "T" : [], "U" : [], "V" : [], "W" : [], "X" : [], "Y" : [], "Z" : [], "1" : [], "2" : [], "3" : [], "4" : [], "5" : [], "6" : [], "7" : [], "8" : [], "9" : [], "0" : [] };

make_ingredients_array();



//$(`#console_ingredients`).on('click', function(){console.log(ingredients_array)});
$(`#console_ingredients`).on('click', function(){console.log(ingredients_array, ingredients_array_object)});


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
    });
}



//--------------------------------------------------------------------------------------------------------------------------------------------------------

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

//----------------------------------create drink object by individual id----------------

// var selected_drinks_ids = [];
// var selected_drinks_objects = [];

// $(`#create-cards`).on('click', get_by_ingredient);
// $(`#get_selected_drinks_info`).on('click',get_info_by_id);

// function get_info_by_id(){

//     var drink_by_id = 'https:www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=';

//     for(i = 0; i < selected_drinks_ids.length; i++){

//         fetch(drink_by_id + selected_drinks_ids[i]).then(function(resObject){ 
//             return resObject.json();
//         }).then(function(data){                  
//             selected_drinks_objects[i] = data;
//         }).then(function(){
//             console.log(selected_drinks_objects);
//         })
//     }

// }

// function get_by_ingredient(){
//     var url2 = 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Vodka,Rum';

//     return fetch(url2).then(function(resObject){
//         return resObject.json();
//     }).then(function(data){
//         // console.log(data);
//         // console.log(data.drinks);
//         // console.log(data.drinks.length);

//         document.getElementById("created_card").innerHTML = `<div></div>`;

//         for (var i = 0; i < data.drinks.length; i++) {

//             selected_drinks_ids[i] = data.drinks[i].idDrink;

//         }

//         // console.log(selected_drinks_ids);

//         for (var i = 0; i < data.drinks.length; i++) {
        
//             document.getElementById("created_card").innerHTML += `

//             <div class="col s3">
//             <div class="card">
//               <div class="card-image">
//                 <img src="${data.drinks[i].strDrinkThumb}">
//               </div>
//               <div class="card-content">
//                 <p>Drink # ${i + 1}: ${data.drinks[i].strDrink} </p>
//               </div>
//               <div class="card-action">
//                 <a href="#">View Full Recipe</a>
//               </div>
//             </div>
//           </div>
            
//             `
//         }
//     })
// }

//--------------------------------------Above works--------------------------------------------

//need to add storage for the ids of the drinks shown on cards


var selected_drinks_ids = [];
var selected_drinks_objects = [];

$(`#create-cards`).on('click', get_by_ingredient);
$(`#get_selected_drinks_info`).on('click', get_info_by_id);

function get_info_by_id(){

    var drink_by_id = 'https:www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=';

    for(i = 0; i < selected_drinks_ids.length; i++){

        fetch(drink_by_id + selected_drinks_ids[i]).then(function(resObject){ 
            return resObject.json();
        }).then(function(data){

            selected_drinks_objects[i] = data;

        }).then(function(){
            console.log(selected_drinks_objects);
        })
    }

}

function get_by_ingredient(){
    var url2 = 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Vodka,Rum';

    return fetch(url2).then(function(resObject){
        return resObject.json();
    }).then(function(data){
        // console.log(data);
        // console.log(data.drinks);
        // console.log(data.drinks.length);

        document.getElementById("created_card").innerHTML = `<div></div>`;

        for (var i = 0; i < data.drinks.length; i++) {

            selected_drinks_ids[i] = data.drinks[i].idDrink;

        }

        // console.log(selected_drinks_ids);

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
