
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


function createCard () {

    for (var i = 0; i < 5; i++) {
    $(`<div class="row"
            <div class="col s3">
                <div class="card">
                    <div class"card-image">
                        <img src="images/booze-background.jpg">
                    </div>
                    <div class="card-content">
                        <p>Drink Name</p>
                    </div>
                    <div class="card-action">
                        <a href="#">View Full Recipe</a>
                    </div>
                </div>
            </div>
        </div>`)}
}


$(`#create-cards`).on('click', createCard);
