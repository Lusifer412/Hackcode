

var a = prompt('Enter the first variable: ');
var b = prompt("Enter the second variable: ")
function setup(){
  var b2 = createButton("click here to Swap");
b2.mousePressed(swap)
b2.position(200,200)
  }
  

function swap()
{
  [a,b]=[b,a]
  console.log("a "+a)
  console.log("b "+b)
}
function draw()
{ 
}
