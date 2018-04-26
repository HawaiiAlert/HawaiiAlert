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
      admin: { type: Boolean },
      password: { type: String },
    }, { tracker: Tracker }));
  }

  define({ username, admin, password, }) {
    // make sure required fields are OK.
    const checkPattern = {
      username: String, admin: Boolean, password: String,
    };
    check({ username, admin, password }, checkPattern);
    var md5 = require('md5');
    const hashPass = md5(password);
    password = hashPass;

    if (this.find({ username }).count() > 0) {
      throw new Meteor.Error(`${username} is previously defined in another Profile`);
    } else {
      return this._collection.insert({ username, admin, password, });
    }
  }

  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const username = doc.username;
    const admin = doc.admin;
    const password = doc.password;
    return { username, admin, password };
  }
}

export const Profiles = new ProfileCollection();
