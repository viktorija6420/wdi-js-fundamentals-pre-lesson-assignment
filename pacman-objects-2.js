// pacman-objects-2.js
var ghosts = {inky: 'Cyan', blinky: 'Red', pinky: 'Pink', clyde: 'Orange' };
console.log(ghosts);

//retrieving values by using dot notation or square brackets

console.log(ghosts.inky); // => 'Cyan'
console.log(ghosts.blinky); // => 'Red'

console.log(ghosts['inky']); // => 'Cyan'
console.log(ghosts['blinky']); // => 'Red'


// The square bracket notation is used when the property you
// want to retrieve on the object is stored in a variable:
var ghostName = 'clyde';
ghosts[ghostName]; // => 'Orange'
