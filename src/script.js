var button = document.getElementById("no");

button.addEventListener("mouseover", function ()
{
  move();
});

button.addEventListener("click", function ()
{
  move();
});

function move()
{
  var x = Math.floor(Math.random() * window.innerWidth);
  var y = Math.floor(Math.random() * window.innerHeight);
  button.style.top = y + "px";
  button.style.left = x + "px";
}

var yesbutton = document.getElementById("yes");
yesbutton.addEventListener("click", function ()
{
  document.getElementById("wrapper").style.visibility = "hidden";
  document.getElementById("firework").style.visibility = "visible";
});