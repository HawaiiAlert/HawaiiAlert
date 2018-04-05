import { Session } from 'meteor/session';
import TextDevice from './text.js';
import './main.js';

var open = false;
var commands;
var device;

exports.open = function(device){
  open = true;
}

exports.configure = function(device, commandstring){
  if(open){
    commands = Session.get(commandstring);
    device.setMessage(composeMessage(commands));
  }
}

function composeMessage(commands){
  return "There is a " + commands.disaster + " alert for the following area(s):\n" + commands.locations + "\nPlease seek shelter immediately";
}

exports.test = function(device, teststring, resultstring){
  if(open){
    commands = Session.get(teststring);
    return composeMessage(commands) == resultstring;
  }
}

exports.warningON = function(device, devicemode){
  if(open){
    var cancel = Session.get('session').canceled;
    if(cancel){
      device.send("The preceding message, shown again below, was a False Alarm");
      device.setMessage("");
    }else{
      device.send(devicemode);
    }
  }
}

exports.warningOFF = function(device){
  if(open){
    device.setMessage("");
  }
}

exports.close = function(device){
  open = false;
}
