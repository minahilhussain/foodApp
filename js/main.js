$(document).ready(function(){
  $("#mob-nav").click(function(){
    var x = document.getElementById("mobile-nav-list");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  });
  
});