var $btn_confirm = $(`#Of_Age`);
var $btn_decline = $(`#Too_Young`);


$btn_confirm.click(function(){

    localStorage.setItem("Age_Confirmed", "true");
    window.location.href="../index.html";
    
})

$btn_decline.click(function(){

    window.location.href="https://fwesh.yonle.repl.co/";

})