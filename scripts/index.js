$(document).ready(function() {
  const audio = new Audio("/audio/bubbles.mp3");
    $("#banner-button").click(function() {
      $('#bubbles-audio')[0].play();
      window.location.href = "/bubbles.html";
    });
  });
  

