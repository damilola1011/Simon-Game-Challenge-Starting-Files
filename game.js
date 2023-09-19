// var buttonColors = ["red", "blue", "green", "yellow"];
// var userClickedPattern =[];
// var gamePattern = [];

// $(".btn").click(function() {

//     var userChosenColor = $(this).attr("id");
//     userClickedPattern.push(userChosenColor);
  
//     playSound(userChosenColor);
  
//     animatePress(userChosenColor);
//   });

//   function nextSequence() {

//     var randomNumber = Math.floor(Math.random() * 4);
//     var randomChosenColor = buttonColors[randomNumber];
//     gamePattern.push(randomChosenColor);
  
//     $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  
//     playSound(randomChosenColor);
//   }
  

// function playSound(name){
//     var audio = new Audio("sounds/" + name + ".mp3");
//     audio.play();
// }
// function animatePress(currentColor){
//     $("#"+ currentColor).addClass("pressed");

//         setTimeout(function() {
//             $("#"+ currentColor).removeClass("pressed"); // Remove class after a delay
//         }, 100);
// }



var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);
});

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//1. Create a new function called animatePress(), it should take a single input parameter called currentColour.
function animatePress(currentColor) {

  //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
  $("#" + currentColor).addClass("pressed");

  //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
