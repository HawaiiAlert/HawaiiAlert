/*README: In the 3 line block of code below (import,const,import). If you are running the APPLICATION, you comment out "const TV = require('./TV.js');" and uncomment the two import lines.
*         If you are running the TEST file, you comment out the two import lines, and uncomment "const TV = require('./TV.js');" The node.js REPL that I used to conduct the test uses different
*         syntax than meteor. If you don't do this, whatever you're trying to do will not work.
*/


//import { Session } from 'meteor/session';
const TV = require('./TV.js');
//import { TV } from './TV.js';



var open = false;
var commands;
var device;

/** So here is my idea to make the testing easier. Doing unit/individual testing of the functions is difficult because 1) the 'import {session}' at the beginning makes it so this won't work outside of
*   meteor and 2) 3 of the 7 functions originally had an line utilizing the Session object, using Session.get('session') or Session.get(commandstring), which also makes it so that this won't work
*   outside of meteor.
*
*   I think/hope that each call of Session.get() is essentially just duplicate work that can be done in just one function, which makes it so that the session object doesn't have to be used in all but
*   one function. This would allow the other functions to be tested more readily. As proof of this theory, I commented the out 'device.setMode(devicemode)' line from the warningOn() function, whose return 
*   value is essentially what is returned by the loadDriver() function on main.js, and in turn what is displayed on the final page. If this line mattered, then the function would return the "Unknown
*   mode", but after removing it the function still works and returns what should be the correct data.
*
*  So my idea is that basically remove all use of the Session object except for one function, allowing the rest to be tested, and when testing remove the 'import {session}' line outright as we're
*  only testing the output of functions with a set of input, and the 'import {session}' line has no bearing on the functions we removed the Session.get() from.
*/

exports.open = function(device){
  open = true;
}

exports.configure = function(device, commandstring){
  if(open){
    commands = Session.get(commandstring);
    device.setMode(commands.drill);
    device.setDisaster(commands.disaster);
    device.setLocations(commands.locations);
  }
}

function composeMessage(commands){
  return "There is a " + commands.disaster + " alert for the following area(s): \n " + commands.locations + "\nPlease seek shelter immediately";
}

exports.test = function(device, teststring, resultstring){
  if(open){
    //commands = Session.get(teststring);
    return composeMessage(commands) == resultstring;
  }
}

exports.warningON = function(device, devicemode){
  if(open){
    //commands = Session.get('session');
    var cancel = commands.canceled;
    //device.setMode(devicemode);
    if(cancel){
      device.send("TV Alert\nThe preceding message, shown again below, was a False Alarm", composeMessage(commands));
    }else if (devicemode){
      device.send("TV Alert", composeMessage(commands));
      if(device.getMode() == "A Drill"){
        return "Test Sent";
      }else if(device.getMode() == "Not a Drill"){
        return "Real Alert Sent";
      }else{
        return "Unknown Mode";
      }
    }
  }
}

exports.warningOFF = function(device){
  if(open){
    device.setMode("");
    device.setDisaster("");
    device.setLocations([]);
  }
}

exports.close = function(device){
  this.warningOFF(device);
  open = false;
}


