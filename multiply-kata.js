/* Multiplication */
var questions = 5;
var curq = 0
while (curq < questions){
// Create 2 variables, a & b, and set to ne random integers between 3 and 9
var a = Math.floor(Math.random()*(9-3)+1)+1;
var b = Math.floor(Math.random()*(9-3)+1)+1;
// Set a variable called product to be the product of a and b
var product = a*b;
// Set a variable called equation to display  a * b = ??
var equation = a+" * "+b+" = "+product
// Ask the equation of the user and store the user input in a variable called answer
var answer = prompt("solve "+a+" * "+b+" = ")
// Say "Correct!" if the answer and product match, "Incorrect!" if not.
if (answer == product) alert("correct")
    else alert("incorrect")
/* Multiplication whjile Loop */
curq = curq + 1;
alert("curq="+curq);
}

alert("now 4loop");

var questions = 5;
for (curq = 0;curq < questions; curq++){
var a = Math.floor(Math.random()*(9-3)+1)+1;
var b = Math.floor(Math.random()*(9-3)+1)+1;
var product = a*b;
var equation = a+" * "+b+" = "+product
var answer = prompt("solve "+a+" * "+b+" = ")
if (answer == product) alert("correct")
    else alert("incorrect")

alert("curq="+curq);
}