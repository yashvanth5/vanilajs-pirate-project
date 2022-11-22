var btnTranslate = document.querySelector("#btn-txt");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output-txt");
var severUrl = "https://api.funtranslations.com/translate/pirate.json"

function getTranslatedUrl(text) 
{
    return severUrl + "?" + "text= " + text
}

function errorHandler(error) 
{

    console.log("error occured", error);
    alert("something wrong with server try again later")

}






function clickEventHandler() 
{
    var inputText = textInput.value;

    fetch(getTranslatedUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var outputText = json.contents.translated; 
       outputDiv.innertext = outputText;
        } )
        .catch(errorHandler)
};



btnTranslate.addEventListener("click", clickEventHandler);