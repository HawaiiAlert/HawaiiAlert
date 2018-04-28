/* This is the script to run in the node REPL to test the open() function for the TV_driver.
*  1) First you need to load the list.js file in the repl. To do this, type ".load list.js". This will load the array with the TVs that you'll be checking the open() function with.
*  2) In the node REPL, you just need to load this file and this will run as a script. To do so, in node type ".load lues_secrit_plays_1.js".
*  3) There are 240 TVs which represent all possible combinations of the TV's variables. This script will use the testOpen() function on each of them, which in turn uses the driver's open()
*		function on each of the TVs, and then returns the device's open variable. This script will increment variable i for every testOpen() on a TV that returns true. 
*  4) As there are 240 different devies being turned on, at the end the variable i should be 240. The console will log the value of i. 
*
*  Note: before you do the .load script.js in the REPL, you need to to .load list.js to create the array.
*/

var temp = require('./testTV.js');

var x;
var i = 0;

for (x in a) {
	var y = a[x];
	if (temp.testOpen(y)) {
			i++;
	}	
}

console.log(i);
