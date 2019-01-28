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
