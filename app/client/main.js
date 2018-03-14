import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import './main.html';

var stage = "drill";
var selection = {
  "drill": null,
  "disaster": null,
  "location": null,
  "alerts": {
    "text": false
    }
  };

Template.interface.onCreated(function onCreated(){
  BlazeLayout.render('load', {"stage":stage});
});

Template.drill.events({
  'click #drill'(event, instance) {
    stage="disaster";
    selection.drill="Drill";
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
