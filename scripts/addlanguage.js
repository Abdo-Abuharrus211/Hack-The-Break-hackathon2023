
$(document).ready(
    $("#addlanguage").click(function () {
        $(".more-languages").append(
            `
            <div class="language-group">
                <input type="text">
                <input type="range" class="range" min="0" max="100" class="slider">
            </div>
            `
        );
    })
);