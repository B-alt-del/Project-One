//------------------------------------------------------------create ingredients array--------------------------------------------------------------------
$('#modal1').modal();

var get_ingredients_alphabetically = "https://www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list";
var ingredients_array = [];
var ingredients_array_object = { "A" : [], "B" : [], "C" : [], "D" : [], "E" : [], "F" : [], "G" : [], "H" : [], "I" : [], "J" : [], "K" : [], "L" : [], "M" : [], "N" : [], "O" : [], "P" : [], "Q" : [], "R" : [], "S" : [], "T" : [], "U" : [], "V" : [], "W" : [], "X" : [], "Y" : [], "Z" : [], "1" : [], "2" : [], "3" : [], "4" : [], "5" : [], "6" : [], "7" : [], "8" : [], "9" : [], "0" : [] };
var test_El = document.getElementById('ingredient-list');

make_ingredients_array();

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

//---------------------------------------------------------Page Load  Popular Drinks Fetch--------------------------------------------------------------------

var API_popular_cocktails = "https://www.thecocktaildb.com/api/json/v2/9973533/popular.php";

popular_homepage()

function popular_homepage(){

 fetch(API_popular_cocktails).then(function(resObject){
        console.log(resObject);
        return resObject.json();
    }).then(function(data){
        for (var i = 0; i < data.drinks.length; i++) {
            selected_drinks_ids[i] = data.drinks[i].idDrink;
        }
        get_info_by_id();
        createCard(data);
    });
}

//--------------------------------------------------------Reset Side-Bar & Pass in chosen string--------------------------------------------------------------------------------------

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

var selected_drinks_ids = [];
var selected_drinks_object = [];

function get_by_ingredient(){    

    if(selected_ingredients_string.length === 0){
        alert("There were no slections with these ingredients: please reset and try again");
    }else{
        pass_selected_ingredient_to_string();
    
        var API_drinkIds_by_ingredients = 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=';
    
        return fetch(API_drinkIds_by_ingredients + ingredient_string_for_API_search).then(function(resObject){
            return resObject.json();
        }).then(function(data){
            
            if(data.drinks === "None Found"){
                alert("sorry no drinks with that selection: please reset and try again")
            }else{

            document.getElementById("created_card").innerHTML = `<div></div>`;
    
            for (var i = 0; i < data.drinks.length; i++) {
    
                selected_drinks_ids[i] = data.drinks[i].idDrink;
    
            }
    
            // console.log(selected_drinks_ids);
            // console.log(data.drinks.length);
    
            get_info_by_id();
            
            createCard(data);
    
    }});}
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
                        <p> ${data.drinks[i].strDrink} </p>
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

if((age_confirmed != "true") || (age_confirmed === 'undefined')){
    window.location.href="pages/age_verification.html";
}

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
                `<li id = ${alphabet[j]}${i} ><a href="#Find_Drinks" onclick="myFunction(event)">${ingredients_array_object[`${alphabet[j]}`][i]
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

    var modal_name = document.getElementById("h4_name");
    var modal_instructions = document.getElementById("p_instructions");
    var selectedDrink;
    var non_null_ing = [];
    var non_null_amt = [];
    
    
    for(var i = 0; i < selected_drinks_object.length; i++){
    
        if(selected_drinks_object[i].idDrink === event.target.id){
    
            selectedDrink = selected_drinks_object[i];
        }
    }
    for(var i = 1; i < 16; i++){
    
        if((typeof selectedDrink[`strMeasure${i}`]) == 'string'){
            // console.log(selectedDrink[`strIngredient${i}`])
            non_null_amt[i-1] = (selectedDrink[`strMeasure${i}`]);
            document.getElementById(`Li${i}`).innerHTML = `${non_null_amt[i-1]}`;
            }else{
                non_null_amt[i-1] = '';
             }
     }
    for(var i = 1; i < 16; i++){
    
        if((typeof selectedDrink[`strIngredient${i}`]) == 'string'){
            // console.log(selectedDrink[`strIngredient${i}`])
             non_null_ing[i-1] = "  " + selectedDrink[`strIngredient${i}`];
            document.getElementById(`Li${i}`).innerHTML += `${non_null_ing[i-1]}`;
    
            }else{
                non_null_ing[i-1] = '';
             }
     }
    modal_name.innerHTML =` ${selectedDrink.strDrink}`;
    modal_instructions.innerHTML = `${selectedDrink.strInstructions}`;
     $('#modal1').modal();
    }

//----------------------------------------------Movie Generator------------------------------------------------------------


$(`#get_selected_drinks_info`).on('click', function(){console.log(selected_drinks_object)});

var movieAPI = 'cb318d82a4b8ed6ff9428da1aaca7204';
var random_movie_button = document.querySelector("#findRandomMovie");

var movieIdEl = randomIdGen();

function randomIdGen() {
    return Math.floor(Math.random() * 1000000);
}

function searchMovie(movieIdEl) {
    var API_movie_url = 'https://api.themoviedb.org/3/movie/' + movieIdEl + '?api_key=' + movieAPI;

    fetch(API_movie_url)
        .then(response => response.json())
        .then(data =>{ 
            if(data.success === false) {
                var newRandID = randomIdGen()
                searchMovie(newRandID)
                showImage(newRandID)
            }else if(data.adult === true){
                var newRandID = randomIdGen()
                searchMovie(newRandID)
                showImage(newRandID)
            }else if(data.original_language != 'en'){
                var newRandID = randomIdGen()
                searchMovie(newRandID)
                showImage(newRandID)
            }else{
                
            document.getElementById("movieStuff").innerHTML = data.original_title;
            document.getElementById("movie_description").innerHTML = data.overview;
            
            // document.getElementById("movie_genre").innerHTML = data.genres[0].name;
            document.getElementById("movie_image").innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="No Image Available in Database">
            `
            }

        })
}

function showImage(movieIdEl) {
    fetch('https://api.themoviedb.org/3/movie/' + movieIdEl + '/images?api_key=' + movieAPI + '&language=en-US')
        .then(response => response.json())
        .then(function(data){
        })
}

searchMovie(movieIdEl)
showImage(movieIdEl)



$btn_resetMovie = $("#reset_movie");

$btn_resetMovie.click(function(){
    
    searchMovie(movieIdEl)


})


// // random_movie_button.addEventListener("click", function () {

//     $btn_resetSidebar.click(function(){
//         selected_ingredients_string = [];
//         ingredient_string_for_API_search = '';
    
//             test_El.innerHTML = `<li> </li>`
//     })
// // })



//----------------------------------------------Sandbox------------------------------------------------------------
