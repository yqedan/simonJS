var Game = require('./../js/simon.js').gameModule;

var game = new Game("hot pink");

console.log(game.skinName);
var success = false;
do {
  success = game.turn();
} while (success);
console.log("game over!")

// for (var i = 0; i < 10; i++) {
//   console.log(game.randomColor());
// }
// $(function() {
//
// });
