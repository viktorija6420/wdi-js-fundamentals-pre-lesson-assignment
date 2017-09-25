// pacman-for-loop.js
var ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde'];

// for (<<initializer>>; <<condition>>; <<post iteration>>) {
//   <<statement>>
// }

for (var index = 0; index < ghosts.length; index++) {
  console.log('Pac-Man eats ' + ghosts[index]);
}

//index++ notation increments the value of index by 1.
//index-- to decrement (reduce) the value by 1.
