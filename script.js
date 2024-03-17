//created variables

var body = document.body;
var score = document.getElementById("score");
var count = document.getElementById("count");
var timer = document.getElementById("timer");
var time = document.getElementById("time");
var set = document.getElementById("set");
var questions = document.getElementById("questions");
var answers = document.getElementById("answers");
var initials = document.getElementById("initials");
var submitBtn = document.getElementById("submit");
var clearScrBtn = document.getElementById("clearHighscore");
var scoreList = document.getElementById("scoreList");
var result = document.getElementById("result");
var clear
var setTimer;
timer = 100;
var saveScr = [];
var saveInitials = [];
var ol = document.getElementById("ol");


//function to start timer
function gameClock (){
    setTimer = setInterval(function(){
        timer--;

        if(timer > 0){
            time.textContent = "Time Remaining: " + timer;
        }else {
            clearInterval(timer);
            time.textContent = "Game Over";
        }

    }, 1000);
}

var startBtn = document.getElementById("startBtn");

//function to create startbutton and start game

var init = function(){
var start = document.createElement("button");
startBtn.appendChild(start);
start.textContent = "Begin!";
start.addEventListener("click", function(){
    start.disabled = true;
    gameClock();
    startGame();
})
}



init();

//contents of game

var startGame = function(){
    //variable to set score
    ingameScore = 0;

    //creation of answer buttons

    count.textContent = ingameScore;
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    var Btn1 = document.createElement("button");
    var Btn2 = document.createElement("button");
    var Btn3 = document.createElement("button");
    var Btn4 = document.createElement("button");

    li1.appendChild(Btn1);
    li2.appendChild(Btn2);
    li3.appendChild(Btn3);
    li4.appendChild(Btn4);
    ol.appendChild(li1);
    ol.appendChild(li2);
    ol.appendChild(li3);
    ol.appendChild(li4);

    //creation of questions

    var question1 = function(){
        questions.textContent = "Select the best beverage!"

        Btn1.textContent = "Apple Juice";
        Btn1.addEventListener ("click", function(){
            result.textContent = "Incorrect";

            //timer subtraction if answer is incorrect
            timer = timer - 10;
            question2();
        })

        Btn2.textContent = "Orange Juice";
        Btn2.addEventListener ("click", function(){
            result.textContent = "Incorrect";
            timer = timer - 10;
            question2();
        })

        Btn3.textContent = "Cranberry Juice";
        Btn3.addEventListener ("click", function(){
            result.textContent = "Incorrect";
            timer = timer - 10;
            question2();
        })

        Btn4.textContent = "Mellow Yellow";
        Btn4.addEventListener ("click", function(){
            result.textContent = "Correct";

            //increase game score for correct answers
            ingameScore++;
            count.textContent = ingameScore;
            question2()
        })

    }
    //starts questions
    question1();

    var question2 = function(){
        questions.textContent = "Select the best character class in DIABLO IV!"

        Btn1.textContent = "Necromancer";
        Btn1.addEventListener ("click", function(){
            result.textContent = "Incorrect";
            timer = timer - 10;
            question3();
        })

        Btn2.textContent = "Druid";
        Btn2.addEventListener ("click", function(){
            result.textContent = "Incorrect";
            timer = timer - 10;
            question3();
        })

        Btn3.textContent = "Paladin";
        Btn3.addEventListener ("click", function(){
            result.textContent = "Incorrect";
            timer = timer - 10;
            question3();
        })

        Btn4.textContent = "Barbarian";
        Btn4.addEventListener ("click", function(){
            result.textContent = "Correct";
            ingameScore++;
            count.textContent = ingameScore;
            question3()
        })

    }

    var question3 = function(){
        questions.textContent = "Select the video game being played on the screen as this question is being written!"

        Btn1.textContent = "DIABLO IV";
        Btn1.addEventListener ("click", function(){
            result.textContent = "Correct";
            ingameScore++;
            count.textContent = ingameScore;
        })

        Btn2.textContent = "God of War";
        Btn2.addEventListener ("click", function(){
            result.textContent = "Incorrect";
            timer = 0;
        })

        Btn3.textContent = "Starcraft 2";
        Btn3.addEventListener ("click", function(){
            result.textContent = "Incorrect";
            timer = 0;
        })

        Btn4.textContent = "Hells Angles";
        Btn4.addEventListener ("click", function(){
            result.textContent = "Incorrect";
            timer = 0;
        })

    }

    //function to save scores

    submitBtn.addEventListener ("click", function(event){
        event.preventDefault();
        //create variable to accept input
        var twoLetters = initials.value.trim();
        if(twoLetters === ""){
            return;
        }

        //sets the score and initials to local storage
        localStorage.setItem("Initials", twoLetters);
        localStorage.setItem("Score", ingameScore);

        //variables created to retrieve items from local storage
        var savedInitials = localStorage.getItem("Initials");
        var savedScore = localStorage.getItem("Score");
        saveInitials.push(savedInitials);
        saveScr.push(savedScore);
        initials.value = "";
    
        scoreList.textContent = savedInitials, savedScore;
    })

}



