var addLanguageButton;
var cancelButton;

function addLanguage() {
    addLanguageButton = document.getElementById("addLanguage");
    cancelButton = document.getElementById("cancelLanguage");
    addLanguageButton.style.display ="none";
    cancelButton.style.display="block";
    cancelButton.onclick = cancelLanguage;

}

function cancelLanguage() {
    console.log("this cancelled");
    addLanguageButton = document.getElementById("addLanguage");
    cancelButton = document.getElementById("cancelLanguage");
    cancelButton.style.display="none";
    addLanguageButton.style.display ="block";
    addLanguageButton.onclick = addLanguage;
    
}

var addLanguageButton = document.getElementById("addLanguage");


addLanguageButton.onclick = addLanguage;
cancelButton.onclick = cancelLanguage;