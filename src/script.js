var button = document.getElementById("no");

button.addEventListener("mouseover", function ()
{
  console.log("button hovered");

  var x = Math.floor(Math.random() * window.innerWidth);
  var y = Math.floor(Math.random() * window.innerHeight);
  button.style.top = y + "px";
  button.style.left = x + "px";
});

var yesbutton = document.getElementById("yes");

yesbutton.addEventListener("click", function ()
{
  window.location.href = "firework.html";
});