//------------------------------------------------------------create ingredients array--------------------------------------------------------------------
$('#modal1').modal();

var get_ingredients_alphabetically = "https://www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list";
var ingredients_array = [];
var ingredients_array_object = { "A" : [], "B" : [], "C" : [], "D" : [], "E" : [], "F" : [], "G" : [], "H" : [], "I" : [], "J" : [], "K" : [], "L" : [], "M" : [], "N" : [], "O" : [], "P" : [], "Q" : [], "R" : [], "S" : [], "T" : [], "U" : [], "V" : [], "W" : [], "X" : [], "Y" : [], "Z" : [], "1" : [], "2" : [], "3" : [], "4" : [], "5" : [], "6" : [], "7" : [], "8" : [], "9" : [], "0" : [] };
var test_El = document.getElementById('ingredient-list'); //test

make_ingredients_array();

$(`#console_ingredients`).on('click', function(){console.log(ingredient_string_for_API_search, test_El.innerHTML)});  //test

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


var $btn_resetSidebar = $(`#resetSidebar`);
var selected_ingredients_string = [];
var ingredient_string_for_API_search = '';

function pass_selected_ingredient_to_string(){  //finished, make sure to initialize variables globaly above

    ingredient_string_for_API_search = selected_ingredients_string.join(",");
    console.log(ingredient_string_for_API_search)
}

$btn_resetSidebar.click(function(){
    selected_ingredients_string = [];
    ingredient_string_for_API_search = '';

        test_El.innerHTML = `<li> </li>`

})


//------------------------------------------------------get info based on ingredients selected------------------------------------------------------------

$(`#Find_Drinks`).on('click', get_by_ingredient);
$(`#get_selected_drinks_info`).on('click', function(){console.log(selected_drinks_object)});

var selected_drinks_ids = [];
var selected_drinks_object = [];

function get_by_ingredient(){    

    pass_selected_ingredient_to_string();

    var API_drinkIds_by_ingredients = 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=';

    return fetch(API_drinkIds_by_ingredients + ingredient_string_for_API_search).then(function(resObject){
        return resObject.json();
    }).then(function(data){

        document.getElementById("created_card").innerHTML = `<div></div>`;

        for (var i = 0; i < data.drinks.length; i++) {

            selected_drinks_ids[i] = data.drinks[i].idDrink;

        }

        // console.log(selected_drinks_ids);
        // console.log(data.drinks.length);

        get_info_by_id();
        
        createCard(data);

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
                        <a class="waves-effect waves-light btn modal-trigger" href="#modal1"  onclick="myFunction_cards(event)" id="${selected_drinks_ids[i]}" >View Full Recipe</a>
                    </div>
                </div>
            </div>`
}}

//--------------------------------------------------------Modal Script and Age_Verification load page script------------------------------------------------------------------------------------------------

  $(document).ready(function(){
    $('.modal').modal();
  });

var age_confirmed = localStorage.getItem("Age_Confirmed");    

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
                `<li id = ${alphabet[j]}${i} ><a href="#!" onclick="myFunction(event)">${ingredients_array_object[`${alphabet[j]}`][i]
            }`
        }
    }       
}

function myFunction(event){ 
    var ingredientListEl = $('#ingredient-list');
    var item = event.target.firstChild.data;

    ingredientListEl.append(
        `<p>
            <label>
                <input type="checkbox" checked="checked" />
                <span>${item}</span>
            </label>
        </p>
        `);
    selected_ingredients_string.push(`${item}`);

}

function myFunction_cards(event){
    var modalEl = document.getElementById("modal1");
    var selectedDrink;

    for(var i = 0; i < selected_drinks_object.length; i++){

        if(selected_drinks_object[i].idDrink === event.target.id){

            selectedDrink = selected_drinks_object[i];
        }
    }

    $('#modal1').modal();

    modalEl.innerHTML= `
        <div class="modal-content">
            <h4>${selectedDrink.strDrink}</h4>
            <p>${selectedDrink.strInstructions}</p>
            <div>
                <ul>
                    <li>${selectedDrink.strMeasure1}  ${selectedDrink.strIngredient1}</li>
                    <li>${selectedDrink.strMeasure2}  ${selectedDrink.strIngredient2}</li>
                    <li>${selectedDrink.strMeasure3}  ${selectedDrink.strIngredient3}</li>
                    <li>${selectedDrink.strMeasure4}  ${selectedDrink.strIngredient4}</li>
                    <li>${selectedDrink.strMeasure5}  ${selectedDrink.strIngredient5}</li>
                    <li>${selectedDrink.strMeasure6}  ${selectedDrink.strIngredient6}</li>
                    <li>${selectedDrink.strMeasure7}  ${selectedDrink.strIngredient7}</li>
                    <li>${selectedDrink.strMeasure8}  ${selectedDrink.strIngredient8}</li>
                    <li>${selectedDrink.strMeasure9}  ${selectedDrink.strIngredient9}</li>
                    <li>${selectedDrink.strMeasure10}  ${selectedDrink.strIngredient10}</li>
                    <li>${selectedDrink.strMeasure11}  ${selectedDrink.strIngredient11}</li>
                    <li>${selectedDrink.strMeasure12}  ${selectedDrink.strIngredient12}</li>
                    <li>${selectedDrink.strMeasure13}  ${selectedDrink.strIngredient13}</li>
                    <li>${selectedDrink.strMeasure14}  ${selectedDrink.strIngredient14}</li>
                    <li>${selectedDrink.strMeasure15}  ${selectedDrink.strIngredient15}</li>
                </ul>
            </div>
        </div>
        <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Save Recipe Locally</a>
        </div>
    `
    if (`<li>` === null) {
        remove(`<li>`)
    }
}


//----------------------------------------------Sandbox------------------------------------------------------------

//      todo:
//
//  make pass_selected_ingredients_to_string function            ---------check
//  make grab_selected_ingredients_from_buttons function

//      edit css of modal to be taller
