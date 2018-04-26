/* You only need to type .load script.js in the node.js REPL and it will run the entire test. It will test the open() function of the TV_driver with the 240 different possible TVs it could get.
*  If the test is successful, which is should be, you should see the number 240 printed out to the REPL.
*
*  Note: before you do the .load script.js in the REPL, you need to to .load list.js to create the array.
*/

var temp = require('./testOpenTV.js');

var x;
var i = 0;

for (x in a) {
	if (temp.testOpen(x)) {
			i++;
	}	
}

console.log(i);
