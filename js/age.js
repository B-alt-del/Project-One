var $btn_confirm = $(`#Of_Age`);
var $btn_decline = $(`#Too_Young`);


// $btn_confirm.click(function(){

//     localStorage.setItem("Age_Confirmed", "true");
//     window.location.href="../index.html";
    
// })

// $btn_decline.click(function(){

//     window.location.href="https://fwesh.yonle.repl.co/";

// })


function validAge(age){
    if((age >= 21)){
        console.log(age);
        return true;
    }
    else{
        return false;
    }
}

//Date picker
 var date = $('.datepicker').datepicker({ 
    // format : 'dd-mm-yyyy',
    yearRange: 50,
    onSelect: function(time) {
        var current = moment();
        var select = moment(time);
        //If older than 21:
       if( validAge(current.diff(select,'years')) === true){
            window.location.href = "/Users/elijhagordon/Desktop/Project1/Project-One/index.html";
       }
       else{
           //if your not 21 get rickrolled kiddo
            window.location.href="https://fwesh.yonle.repl.co/";
       }
    }
})



   
    

