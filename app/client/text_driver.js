import { Session } from 'meteor/session';
import { Text } from './text.js';
import { Texts } from '/both/TextCollection';

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
    var texts = Texts.findAll();
    if(cancel){
      device.send(texts, "The preceding message, shown again below, was a False Alarm\nThis is " + Session.get('session').drill);
    }else if (devicemode){
      device.send(texts, devicemode);
      if(devicemode == "A Drill"){
        return "Test Sent";
      }else if(devicemode == "Not a Drill"){
        return "Real Alert Sent";
      }else{
        return "Unknown Mode";
      }
    }
  }
}

exports.warningOFF = function(device){
  if(open){
    device.setMessage("");
  }
}

exports.close = function(device){
  this.warningOFF(device);
  open = false;
}
