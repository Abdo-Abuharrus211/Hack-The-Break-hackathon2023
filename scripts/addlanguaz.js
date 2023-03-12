var addLanguageButton; 
var cancelLanguageButton;
document.getElementById("addLanguage").addEventListener("click", addLanguage)
document.getElementById("cancelLanguage").addEventListener("click", cancelLanguage)
var moreLanguagesDiv = document.querySelector(".more-languages");

function addLanguage() {
    console.log("hello")
    addLanguageButton = document.getElementById("addLanguage");
    cancelLanguageButton = document.getElementById("cancelLanguage")
    addLanguageButton.style.display = "none";
    cancelLanguageButton.style.display = "block";
    moreLanguagesDiv.innerHTML += `            <div class="language-group">
    <input type="text" id="newLanguage">
    <input type="range" class="range" min="0" max="100" class="slider">
</div>`;
    

}

function cancelLanguage() {
    console.log("bye")
    addLanguageButton = document.getElementById("addLanguage");
    cancelLanguageButton = document.getElementById("cancelLanguage")
    addLanguageButton.style.display = "block";
    cancelLanguageButton.style.display = "none";
    moreLanguagesDiv.removeChild(moreLanguagesDiv.lastElementChild)
    

}

