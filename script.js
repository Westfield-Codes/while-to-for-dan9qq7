var answer = Math.floor(Math.random()*9)+1;
alert(answer)
var forW = confirm("for loop or while loop version? ok =while cancel = for")
if (forW == true){
/* While Loop Review: Three Guesses */

// Define a variable answer, set equal to a random number between 1 and 10

// Define a variable guess, set equal to 0
var guess = 0;
// Define a variable guessCount, set equal to 0
var guesscount = 0;
// Let the user guess WHILE guessCount is less than 4
while (guesscount < 4){
// Add one to guessCount
guesscount = guesscount + 1
// Set guess equal to the user input after "Guess my number"
guess = prompt("guess my number")
// If guess is equal to answer, say "Right!" and break the loop
if (guess == answer)alert("right!");
else alert("wrong")
// Otherwise say "Wrong!"
// End the loop
}
// If guessCount is equal to 4, say "Out of guesses. The number was ANSWER"
if (guesscount == 4)alert("out of guesses! the answer was "+answer)
/* For Loop Conversion */

// Rewrite this as a for loop. 
alert("Now4loop")
}
else{

for (guesscount = 0; guesscount<4 && guess != answer; guesscount++)
{
    guess = prompt("guess my number")
    if (guess != answer) alert("Wrong")
}
if (guess == answer) alert("your right in "+guesscount+" guesses")
    else alert("your out of guesses, the answer is "+answer)
}