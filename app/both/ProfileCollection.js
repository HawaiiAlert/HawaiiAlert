import SimpleSchema from 'simpl-schema';
import BaseCollection from '/both/BaseCollection';
import { check } from 'meteor/check';
import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Tracker } from 'meteor/tracker';

class ProfileCollection extends BaseCollection {

  constructor() {
    super('Profile', new SimpleSchema({
      username: { type: String },
      password: { type: String },
    }, { tracker: Tracker }));
  }

  define({
           username, password,
         }) {
    // make sure required fields are OK.
    const checkPattern = {
      username: String, password: String,
    };
    check({ username, password }, checkPattern);

    if (this.find({ username }).count() > 0) {
      throw new Meteor.Error(`${username} is previously defined in another Profile`);
    }

    return this._collection.insert({
      username, password,
    });
  }

  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const username = doc.username;
    const password = doc.password;
    return { username, password };
  }
}

export const Profiles = new ProfileCollection();
