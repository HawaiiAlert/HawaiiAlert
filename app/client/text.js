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
        "@message.alltel.com",
        "@messaging.sprintpcs.com",
        "@mobile.celloneusa.com",
        "@msg.telus.com",
        "@paging.acswireless.com",
        "@pcs.rogers.com",
        "@qwestmp.com",
        "@sms.mycricket.com",
        "@tmomail.net",
        "@txt.att.net"
      ];
    var mess = this.message;
    var subj = "This is " + drill;
    var from = '<ics414hawaiialert@gmail.com>';
    _.each(addresses, function(to){
      _.each(providers, function(provider){
        var addr = to.text + provider;
        Meteor.call('sendEmail', addr, from, subj, mess);
      });
    });
    console.log("Text Alert");
  }
}
export {Text}
