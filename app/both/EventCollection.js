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
      type: { type: String },
      time: { type: String },
    }, { tracker: Tracker }));
  }

  define({ username, message, type, time, }) {
    // make sure required fields are OK.
    const checkPattern = {
      username: String, message: String, type: String, time: String,
    };
    check({ username, message, type, time }, checkPattern);

    return this._collection.insert({ username, message, type, time, });
  }

  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const username = doc.username;
    const message = doc.message;
    const type = doc.type;
    const time = doc.time;
    return { username, message, type, time };
  }
}

export const Events = new EventCollection();
