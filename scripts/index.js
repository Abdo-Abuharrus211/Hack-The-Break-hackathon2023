$(document).ready(function() {
  var audio = new Audio("/audio/bubbles.mp3");
    $("#banner-button").click(function() {
      // $('#bubbles-audio')[0].play();
      audio.play();
      window.location.href = "/main.html";
    });
  });
  

