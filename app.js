var buttonTranslate = document.querySelector("#btn-txt");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

var severUrl = "https://api.funtranslations.com/translate/pirate.json"

function translatedUrl(imput) {
    return severUrl + "?" + "text= " + input

}

function errorHandling(error) {

    console.log("error occured", error)
    alert("something wrong with server try again later")

}






function clickHandler() {
    // outputDiv.innerText = "translation: " + textInput.value;
    var inputText = textInput.value;
}

fetch(translatedUrl(inputText))
    .then(response = response.json())
    .then(json => outputDiv.innerText = json.contents.translated)
    .catch(errorHandling)

buttonTranslate.addEventListener("click", clickHandler())