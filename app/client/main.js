

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Session } from 'meteor/session';
import './main.html';
import {Radio} from './Radio.js';
import {Radio_driver} from './Radio_driver.js';


/*The following will store options, the page will then generate based on them, allowing new options to be added quickly*/
/*
var options = {
  "drill" = {},
  "disaster" = {},
  "locations" = {},
  "alerts" = {},
};
*/
var session;
var driver;
var device;

function loadDriver(file_name, device){
  driver = require(file_name);
  driver.open(device);
  device = driver.configure(device, 'session');
  device = driver.warningON(device, Session.get('session').drill);
  device = driver.warningOFF(device);
  driver.close(device);
}



/////Interface/////
Template.interface.onCreated(function onCreated(){
  session = Session.get('session');
  import TextDevice from './text.js';
  var textdev = new TextDevice();
  if(!session){
    session = {
      "stage": "drill",
      "canceled": false,
      "drill": null,
      "disaster": null,
      "locations": [],
      "alerts": [],
      "devices": {
        "text": textdev,
      },
    };
    Session.setPersistent('session', session);
  }
  BlazeLayout.render('load', {"stage":Session.get('session').stage});
});


/////Drill/////
Template.drill.events({
  'click #drill'(event, instance) {
    session = Session.get('session');
    session.stage = "disaster";
    session.drill = "A Drill";
    session.canceled = false;
    Session.update('session', session);
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  },
  'click #not_drill'(event, instance) {
    session = Session.get('session');
    session.stage = "disaster";
    session.drill = "Not a Drill";
    session.canceled = false;
    Session.update('session', session);
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  },
});

Template.drill.helpers({
  canceled_last() {
    if (Session.get('session').canceled){
      return "Prior Alert canceled";
    }
  },
});


/////Disaster/////
Template.disaster.events({
  'click #missile'(event, instance) {
    session = Session.get('session');
    session.stage = "location";
    session.disaster = "Missile";
    Session.update('session', session);
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  },
  'click #hurricane'(event, instance) {
    session = Session.get('session');
    session.stage = "location";
    session.disaster = "Hurricane";
    Session.update('session', session);
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  },
  'click #flooding'(event, instance) {
    session = Session.get('session');
    session.stage = "location";
    session.disaster = "Flooding";
    Session.update('session', session);
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  },
  'click #tsunami'(event, instance) {
    session = Session.get('session');
    session.stage = "location";
    session.disaster = "Tsunami";
    Session.update('session', session);
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  },
  'click #wildfire'(event, instance) {
    session = Session.get('session');
    session.stage = "location";
    session.disaster = "Wildfire";
    Session.update('session', session);
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  },
  'click #earthquake'(event, instance) {
    session = Session.get('session');
    session.stage = "location";
    session.disaster = "Earthquake";
    Session.update('session', session);
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  },
  'click #terrorist'(event, instance) {
    session = Session.get('session');
    session.stage = "location";
    session.disaster = "Terrorist Attack";
    Session.update('session', session);
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  },
  'click #meteor'(event, instance) {
    session = Session.get('session');
    session.stage = "location";
    session.disaster = "Meteor";
    Session.update('session', session);
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  },
  'click #back'(event, instance) {
    session = Session.get('session');
    session.stage = "drill";
    session.drill = null;
    session.disaster = null;
    Session.update('session', session);
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  },
});


/////Location/////
Template.location.events({
  'click #submit'(event, instance) {
    session = Session.get('session');
    session.stage = "alerts";
    if (oahu.checked) {
      session.locations.push("Oahu");
    }
    if (maui.checked) {
      session.locations.push("Maui");
    }
    if (hawaii.checked) {
      session.locations.push("Hawaii Island");
    }
    if (kauai.checked) {
      session.locations.push("Kauai");
    }
    if (session.locations.length <= 0) {
      session.stage = "location";
    }
    Session.update('session', session);
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  },
  'click #back'(event, instance) {
    session = Session.get('session');
    session.stage = "disaster";
    session.disaster = null;
    session.locations = [];
    Session.update('session', session);
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  },
});


