// JavaScript to toggle the navigation menu
function toggleNav() {
  var navigation = document.getElementById("navigation");
  if (navigation.style.display === "block") {
    navigation.style.display = "none";
  } else {
    navigation.style.display = "block";
  }
}

// JavaScript to change the background color of the website
function changeColor(color) {
  document.body.style.background = color;
}
