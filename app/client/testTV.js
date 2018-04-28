/* This a function that tests the open() function in the TV_driver.js. This is used in turn with the lues_secrit_plays_1.js file. This file opens a driver with a device and returns whether or not
*  the driver's open variable is true;
*  REQUIREMENT: When the open() function function is called, the device driver will change its variable "open" to true, indicating that the driver has been started.
*
*/

exports.testOpen = function testOpen(device) {
	var temp = require('./TV_driver.js');
	temp.open(device);
	console.log(device);
	return temp.open;
}



/*   This is a function that tests the test() function of the TV_driver.js function. This is used in turn with the lues_secrit_plays_2.js file. This function opens a driver and creates a sentence
*    that should match what the driver's composeMessage() function returns. This sentence is put into the driver's test() function, which returns whether or not the inputted sentence matches
*    what the composeMessage() function returns.
*
*   REQUIREMENTS: Given sentences of any disaster and location data in the format from the composeMessage() function, the test() function should always return true.
*/
exports.testTest = function(commands) {
	var temp = require('./TV_driver.js');
    temp.open('');
	temp.commands = commands;
	var sentence = "There is a " + commands.disaster + " alert for the following area(s): \n " + commands.locations + "\nPlease seek shelter immediately";
	console.log(sentence);
	if (temp.test('xbox','unused', sentence)) {return "same sentence";} else {return "different sentence";}
}


/*   This is a function that tests the test() function of the TV_driver.js function. This is used in turn with the lues_secrit_plays_3.js file. This function opens a driver and creates a sentence
*    that should NOT match what the driver's composeMessage() function returns. This sentence is put into the driver's test() function, which returns whether or not the inputted sentence matches
*    what the composeMessage() function returns.
*
*   REQUIREMENTS: Given sentences of any disaster and location data NOT in the format from the composeMessage() function, the test() function should always return false.
*/
exports.testTest2 = function(commands) {
	var temp = require('./TV_driver.js');
    temp.open('');
	temp.commands = commands;
	var sentence = "There is an " + commands.disaster + " alert for the following area(s): \n " + commands.locations + "\nPlease seek shelter immediately";
	console.log(sentence);
	if (temp.test('xbox','unused', sentence)) {return "same sentence";} else {return "different sentence";}
}

exports.testWarningOnCanceled = functions(device, commands) {
	var temp = require('./TV_driver.js');
	temp.open(device);
	
}

















