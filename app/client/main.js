import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import './main.html';

var stage = "drill";
var selection = {
  "drill": null,
  "disaster": null,
  "locations": null,
  "alerts": []
  };

Template.interface.onCreated(function onCreated(){
  BlazeLayout.render('load', {"stage":stage});
});

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

Template.disaster.events({
  'click #missile'(event, instance) {
    stage="location";
    selection.disaster="Missile";
    BlazeLayout.render('load', {"stage":stage});
  },
});

Template.location.events({
  'click #honolulu'(event, instance) {
    stage="alerts";
    selection.location="Honolulu";
    BlazeLayout.render('load', {"stage":stage});
  },
});

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

Template.summary.helpers({
  disaster(){
    return selection.disaster;
  },
  drill(){
    return selection.drill;
  },
  location(){
    return selection.location;
  },
  alerts(){
    return selection.alerts;
  }
})
