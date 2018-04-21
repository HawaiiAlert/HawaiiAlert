import SimpleSchema from 'simpl-schema';
import BaseCollection from '/both/BaseCollection';
import { check } from 'meteor/check';
import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Tracker } from 'meteor/tracker';

class EventCollection extends BaseCollection {

  constructor() {
    super('Event', new SimpleSchema({
      username: { type: String },
      message: { type: String },
      time: { type: String },
    }, { tracker: Tracker }));
  }

  define({
           username, message, time,
         }) {
    // make sure required fields are OK.
    const checkPattern = {
      username: String, message: String, time: String,
    };
    check({ username, message, time }, checkPattern);

    return this._collection.insert({
      username, message, time,
    });
  }

  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const username = doc.username;
    const message = doc.message;
    const time = doc.time;
    return { username, message, time };
  }
}

export const Events = new EventCollection();
