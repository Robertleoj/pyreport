import {Meteor} from 'meteor/meteor';
import Folders from '../collections/Folders.js';


Meteor.publish('folders', function () {
    return Folders.find({});
})