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
  /** Only initialize database if it's empty. */
  if (Profiles.count() == 0) {
    const restoreJSON = JSON.parse(Assets.getText('initial-collection-data.json'));
    restoreCollection(Profiles, restoreJSON);
  }
});
