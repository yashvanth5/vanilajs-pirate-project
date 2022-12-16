var btnTranslate = document.querySelector("#btn-txt");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output-txt");

var serverUrl = "https://api.funtranslations.com/translate/pirate.json"

function getTranslation(text) 
{
    return serverUrl + "?" + "text=" + encodeURIComponent(text);
    
}

function errorHandler(error) {
    console.log("error occurred", error);
    alert("something wrong with server. Please try again later.");
     }

function clickEventHandler() {
    var inputText = textInput.value;
    fetch(getTranslation(inputText))
    .then(response => response.json())
    .then(json => {
        var outputText = json.contents.translated; 
       outputDiv.innerText = outputText;
        } )
        .catch(errorHandler)
};



btnTranslate.addEventListener("click", clickEventHandler);

