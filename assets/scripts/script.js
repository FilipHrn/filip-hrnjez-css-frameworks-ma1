var dropDownTrigger = document.getElementById("dropdown__trigger");
var dropDownContent = document.querySelector(".dropdown__content");

dropDownTrigger.addEventListener('click', function(){
    dropDownContent.classList.toggle('dropdown__content--show');
}),false; 
