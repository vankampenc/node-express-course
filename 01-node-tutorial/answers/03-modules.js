const names = require('./04-names.js');
const greetingName = require('./05-utils.js');
const music =  require('./06-alternative-flavor.js');
require('./07-mind-grenade.js');

console.log("Names:", names.ben, names.josh, names.sam)

greetingName("Chris")
greetingName(names.ben)
greetingName(names.josh)
greetingName(names.sam)

console.log("Genre:", music.musicGenreList)
console.log("Single Song:", music.singleSong)