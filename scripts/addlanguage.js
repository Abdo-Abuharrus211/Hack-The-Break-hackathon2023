
$(document).ready(function() {
    $("#addLanguage").click(function () {
        console.log("this works")
        $(".more-languages").append(
            `
            <div class="language-group">
                <input type="text" id="newLanguage">
                <input type="range" class="range" min="0" max="100" class="slider">
            </div>
            `
        );
    });

    $("#cancelLanguage").click(function () {
        $(".more-languages").remove();
    });
});