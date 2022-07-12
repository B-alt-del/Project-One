

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

    return fetch(url2).then(function(resObject){
        return resObject.json();
    }).then(function(data){
        console.log(data);
        console.log(data.drinks);
        console.log(data.drinks.length);

        document.getElementById("created_card").innerHTML = `<div></div>`;

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

//need to add storage for the ids of the drinks shown on cards
//set up API call for ingredient list
//change the createCards to erase the previous 
