//site logic

var highScore = [];
var username = []; //to be incorporated into objects?

$("#startbutton").click(function () {
    //click to start
    //signIn();
    // setup();
    googleLogin();
});



function setup() {
    $("#menu").html("<image></image>");
    $("#about").html("<image></image");
    $("#startS").html("<image></image");
    // $("startM").html("<image></image>");
    $("#leaderB").html("<image></image>")
}


$("#about").click(function () {
    //fancyboxpopout 
});


$("startS").click(function () {
    //startsgame
    // sGameStart();
});

/*$("startM").click(function(){
   //starts multiplayer
    mGameStart();
});*/

$("leaderB").click(function () {
    //use firebase to populate leaderboard
    $("#leader-board > lbody").append("<tr><td>" + "username" + "userscore")
})
