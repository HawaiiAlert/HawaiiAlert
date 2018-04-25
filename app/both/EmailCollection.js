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

    if (this.find({ email }).count() > 0) {
      throw new Meteor.Error(`${email} is previously defined`);
    } else {
      return this._collection.insert({ email });
    }
  }

  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const email = doc.email;
    return { email };
  }
}

export const Emails = new EmailCollection();
