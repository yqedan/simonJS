(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./../js/simon.js":2}],2:[function(require,module,exports){
function Game() {
  this.pattern = [];
  this.patternIndex = 0;
}

Game.prototype.randomColor = function() {
  var colors = ["red", "blue", "yellow", "green"];
  return colors[Math.floor((Math.random() * 4) + 0)];
};

Game.prototype.evaluateGuess = function(guess){
  if(guess === this.pattern[this.patternIndex]){
    window.audio.src = './audio/' + guess + '.mp3';
    window.audio.play()
    this.patternIndex++;
  }else{
    window.audio.src = './audio/lose.mp3';
    window.audio.play()

    this.patternIndex = 0;
    this.pattern = [];
  }
  if (this.patternIndex === this.pattern.length) {
    this.patternIndex = 0;
    setTimeout(() => {this.flash()},250);
  }
};

Game.prototype.flash = function(){
  this.pattern.push(this.randomColor());
  var i = 0;
  var highlight = true;
  var pattern = this.pattern;
  var id = window.setInterval(function(){
    if (highlight) {
      resetButtonColors();
    }else {
      if(pattern[i]){
        $('#' + pattern[i]).css( "background-color", "white" );
        console.log(i + " " + pattern[i]);
        window.audio.src = './audio/' + pattern[i] + '.mp3';
        window.audio.play()
      }
      i++;
    }
    highlight = !highlight;
    if (i-1 >= pattern.length) {
      resetButtonColors();
      clearInterval(id);
    }
  }, 250);
};

resetButtonColors = function(){
  $('#red').css( "background-color", "#d9534f" );
  $('#green').css( "background-color", "#5cb85c" );
  $('#blue').css( "background-color", "#428bca" );
  $('#yellow').css( "background-color", "#f0ad4e" );
};

exports.gameModule = Game;

},{}]},{},[1]);
