var Game = require('./../js/simon.js').gameModule;

$(function() {
  var game = new Game();
  $("#start").click(function(){
    game.flash();
    $("#red").click(function(){
      game.evaluateGuess("red");
    });
    $("#green").click(function(){
      game.evaluateGuess("green");
    });
    $("#blue").click(function(){
      game.evaluateGuess("blue");
    });
    $("#yellow").click(function(){
      game.evaluateGuess("yellow");
    });
  });
});
