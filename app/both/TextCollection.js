import SimpleSchema from 'simpl-schema';
import BaseCollection from '/both/BaseCollection';
import { check } from 'meteor/check';
import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Tracker } from 'meteor/tracker';

class TextCollection extends BaseCollection {

  constructor() {
    super('Text', new SimpleSchema({
      text: { type: String },
    }, { tracker: Tracker }));
  }

  define({ text, }) {
    // make sure required fields are OK.
    const checkPattern = { text: String };
    check({ text }, checkPattern);

    if (this.find({ text }).count() > 0) {
      throw new Meteor.Error(`${text} is previously defined`);
    } else {
      return this._collection.insert({ text });
    }
  }

  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const text = doc.text;
    return { text };
  }
}

export const Texts = new TextCollection();
