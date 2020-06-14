var color=["red", "blue", "green", "yellow"];
var getcol=[];
var userclickedpattern=[];

var started = false;

//2. Create a new variable called level and start at level 0.
var level = 0;

//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(function() {
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

// clicked by user (it will be a sequence of num)
$(".btn").click(function()
{
  var usercol=$(this).attr("id");
  userclickedpattern.push(usercol);
 playsound(usercol);
 animate(usercol);
 checkAnswer(userclickedpattern.length-1);
});
/////checkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
function checkAnswer(clevel)
{
  if(getcol[clevel]===userclickedpattern[clevel]){
    if(getcol.length===userclickedpattern.length)
    {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }}
  else {
    console.log("wrong");
     $("body").addClass("game-over");
     // playsound(wrong);
   setTimeout(function () {
     $("body").removeClass("game-over");
   }, 200);
   $("#level-title").text("Game Over, Press Any Key to Restart");
  playsound("wrong");
  startover();}
}
var highscore=0;
// robot will randomly click a number
function nextSequence(){
  userclickedpattern=[];
  level++;
  $("#level-title").text("level "+ level);
  if(highscore<level)highscore=level;
  $("h2").text("highscore "+highscore).css("color","pink");

  var n=Math.random();
  n= Math.floor(n*4);
  var col=color[n];
  getcol.push(col);
$('#'+col).fadeIn(100).fadeOut(100).fadeIn(100);
playsound(col);
animate(col);
}

// reseting the value of all variable when wrong key is pressed
function startover()
{
  level=0;
  started=false;
  getcol=[];
  // userclickedpattern=[];
}
function playsound(name)
{
  var audio = new Audio("sounds/" + name+ ".mp3");
  audio.play();
}

function animate(name)
{
  $('#'+name).addClass("pressed");
  setTimeout(function () {
    $("#" + name).removeClass("pressed");
  }, 100);
}
