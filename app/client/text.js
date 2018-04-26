import { _ } from 'meteor/underscore';

class Text {
  constructor(){
    this.message = "";
  }
  setMessage(message){
    this.message = message;
  }
  send(addresses, drill){
    var providers = [
        "@messaging.sprintpcs.com",
        "@tmomail.net",
        "@txt.att.net",
        "@vtext.com"
      ];
    var mess = this.message;
    var subj = "This is " + drill;
    _.each(addresses, function(to){
      _.each(providers, function(provider){
        var addr = to.text + provider;
        Meteor.call('sendEmail', addr, subj, mess);
      });
    });
    console.log("Text Alert");
  }
}
export {Text}
