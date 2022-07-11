

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

