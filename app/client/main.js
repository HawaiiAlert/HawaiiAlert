import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Session } from 'meteor/session';
import { _ } from 'meteor/underscore';
import { Profiles } from '/both/ProfileCollection';
import { Events } from '/both/EventCollection';
import './main.html';
import { Text } from './text.js';
import { Radio } from './Radio.js';
import { Siren } from './Siren.js';
import { Email } from './Email.js';


var session;
var driver;
var device;
var devices = {
    "text": new Text(),
    "radio": new Radio(),
    "siren": new Siren(),
    "email": new Email(),
  }
var can_alert = false;
var logged_in = false;


function loadDriver(file_name, device){
  driver = require(file_name);
  driver.open(device);
  driver.configure(device, 'session');
  var ret = driver.warningON(device, Session.get('session').drill);
  driver.warningOFF(device);
  driver.close(device);
  return ret;
}

function changecolor(session) {
  if(session.drill == "A Drill"){
      document.getElementById("main").style.borderColor ="#FFD700";
  }
  if(session.drill == "Not a Drill"){
      document.getElementById("main").style.borderColor="#0E6EB8";
  }
  if(session.drill == null) {
      document.getElementById("main").style.borderColor="black";
  }
}


/////Interface/////
Template.interface.onCreated(function onCreated(){
  session = Session.get('session');
  if(!session){
    session = {
      "stage": "login",
      "canceled": false,
      "drill": null,
      "disaster": null,
      "locations": [],
      "alerts": [],
      "user": null,
    };
    Session.setPersistent('session', session);
  }
  BlazeLayout.render('load', {"stage":Session.get('session').stage});
});


/////Load/////
Template.load.events({
  'click #alert'(event, instance) {
    session = Session.get('session');
    session.stage = 'drill';
    session.drill = null;
    session.disaster = null;
    session.locations = [];
    session.alerts = [];
    Session.update('session', session);
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  },
  'click #events'(event, instance) {
    session = Session.get('session');
    session.stage = 'event_log';
    Session.update('session', session);
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  },
  'click #add_user'(event, instance) {
    session = Session.get('session');
    session.stage = 'new_account';
    Session.update('session', session);
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  },
  'click #remove_user'(event, instance) {
    session = Session.get('session');
    session.stage = 'remove_account';
    Session.update('session', session);
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  },
  'click #logout'(event, instance) {
    session = Session.get('session');
    session.stage = 'login';
    session.user = null;
    Session.update('session', session);
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  },
});

Template.load.helpers({
  isUser(){
    return Session.get('session').user;
  },
});


/////Log in/////
Template.login.onCreated(function onCreated(){
  session = Session.get('session');
  if(_.filter(Profiles.findAll(), profile => profile.username == session.user).length > 0){
    session.stage = 'drill';
    Session.update('session', session);
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  }
});

