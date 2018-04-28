/* This is the script to run in the node REPL to test the test() function for the TV_driver.
*  1) First you need to load the list.js file in the repl. To do this, type ".load list.js". This will load the array with the TVs that you'll be checking the open() function with.
*  2) In the node REPL, you just need to load this file and this will run as a script. To do so, in node type ".load lues_secrit_plays_2.js".
*  3) There are 240 TVs which represent all possible combinations of the TV's variables. This script will use the testTest() function on each of them, which in turn open a driver, set its commands
*		to each TV, and use the TV's variables to create a sentence that should match what is produced by the TV driver's composeMessage() function. This sentence is then put into the TV driver's
*		test() function, which returns whether or not the sentence given matches what composeMessage() produces. If the driver's test() returns true, testTest() says that the sentence was the same.
*		If the sentence is the same, this script will increment the variable i.		
*  4) As there are 240 different devies being turned on, at the end the variable i should be 240. The console will log the value of i. 
*  
*/

var temp = require('./testTV.js');


/* This was a simple test of original idea. Leaving just in case need to look at again.

a = [];
const TV = require('./TV.js');
a.push(new TV('A Drill','Missile',['Kauai']));
a.push(new TV('A Drill','Hurricane',['Kauai']));
temp.testTest(a[0])
temp.testTest(a[1])
*/


var x;
var i = 0;

for (x in a) {
	var y = a[x];
	if (temp.testTest(y) == "same sentence") {
			i++;
	}	else {break;}
}



console.log(i);
