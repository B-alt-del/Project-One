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

        fill_dropdown();
    })
}
//------------------------------------------------------get info based on ingredients selected------------------------------------------------------------

$(`#create-cards`).on('click', get_by_ingredient);
$(`#get_selected_drinks_info`).on('click', function(){console.log(selected_drinks_object)});

var selected_drinks_ids = [];
var selected_drinks_object = [];

function get_by_ingredient(){       //calls all other functions in this section

    var API_drinkIds_by_ingredients = 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Vodka,Rum';

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
  });


  $(document).ready(function(){
    $('.sidenav').sidenav();
  });


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
  });


   $('.dropdown-trigger').dropdown();


function fill_dropdown() {

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

for(var j = 0; j < alphabet.length; j++){

    for(var i = 0; i < ingredients_array_object[`${alphabet[j]}`].length; i++){

        document.getElementById(`dropdown${alphabet[j]}`).innerHTML +=
        `<li id = ${alphabet[j]}${i} ><a href="#!" onclick="myFunction(event)">${ingredients_array_object[`${alphabet[j]}`][i]}`
    }
}
}

function myFunction(event){
    var ingredientListEl = $('#ingredient-list');
    var item = event.target.firstChild.data;
    console.log(item);

    ingredientListEl.append(
        `<p>
            <label>
                <input type="checkbox" checked="checked" />
                <span>${item}</span>
            </label>
        </p>
        `);
}

//----------------------------------------------Sandbox------------------------------------------------------------
  


// $(`#create-cards`).on('click', get_by_ingredient);  //reference
// $(`#get_selected_drinks_info`).on('click', function(){console.log(selected_drinks_object)});  //reference

// var selected_drinks_ids = [];  //reference
// var selected_drinks_object = []; //reference


// var selected_ingredients_string = ["Vodka", "Rum"];  //temp, will be empty then filled by button selections
// var ingredient_string_for_API_search = "Vodka,Rum"    //temp, will be empty then filled by  pass_selected_ingredient_to_string function

// function pass_selected_ingredient_to_string(){  //finished, make sure to initialize variables globaly above

//     ingredient_string_for_API_search = selected_ingredients_string.join(",");

// }


// function get_by_ingredient(){       //calls all other functions in this section

//     var API_drinkIds_by_ingredients = 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=';  //removed Vodka, Rum

//     return fetch(API_drinkIds_by_ingredients + ingredient_string_for_API_search).then(function(resObject){    //added concatonation
//         return resObject.json();
//     }).then(function(data){

//         document.getElementById("created_card").innerHTML = `<div></div>`;

//         for (var i = 0; i < data.drinks.length; i++) {

//             selected_drinks_ids[i] = data.drinks[i].idDrink;

//         }

//         createCard(data);

//         get_info_by_id();
//     });
// }



// //------------------------button selections------------------------------wait until see what button format looks like

// $(`#create-cards`).on('click', get_by_ingredient);  //probably put get_by_ingredient into below function, and run below function on click

// function grab_selected_ingredients_from_buttons(){

// }

//------------------------Fill Modal With Info---------------------------

//  make each item the letter dropdowns clickable               ------check
//  connect slected ingredients to list under dropdowns         ---in progress
//  make array with selected ingredients from dropdown
//  make pass_selected_ingredients_to_string function            ---------check
//  make grab_selected_ingredients_from_buttons function
//
//
//
//  make modal for clicked recipe info: info from object:   selected_drinks_object[reference number]
//
//      name:               selected_drinks_object[#].strDrink
//      instructions:       selected_drinks_object[#].strInstructions
//      ingredients:        selected_drinks_object[#].strIngredient1
//                          selected_drinks_object[#].strIngredient2
//                          selected_drinks_object[#].strIngredient3
//                          selected_drinks_object[#].strIngredient4  through 15 (run a for loop that checks if null)
//      measurments:        selected_drinks_object[#].strMeasure1
//                          selected_drinks_object[#].strMeasure2
//                          selected_drinks_object[#].strMeasure3
//                          selected_drinks_object[#].strMeasure4     through 15 (run a for loop that checks if null)



// function create_Modal() {   //possibly create array to store drink id to each card
        
//         document.getElementById("modal1").innerHTML += `

//         <div class="modal-content">
//             <h4 id = "modal_drink_name" >Drink Name Placeholder</h4>
//             <p id = "modal_drink_instructions">instructions on how to make the drink, to be filled dynamically</p>
//             <div class="row amount-ingredients">
//                 <ul class="col-3 amounts">
//                     <li>1   part        Vodka</li>
//                     <li>2   parts       Rum</li>
//                     <li>1   part        Cranberry Juice</li>
//                     <li>1/2 parts       Lime Juice</li>
//                 </ul>
//             </div>
//         </div>
//         <div class="modal-footer">
//             <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
//             <a href="#!" class="modal-close waves-effect waves-green btn-flat">Save Recipe Locally</a>
//         </div>
//             `
// }


// add listener to all cards for click (--> MODAL with selected drinks info)
//create Modal (bottom screen Modal maybe?)
//      edit css of modal to be taller
//      dynamically fill modal with above information