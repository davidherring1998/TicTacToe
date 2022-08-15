


// data base
// var options = ['r', 'p', 's']

// var results = {
//     gameNum:0,
//     win: 0,
//     loss: 0,
//     tie:0
// }

// function playGame () {
//     window.prompt("please enter r, p, s")
// }

// create a function



// making the rock,paper,sissor prompt and user input
// let myanswer = prompt("R ,P, S")


// let choices = ["R", "P", "S"]

// let computeranswer = choices[Math.floor(Math.random()*choices.length)];

// // Ties
// if(myanswer === "R" && computeranswer ==="R") {
//     console.log("It's a tie!!")
//     prompt(`It's a Tie! Your answer: ${myanswer} Computers answer: ${computeranswer} `)
// }

// if(myanswer === "P" && computeranswer === "P") {
//     console.log("It's a tie!!")
//     prompt(`It's a Tie! Your answer: ${myanswer} Computers answer: ${computeranswer} `)
// }


// if(myanswer === "S" && computeranswer ==="S") {
//     console.log("It's a tie!!")
//     prompt(`It's a Tie! You answer: ${myanswer} Computers answer: ${computeranswer} `)
// }



// // r vs p
// if(myanswer === "R" && computeranswer ==="P") {
//     console.log("Computer Won!!")
//     prompt(`Computer Won!! My answer: ${myanswer} Computers answer: ${computeranswer} `)
// }


// if(myanswer === "P" && computeranswer === "R") {
//     console.log("You Won!!")
//     prompt(`I Won!! Your answer: ${myanswer} Computers answer: ${computeranswer} `);
// }



// // r vs s
// if(myanswer === "R" && computeranswer ==="S") {
//     console.log("Computer Won!!")
//     prompt(`Computer Won!! Your answer: ${myanswer} Computers answer: ${computeranswer} `);
// }

// if(myanswer === "S" && computeranswer === "R") {
//     console.log("You Won!!")
//     prompt(`I Won!! Your answer: ${myanswer} Computers answer: ${computeranswer} `);
// }

// //P VS S
// if(myanswer === "S" && computeranswer ==="P") {
//     console.log("Computer Won!!")
//     prompt(`Computer Won!! Your answer: ${myanswer} Computers answer: ${computeranswer} `);
// }

// if(myanswer === "P" && computeranswer === "S") {
//     console.log("You Won!!")
//     prompt(`I Won!! Your answer: ${myanswer} Computers answer: ${computeranswer} `);
// } 


// trying to loop
// const round = 2;
// while (round !== 0); 
// {

// trying to make it ask if you want to play
if (confirm('Do you want to play?')) {
    game()
} else {  
    // alert('To bad!!');
}

// trying to get to loop 
// for (let i = 0; i < choicesArray.length; i++) {
    
// }


function game(){
// choices
let myChoices = prompt("R, P, or S?");

//array to get computers choice 
let choicesArray = ["R", "P", "S"];

// computers choice 
 let computerAnswer = choicesArray[Math.floor(Math.random()*choicesArray.length)];
//console.log(computerAnswer);



//my choices vs computers choice

if (myChoices === "R" && computerAnswer == "R") {
    console.log("It is a tie!")
    prompt(`It is a tie!! Your answer: ${myChoices} Computers answer: ${computerAnswer}!`);
 } else if (myChoices === "P" && computerAnswer == "P") {
    console.log("It is a tie!")
    prompt(`It is a tie!! Your answer: ${myChoices} Computers answer: ${computerAnswer}!`);
 } else if (myChoices === "S" && computerAnswer == "S") {
    console.log("It is a tie!")
    prompt(`It is a tie!! Your answer: ${myChoices} Computers answer: ${computerAnswer}!`);
 } else if (myChoices === "R" && computerAnswer == "P") {
    console.log("computer won")
    prompt(`Computer won!! Your answer: ${myChoices} Computers answer: ${computerAnswer}!`);
 } else if (myChoices === "P" && computerAnswer == "R") {
    console.log("You won!!")
    prompt(`You won!! Your answer: ${myChoices} Computers answer: ${computerAnswer}!`);
 }  else if (myChoices === "R" && computerAnswer == "S") {
    console.log(" You won")
    prompt(`You won!! Your answer: ${myChoices} Computers answer: ${computerAnswer}!`);
 }  else if (myChoices === "S" && computerAnswer == "R") {
    console.log("computer won")
    prompt(`Computer won!! Your answer: ${myChoices} Computers answer: ${computerAnswer}!`);
 } else if (myChoices === "S" && computerAnswer == "P") {
    console.log(" You won")
    prompt(`You won!! Your answer: ${myChoices} Computers answer: ${computerAnswer}!`);
 } else if (myChoices === "P" && computerAnswer == "S") {
    console.log("computer won")
 } else {
    console.log("not a entry")
    prompt("Not a choice, please retry!")
 }
}


