import { Session } from 'meteor/session';
import { Siren } from './Siren.js';

var open = false;
var commands;
var device;

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
    return "The Siren ring loudly for " + commands.disaster + " for the following area(s):\n" + commands.locations ;
}

exports.test = function(device, teststring, resultstring){
    if(open){
        commands = Session.get(teststring);
        return composeMessage(commands) == resultstring;
    }
}

exports.warningON = function(device, devicemode){
    if(open){
        commands = Session.get('session');
        var cancel = commands.canceled;
        device.setMode(devicemode);
        if(cancel){
            device.send("Siren ring in a short and quick pattern, signalling a False Alarm");
        }else if (devicemode){
            device.send("Siren Alert", composeMessage(commands));
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
