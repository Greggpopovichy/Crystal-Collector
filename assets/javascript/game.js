$(document).ready(function(){

    //creating a random number to write into #computerNumber class in html. This number will be between 19 and 120
    $(document).on("load", function(random){
        var random = Math.floor(Math.random() * 101 + 19);
        $("#computerNumber").html(random);
    });

    //setting variables for crystals to hold random numbers (1-12). Using Math.random to generate number
    var crystal1 = Math.floor(Math.random() * 11+1);
    var crystal2 = Math.floor(Math.random() * 11+1);
    var crystal3 = Math.floor(Math.random() * 11+1);
    var crystal4 = Math.floor(Math.random() * 11+1);

    //initializing variables to keep track of user data
    var userScore = 0;
    var wins = 0;
    var losses = 0;

    //displays count for wins and losses in #wins and #losses ids within HTML doc
    $("#wins").text(wins);
    $("#losses").text(losses);

    //sets up functions to keep track of wins and losses counters. Also adds counters to html doc.
    function winner(){
        wins++;
        alert("You've won!");
        $("#wins").text(wins);
        }

    function loser(){
        losses++;
        alert("Better luck next time!");
        $("#losses").text(losses);
        }

    //Setting up on click events for buttons(crystals).

$(".button1").on('click', function(){
    userScore = userScore + crystal1;
    console.log("New userScore= " + userScore);
    $(".total_score").text(userScore);

        if(userScore === random){
            winner();
        }
        else if (userScore > random){
            loser();
        }
    });

$(".button2").on('click', function(){
        userScore = userScore + crystal2;
        console.log("New userScore= " + userScore);
        $(".total_score").text(userScore);

        if(userScore === random){
            winner();
        }
        else if (userScore > random){
            loser();
        }
    });

(".button3").on('click', function(){
        userScore = userScore + crystal3;
        console.log("New userScore= " + userScore);
        $(".total_score").text(userScore);

        if(userScore === random){
            winner();
        }
        else if (userScore > random){
            loser();
        }
    });

(".button4").on('click', function(){
        userScore = userScore + crystal4;
        console.log("New userScore= " + userScore);
        $(".total_score").text(userScore);

        if(userScore === random){
            winner();
        }
        else if (userScore > random){
            loser();
        }
    });
});
