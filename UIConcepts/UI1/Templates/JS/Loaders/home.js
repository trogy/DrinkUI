$(document).ready(function(){
    $("#btn-right").click(function(){
        $("#AJAXContent").load("Pages/Dispense.php");
    });
});
$(document).ready(function(){
    $("#btn-left").click(function(){
        $("#AJAXContent").load("Pages/Configure.php");
    });
});
console.log('home.js load success');
