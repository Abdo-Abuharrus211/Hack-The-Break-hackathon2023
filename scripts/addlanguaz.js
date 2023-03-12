var addLanguageButton; 
var cancelLanguageButton;
var submitLanguageButton;
var newLanguage;
document.getElementById("addLanguage").addEventListener("click", addLanguage);
document.getElementById("cancelLanguage").addEventListener("click", cancelLanguage);
document.getElementById("submitLanguage").addEventListener("click", submitLanguage);

var moreLanguagesDiv = document.querySelector(".more-languages");
//var formGroupDiv = document.querySelector(".form-group");

function addLanguage() {
    console.log("hello")
    addLanguageButton = document.getElementById("addLanguage");
    cancelLanguageButton = document.getElementById("cancelLanguage")
    submitLanguageButton = document.getElementById("submitLanguage")
    addLanguageButton.style.display = "none";
    cancelLanguageButton.style.display = "block";
    moreLanguagesDiv.innerHTML += ` <div class="language-group">
                                    <input type="text" id="newLanguage">
                                    <input type="range" class="range" min="0" max="100" class="slider">
                                     </div>`;

    submitLanguageButton.style.display = "block";
    

}

function cancelLanguage() {
    console.log("bye")
    addLanguageButton = document.getElementById("addLanguage");
    cancelLanguageButton = document.getElementById("cancelLanguage")
    addLanguageButton.style.display = "block";
    cancelLanguageButton.style.display = "none";
    moreLanguagesDiv.removeChild(moreLanguagesDiv.lastElementChild)
    submitLanguageButton.style.display = "none";
    

}

function submitLanguage() {
    newLanguage = document.getElementById("newLanguage");
    moreLanguagesDiv.removeChild(moreLanguagesDiv.lastElementChild)
    moreLanguagesDiv.innerHTML += `<div class="language-group">
                            <label for="c_exp" class="form-label">${newLanguage.value}</label>
                            <input type="range" class="range" min="0" max="100" id="c_exp" class="slider">`;
    cancelLanguageButton.style.display = "none";
    submitLanguageButton.style.display = "none";
    addLanguageButton.style.display = "block";

    
}

