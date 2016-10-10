var readlineSync = require('readline-sync');

function Game(skinName) {
  this.skinName = skinName;
  this.pattern = [];
}

Game.prototype.randomColor = function() {
  var colors = ["red", "blue", "yellow", "green"]
  return colors[Math.floor((Math.random() * 3) + 0)];
};

Game.prototype.turn = function(){
  var color = this.randomColor();
  this.pattern.push(color);
  console.log(this.pattern);
  for (var i = 0; i < this.pattern.length; i++) {
    var guess = readlineSync.question('Enter your guess ', {
      hideEchoBack: false
    });

    console.log(guess);
    if (guess === this.pattern[i]) {
      console.log("correct");
    }else{
      console.log("incorrect");
      return false;
    }

  }
  return true;
}

exports.gameModule = Game;
