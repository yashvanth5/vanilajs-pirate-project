// var btnTranslate = document.querySelector("#btn-txt");
// var textInput = document.querySelector("#text-input");
// var outputDiv = document.querySelector("#output-txt");

// var severUrl = "https://api.funtranslations.com/translate/pirate.json"

// function getTranslation(text) 
// {
//     return severUrl + "?" + "text=" + text
    
// }

// function errorHandler(error) {
//     console.log("error occured", error);
//     alert("something wrong with server try again later")
//      }

// function clickEventHandler() {
//     var inputText = textInput.value;
//     fetch(getTranslation(inputText))
//     .then(response => response.json())
//     .then(json => {
//         var outputText = json.contents.translated; 
//        outputDiv.innerText = outputText;
//         } )
//         .catch(errorHandler)
// };



// btnTranslate.addEventListener("click", clickEventHandler);



var btnTranslate = document.querySelector("#btn-txt");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output-txt");

var serverUrl = "https://api.funtranslations.com/translate/pirate.json"; // changed spelling of "server"

function getTranslation(text) {
    return serverUrl + "?" + "text=" + encodeURIComponent(text); // added `encodeURIComponent()` to properly encode the text
}

function errorHandler(error) {
    console.log("error occurred", error); // corrected spelling of "occurred"
    alert("something went wrong with the server. Please try again later."); // added more details to alert message
}

function clickEventHandler() {
    var inputText = textInput.value;
    fetch(getTranslation(inputText))
        .then(response => response.json())
        .then(json => {
            var outputText = json.contents.translated;
            outputDiv.innerText = outputText;
        })
        .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickEventHandler);