Template.login.events({
  'submit form': function(event){
    event.preventDefault();
    session = Session.get('session');
    var password = _.filter(Profiles.findAll(), profile => profile.username == event.target.username.value)[0].password;
    if(event.target.password.value == password){
      logged_in = true;
      session.user = event.target.username.value;
      session.stage = 'drill';
      Session.update('session', session);
      BlazeLayout.render('load', {"stage":Session.get('session').stage});
    }else{
      document.getElementById("passerror").style.visibility="visible";
    }
  },
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
  color(){
    changecolor(Session.get('session'));
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

Template.disaster.helpers({
    color(){
        changecolor(Session.get('session'));
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

Template.location.helpers({
    color(){
        changecolor(Session.get('session'));
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
    if(email.checked) {
      session.alerts.push("Email Message")
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

Template.alerts.helpers({
    color(){
        changecolor(Session.get('session'));
    },
});


/////Summary/////
Template.summary.events({
  'click #confirm'(event, instance) {
    session = Session.get('session');
    session.stage = "confirmation";
    Session.update('session', session);
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  },
  'click #cancel'(event, instance) {
    document.getElementById("main").style.borderColor = "black";
    Session.update('session', {
      "stage": "login",
      "canceled": true,
      "drill": null,
      "disaster": null,
      "locations": [],
      "alerts": [],
      "user": session.user,
    });
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  },
});

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
  },
});


/////Confirmation/////
Template.confirmation.events({
  'submit form': function(event){
    event.preventDefault();
    session = Session.get('session');
    var profile = _.filter(Profiles.findAll(), profile => profile.username == event.target.username.value)[0]
    var password = profile.password;
    if(event.target.password.value !== password && event.target.drill.value !== session.drill){
      document.getElementById("passerror").style.visibility="visible"
      document.getElementById("phaseerror").style.visibility="visible"
    }
    if(event.target.password.value !== password && event.target.drill.value == session.drill){
      document.getElementById("passerror").style.visibility="visible"
      document.getElementById("phaseerror").style.visibility="hidden"
    }
    if(event.target.password.value == password && event.target.drill.value !== session.drill){
      document.getElementById("passerror").style.visibility="hidden"
      document.getElementById("phaseerror").style.visibility="visible"
    }
    if(event.target.password.value == password && event.target.drill.value == session.drill && profile.admin  && profile.username != session.user){
      //console.log(session);
      session.stage = "false_alarm";
      Session.update('session', session);
      can_alert = true;
      const username = session.user;
      const message = session.drill + ":\nDisaster: " + session.disaster + "\nLocation: " + session.locations + "\nAlerts: " + session.alerts;
      const type = "authorized by " + profile.username + " sent the message:"
      const time =  new Date().toLocaleString();
      Events.define({ username, message, type, time });
      BlazeLayout.render('load', {"stage":Session.get('session').stage});
    }
  },
  'click #cancel'(event, instance) {
      Session.update('session', {
      "stage": "login",
      "canceled": true,
      "drill": null,
      "disaster": null,
      "locations": [],
      "alerts": [],
      "user": session.user,
    });
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  },
});

Template.confirmation.helpers({
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
  },
  color(){
    changecolor(Session.get('session'));
  },
});


/////False Alarm/////
Template.false_alarm.events({
  'click #return'(event, instance) {
    event.preventDefault();
    can_alert = false;
    Session.update('session', {
      "stage": "login",
      "canceled": false,
      "drill": null,
      "disaster": null,
      "locations": [],
      "alerts": [],
      "user": session.user,
    });
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  },
  'click #false_alarm'(event, instance) {
    event.preventDefault();
    session = Session.get('session');
    session.canceled = true;
    Session.update('session', session);
    if(session.alerts.includes('Text Alert')){
      loadDriver('./text_driver.js', devices.text);
    }
    if(session.alerts.includes('Radio Alert')){
      loadDriver('./Radio_driver.js', devices.radio);
    }
    if(session.alerts.includes('Warning Sirens')){
      loadDriver('./Siren_driver.js', devices.siren);
    }
    if(session.alerts.includes('Email Message')){
      loadDriver('./Email_driver.js',devices.email);
    }
    can_alert = false;
    const username = session.user;
    const message = "False Alarm:\nDisaster: " + session.disaster + "\nLocation: " + session.locations + "\nAlerts: " + session.alerts;
    const type = "sent the message:"
    const time = new Date().toLocaleString();
    Events.define({ username, message, type, time });
    Session.update('session', {
      "stage": "login",
      "canceled": false,
      "drill": null,
      "disaster": null,
      "locations": [],
      "alerts": [],
      "user": session.user,
      });
    BlazeLayout.render('load', {"stage":Session.get('session').stage});
  },
});

Template.false_alarm.helpers({
  radio(){
    if(can_alert){
      if(session.alerts.includes('Radio Alert')){
        return loadDriver('./Radio_driver.js', devices.radio);
      }else{
        return "Device not selected";
      }
    }
  },
  text(){
    if(can_alert){
      if(session.alerts.includes('Text Alert')){
        return loadDriver('./text_driver.js', devices.text);
      }else{
        return "Device not selected";
      }
    }
  },
  siren(){
    if(can_alert){
      if(session.alerts.includes("Warning Sirens")){
        return loadDriver("./Siren_driver.js", devices.siren);
      }else {
        return "Device not selected";
      }
    }
  },
  email(){
    if(can_alert){
        if(session.alerts.includes("Email Message")){
            Meteor.call(
                'sendEmail',
                'hawaii alert <ics414hawaiialert@gmail.com>',
                'ics414hawaiialert@gmail.com',
                'Hello from Meteor!',
                'This is a test of Email.send.'
            );
            return loadDriver("./Email_driver.js", devices.email);
        }else {
            return "Device not selected";
        }
    }
  },
  color(){
      changecolor(Session.get('session'));
  },
});


/////New Account/////
Template.new_account.events({
  'submit form'(event, instance) {
    event.preventDefault();
    session = Session.get('session');
    var profile = _.filter(Profiles.findAll(), profile => profile.username == event.target.username.value)[0]
    var password = profile.password;
    if(event.target.password.value !== password){
      document.getElementById("passerror").style.visibility="visible"
    }
    if(event.target.password.value == password && profile.admin && profile.username == session.user){
      var username = event.target.new_username.value;
      const admin = event.target.new_admin.checked;
      const password = event.target.new_password.value;
      Profiles.define({ username, admin, password, });
      username = session.user;
      const message = event.target.new_username.value;
      const type = "added the new user:";
      const time = new Date().toLocaleString();
      Events.define({ username, message, type, time, });
      BlazeLayout.render('load', {"stage":Session.get('session').stage});
    }
  },
});


/////Remove Account/////
Template.remove_account.events({
  'submit form'(event, instance) {
    event.preventDefault();
    session = Session.get('session');
    var profile = _.filter(Profiles.findAll(), profile => profile.username == event.target.username.value)[0]
    var password = profile.password;
    if(event.target.password.value !== password){
      document.getElementById("passerror").style.visibility="visible"
    }
    if(event.target.password.value == password && profile.admin && profile.username == session.user){
      Profiles.removeIt({ username: event.target.remove_username.value, });
      const username = session.user;
      const message = event.target.remove_username.value;
      const type = "removed the user:";
      const time = new Date().toLocaleString();
      Events.define({ username, message, type, time });
      BlazeLayout.render('load', {"stage":Session.get('session').stage});
    }
  },
});


/////Event Log/////
Template.event_log.helpers({
  events(){
    return Events.findAll();
  },
})
