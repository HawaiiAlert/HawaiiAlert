import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import './main.html';

/*The following will store options, the page will then generate based on them, allowing new options to be added quickly*/
/*
var options = {
  "drill" = {},
  "disaster" = {},
  "locations" = {},
  "alerts" = {},
};
*/
var stage = null;
/*The following stores the user's selections from the interface*/
var selection = {
  "drill": null,
  "disaster": null,
  "locations": [],
  "alerts": []
  };


/////Interface/////
Template.interface.onCreated(function onCreated(){
  stage = "drill";
  selection = {
    "drill": null,
    "disaster": null,
    "locations": [],
    "alerts": []
    };
  BlazeLayout.render('load', {"stage":stage});
});


/////Drill/////
Template.drill.events({
  'click #drill'(event, instance) {
    stage="disaster";
    selection.drill="A Drill";
    BlazeLayout.render('load', {"stage":stage});
  },
  'click #not_drill'(event, instance) {
    stage="disaster";
    selection.drill="Not a Drill";
    BlazeLayout.render('load', {"stage":stage});
  },
});


/////Disaster/////
Template.disaster.events({
  'click #missile'(event, instance) {
    stage="location";
    selection.disaster="Missile";
    BlazeLayout.render('load', {"stage":stage});
  },
  'click #hurricane'(event, instance) {
    stage="location";
    selection.disaster="Hurricane";
    BlazeLayout.render('load', {"stage":stage});
  },
  'click #flooding'(event, instance) {
    stage="location";
    selection.disaster="Flooding";
    BlazeLayout.render('load', {"stage":stage});
  },
  'click #tsunami'(event, instance) {
    stage="location";
    selection.disaster="Tsunami";
    BlazeLayout.render('load', {"stage":stage});
  },
  'click #wildfire'(event, instance) {
    stage="location";
    selection.disaster="Wildfire";
    BlazeLayout.render('load', {"stage":stage});
  },
  'click #earthquake'(event, instance) {
    stage="location";
    selection.disaster="Earthquake";
    BlazeLayout.render('load', {"stage":stage});
  },
  'click #terrorist'(event, instance) {
    stage="location";
    selection.disaster="Terrorist Attack";
    BlazeLayout.render('load', {"stage":stage});
  },
  'click #meteor'(event, instance) {
    stage="location";
    selection.disaster="Meteor";
    BlazeLayout.render('load', {"stage":stage});
  },
  'click #back'(event, instance) {
    stage="drill";
    selection.disaster=null;
    BlazeLayout.render('load', {"stage":stage});
  },
});


/////Location/////
Template.location.events({
  'click #submit'(event, instance) {
    stage="alerts";
    if (oahu.checked) {
      selection.locations.push("Oahu");
    }
    if (maui.checked) {
      selection.locations.push("Maui");
    }
    if (hawaii.checked) {
      selection.locations.push("Hawaii Island");
    }
    if (kauai.checked) {
      selection.locations.push("Kauai");
    }
    BlazeLayout.render('load', {"stage":stage});
  },
  'click #back'(event, instance) {
    stage="disaster";
    selection.locations=[];
    BlazeLayout.render('load', {"stage":stage});
  },
});


/////Alerts/////
Template.alerts.events({
  'click #submit'(event, instance) {
    stage="summary";
    if (text.checked) {
      selection.alerts.push("Text Alert");
    }
    if (tv.checked) {
      selection.alerts.push("TV Alert");
    }
    if (radio.checked) {
      selection.alerts.push("Radio Alert");
    }
    if (siren.checked) {
      selection.alerts.push("Warning Sirens");
    }
    BlazeLayout.render('load', {"stage":stage});
  },
  'click #back'(event, instance) {
    stage="location";
    selection.alerts=[];
    BlazeLayout.render('load', {"stage":stage});
  },
});


/////Summary/////
Template.summary.helpers({
  drill(){
    return selection.drill;
  },
  disaster(){
    return selection.disaster;
  },
  locations(){
    return selection.locations;
  },
  alerts(){
    return selection.alerts;
  }
});

Template.summary.events({
  'click #confirm'(event, instance) {
    stage="confirmation";
    BlazeLayout.render('load', {"stage":stage});
  },
  'click #cancel'(event, instance) {
    stage="drill";
    selection.drill=null;
    selection.disaster=null;
    selection.locations=[];
    selection.alerts=[];
    BlazeLayout.render('load', {"stage":stage});
  },
});


/////Confirmation/////
Template.confirmation.helpers({
  drill(){
    return selection.drill;
  }
});

Template.confirmation.events({
  'submit form': function(event){
    event.preventDefault();
    if(event.target.password.value=="password"&&event.target.drill.value==selection.drill){
      console.log(selection);
    }
  },
  'click #cancel'(event, instance) {
    stage="drill";
    selection.drill=null;
    selection.disaster=null;
    selection.locations=[];
    selection.alerts=[];
    BlazeLayout.render('load', {"stage":stage});
  },
});
