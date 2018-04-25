import SimpleSchema from 'simpl-schema';
import BaseCollection from '/both/BaseCollection';
import { check } from 'meteor/check';
import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Tracker } from 'meteor/tracker';

class EmailCollection extends BaseCollection {

  constructor() {
    super('Email', new SimpleSchema({
      email: { type: String },
    }, { tracker: Tracker }));
  }

  define({ email, }) {
    // make sure required fields are OK.
    const checkPattern = { email: String };
    check({ email }, checkPattern);

    return this._collection.insert({ email });
  }

  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const email = doc.email;
    return { username };
  }
}

export const Emails = new EmailCollection();
