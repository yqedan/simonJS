(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Game = require('./../js/simon.js').gameModule;

$(function() {
  $("#start").click(function(){
    var game = new Game("hot pink");
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
function Game(skinName) {
  this.skinName = skinName;
  this.pattern = [];
  this.patternIndex = 0;
}

Game.prototype.randomColor = function() {
  var colors = ["red", "blue", "yellow", "green"]
  return colors[Math.floor((Math.random() * 3) + 0)];
};

Game.prototype.evaluateGuess = function(guess){
  if(guess === this.pattern[this.patternIndex]){
    this.patternIndex++;
  }else{
    console.log("you lose!");
  }
  if (this.patternIndex === this.pattern.length) {
    this.patternIndex = 0;
    this.flash();
  }
}

resetButtonColors = function(){
  $('#red').css( "background-color", "#d9534f" );
  $('#green').css( "background-color", "#5cb85c" );
  $('#blue').css( "background-color", "#428bca" );
  $('#yellow').css( "background-color", "#f0ad4e" );
}


Game.prototype.flash = function(){
  var tone = null;
  var color = this.randomColor();
  this.pattern.push(color);
  var i = 0;
  var j = 0;
  var pattern = this.pattern;
  var id = window.setInterval(function(){
    if (i % 2 === 0) {
      resetButtonColors();
    }else {
      $('#' + pattern[j]).css( "background-color", "black" );
      tone = document.getElementById(pattern[j] + "Sound");
      tone.play();
      j++;
    }
    console.log(i + " " + pattern[i]);
    i++;
    if (j-1 >= pattern.length) {
      resetButtonColors();
      clearInterval(id);
    }
  }, 1000);
}

exports.gameModule = Game;

},{}]},{},[1]);