/////Alerts/////
Template.alerts.events({
  'click #submit'(event, instance) {
    session = Session.get('session');
    session.stage = "summary";
    if (text.checked) {
      session.alerts.push("Text Alert");
    }
    if (tv.checked) {
      session.alerts.push("TV Alert");
    }
    if (radio.checked) {
      session.alerts.push("Radio Alert");
    }
    if (siren.checked) {
      session.alerts.push("Warning Sirens");
    }
    if (session.alerts.length <= 0) {
      session.stage = "alerts";
    }
    Session.update('session', session);
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  },
  'click #back'(event, instance) {
    session = Session.get('session');
    session.stage = "location";
    session.locations = []
    session.alerts = [];
    Session.update('session', session);
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  },
});


/////Summary/////
Template.summary.helpers({
  drill(){
    return Session.get('session').drill;
  },
  disaster(){
    return Session.get('session').disaster;
  },
  locations(){
    return Session.get('session').locations;
  },
  alerts(){
    return Session.get('session').alerts;
  }
});

Template.summary.events({
  'click #confirm'(event, instance) {
    session = Session.get('session');
    session.stage = "confirmation";
    Session.update('session', session);
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  },
  'click #cancel'(event, instance) {
    Session.update('session', {
      "stage": "drill",
      "canceled": true,
      "drill": null,
      "disaster": null,
      "locations": [],
      "alerts": [],
      "devices": Session.get('session').devices,
    });
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  },
});


/////Confirmation/////
Template.confirmation.helpers({
  drill(){
    return Session.get('session').drill;
  }
});

Template.confirmation.events({
  'submit form': function(event){
    event.preventDefault();
    session = Session.get('session');
    if(event.target.password.value == "password" && event.target.drill.value == session.drill){
      if(session.alerts.includes('Text Alert')){
        loadDriver('./text_driver.js', session.devices.text);
      }
      //console.log(session);
      session.stage = "false_alarm";
      Session.update('session', session);
      BlazeLayout.render('load', {"stage":Session.get('session').stage});
    }
  },
  'click #cancel'(event, instance) {
    Session.update('session', {
      "stage": "drill",
      "canceled": true,
      "drill": null,
      "disaster": null,
      "locations": [],
      "alerts": [],
      "devices": Session.get('session').devices,
    });
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  },
});


/////False Alarm/////
Template.false_alarm.helpers({
	radio(){
		if ( Session.get('session').alerts.includes("Radio Alert") &&  Session.get('session').drill === "A Drill") {
			var r = new Radio(Session.get('session').drill, Session.get('session').disaster);
			var rD = new Radio_driver(r);
			return rD.test(r);
		} 
		else if ( Session.get('session').alerts.includes("Radio Alert") &&  Session.get('session').drill === "Not a Drill") {
			var r = new Radio(Session.get('session').drill, Session.get('session').disaster);
			var rD = new Radio_driver(r);
			return rD.use(r);
		}
		else {
			return "----------something wrong with device or driver--------------";
		}
	}
});


Template.false_alarm.events({
  'click #return'(event, instance) {
    Session.update('session', {
      "stage": "drill",
      "canceled": false,
      "drill": null,
      "disaster": null,
      "locations": [],
      "alerts": [],
      "devices": Session.get('session').devices,
    });
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  },
  'click #false_alarm'(event, instance) {
    session = Session.get('session');
    session.canceled = true;
    Session.update('session', session);
    if(session.alerts.includes('Text Alert')){
      loadDriver('./text_driver.js', session.devices.text);
    }
    Session.update('session', {
      "stage": "drill",
      "canceled": true,
      "drill": null,
      "disaster": null,
      "locations": [],
      "alerts": [],
      "devices": Session.get('session').devices,
    });
    //console.log("False Alarm");
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  },
});
