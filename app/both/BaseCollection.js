import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { _ } from 'meteor/underscore';

class BaseCollection {

  constructor(type, schema) {
    this._type = type;
    this._collectionName = `${type}Collection`;
    this._collection = new Mongo.Collection(`${type}Collection`);
    this._schema = schema;
    this._collection.attachSchema(this._schema);
  }

  count() {
    return this._collection.find().count();
  }

  getSchema() {
    return this._schema;
  }

  publish() {
    if (Meteor.isServer) {
      Meteor.publish(this._collectionName, () => this._collection.find());
    }
  }

  subscribe() {
    if (Meteor.isClient) {
      Meteor.subscribe(this._collectionName);
    }
  }

  findDoc(name) {
    const doc = (
            this._collection.findOne(name) ||
            this._collection.findOne({ name }) ||
            this._collection.findOne({ username: name }) ||
            this._collection.findOne({ _id: name }));
    if (!doc) {
      throw new Meteor.Error(`${name} is not a defined ${this._type}`);
    }
    return doc;
  }

  find(selector, options) {
    const theSelector = (typeof selector === 'undefined') ? {} : selector;
    return this._collection.find(theSelector, options);
  }

  findAll() {
    return this._collection.find().fetch();
  }

  update(selector, modifier) {
    const theSelector = (typeof selector === 'undefined') ? {} : selector;
    this._collection.update(theSelector, modifier);
    return true;
  }

  isDefined(name) {
    return (
    !!this._collection.findOne(name) ||
    !!this._collection.findOne({ name }) ||
    !!this._collection.findOne({ username: name }) ||
    !!this._collection.findOne({ _id: name }));
  }

  removeIt(name) {
    const doc = this.findDoc(name);
    check(doc, Object);
    this._collection.remove(doc._id);
  }

  removeAll() {
    this._collection.remove({});
  }

  getType() {
    return this._type;
  }

  getPublicationName() {
    return this._collectionName;
  }

  toString() {
    return this._collection.find().fetch();
  }

  assertDefined(name) {
    if (!this.isDefined(name)) {
      throw new Meteor.Error(`${name} is not a valid instance of ${this._type}.`);
    }
  }

  assertAllDefined(names) {
    if (!_.isArray(names)) {
      throw new Meteor.Error(`${names} is not an array.`);
    }
    names.map(name => this.assertDefined(name));
  }

  checkIntegrity() {  // eslint-disable-line class-methods-use-this
    return ['There is no integrity checker defined for this collection.'];
  }

  dumpAll() {
    const dumpObject = { name: this._collectionName, contents: this.find().map(docID => this.dumpOne(docID)) };
    // sort the contents array by slug (if present)
    if (dumpObject.contents[0] && dumpObject.contents[0].slug) {
      dumpObject.contents = _.sortBy(dumpObject.contents, obj => obj.slug);
    }
    return dumpObject;
  }

  dumpOne(docID) { // eslint-disable-line
    throw new Meteor.Error(`Default dumpOne method invoked by collection ${this._collectionName}`);
  }

  restoreOne(dumpObject) {
    if (typeof this.define === 'function') {
      return this.define(dumpObject);
    }
    return null;
  }

  restoreAll(dumpObjects) {
    _.each(dumpObjects, dumpObject => this.restoreOne(dumpObject));
  }
}

export default BaseCollection;
