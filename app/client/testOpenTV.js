/* This file contains one function that tests the open() function in the TV_driver.js. This is used in turn with the script.js file.
*
*/

exports.testOpen = function testOpen(device) {
	var temp = require('./TV_driver.js');
	temp.open(device);
	return temp.open;
}
