import { Meteor } from 'meteor/meteor';
import { Profiles } from '/both/ProfileCollection';
import { _ } from 'meteor/underscore';
import '/both/BaseCollection';
import '/both/ProfileCollection';
import '/both/EventCollection';

function getDefinitions(restoreJSON, collection) {
  return _.find(restoreJSON.collections, obj => obj.name === collection).contents;
}

function restoreCollection(collection, restoreJSON) {
  const definitions = getDefinitions(restoreJSON, collection._collectionName);
  _.each(definitions, definition => collection.define(definition));
}


Meteor.startup(() => {
    process.env.MAIL_URL = "smtp://ics414hawaiialert@gmail.com:testemail@smtp.gmail.com:465"
  /** Only initialize database if it's empty. */
  if (Profiles.count() == 0) {
    const restoreJSON = JSON.parse(Assets.getText('initial-collection-data.json'));
    restoreCollection(Profiles, restoreJSON);
  }
});

Meteor.methods({
    sendEmail(to, from, subject, text) {
        check([to, from, subject, text], [String]);
        this.unblock();

        Email.send({ to, from, subject, text });
    }
});
