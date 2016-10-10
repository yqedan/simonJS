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
