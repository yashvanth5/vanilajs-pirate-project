var buttonTranslate = document.querySelector("#btn-txt");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");





function clickHandler () {
    outputDiv.innerText = "translation: " + textInput.value;
   
}


buttonTranslate.addEventListener  ("click",clickHandler() )