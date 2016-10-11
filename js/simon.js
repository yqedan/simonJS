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
    this.patternIndex++;
  }else{
    alert("you lose!");
    this.patternIndex = 0;
    this.pattern = [];
  }
  if (this.patternIndex === this.pattern.length) {
    this.patternIndex = 0;
    this.flash();
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
      $('#' + pattern[i]).css( "background-color", "white" );
      console.log(i + " " + pattern[i]);
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
