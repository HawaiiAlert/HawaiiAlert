import { Meteor } from 'meteor/meteor';
import { Profiles } from '/both/ProfileCollection';
import { Texts } from '/both/TextCollection';
import { Emails } from '/both/EmailCollection';
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

var sender;

Meteor.startup(() => {
  /** Only initialize database if it's empty. */
  const restoreJSON = JSON.parse(Assets.getText('initial-collection-data.json'));
  const restoreJSONpriv = JSON.parse(Assets.getText('initial-contact-collection.json'));
  process.env.MAIL_URL = restoreJSON.mail_url;
  sender = restoreJSON.sender_email;
  if (Profiles.count() == 0) {
    restoreCollection(Profiles, restoreJSON);
  }
  if (Emails.count() == 0) {
    restoreCollection(Emails, restoreJSONpriv);
  }
  if (Texts.count() == 0) {
    restoreCollection(Texts, restoreJSONpriv);
  }
});

Meteor.methods({
  sendEmail(to, subject, text) {
    Email.send({ to, sender, subject, text });
  }
});
