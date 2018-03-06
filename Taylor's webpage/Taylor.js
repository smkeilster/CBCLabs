
let button1 = true;

function Reveal()
{
  document.getElementById("answer").innerHTML = "Able Brown";

  if(button1 === false)
  {
    document.getElementById("answer").style.visibility = "hidden";
    button1 = true;
    document.getElementById("p1").className = "";

  }
  else
  {
    document.getElementById("answer").style.visibility = "visible";
    button1 = false;
    document.getElementById("p1").className = "button1";
  }

}
