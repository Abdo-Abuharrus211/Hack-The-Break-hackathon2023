var addLanguageButton; 
var cancelLanguageButton;
document.getElementById("addLanguage").addEventListener("click", addLanguage)
document.getElementById("cancelLanguage").addEventListener("click", cancelLanguage)

function addLanguage() {
    console.log("hello")
    addLanguageButton = document.getElementById("addLanguage");
    cancelLanguageButton = document.getElementById("cancelLanguage")
    addLanguageButton.style.display = "none";
    cancelLanguageButton.style.display = "block";
    

}

function cancelLanguage() {
    console.log("bye")
    addLanguageButton = document.getElementById("addLanguage");
    cancelLanguageButton = document.getElementById("cancelLanguage")
    addLanguageButton.style.display = "block";
    cancelLanguageButton.style.display = "none";
    

}

