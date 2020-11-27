const readLineSync = require('readline-sync');

var name = readLineSync.question("Hey ! Enter your name ..");



console.log("Welcome " + name);

var answer = readLineSync.question("Do u want to play Quiz (Y/N)");

if (answer === "Y") {
    console.log("Let' play the quiz");
}
else {
    console.log("Bye!!!!!!!!!!!!!!!!!!!!!!!");
    process.exit();

}


var score = 0;

var toppers = [
    {
        name: "Tanay",
        points: 5
    },
    {
        name: "Diya",
        points: 4
    }

]

var questions = [
    {
        question: "What's my last Name ",
        answer: "Daksh"
    },
    {
        question: "Enter the sports that I like most",
        answer: "cricket"
    },
    {
        question: "Where do I live ?",
        answer: "sagar"
    },
    {
        question: "Marvel character I am fan of ?",
        answer: "ironman"
    },
    {
        question: "My favourite singer ?",
        answer: "arijit"
    }

]

function play(question, answer) {
    var userAnswer = readLineSync.question(question);
    if (userAnswer === answer) {
        console.log("U are correct !");
        score += 1;
    }
    else {
        console.log("U are wrong! try next");

    }
    console.log("Your current score is " + score);
    console.log("--------------------");

}


for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
}


console.log("Your final score is " + score)
if (score >= toppers[0].points || score >= toppers[1].points) {
    console.log("Wohoo! U are one of the top scorers in the quiz");
    console.log("Please send the screen shot so that i can update the toppers !");

}

console.log("--------------------------Thanks for taking the quiz------------------")