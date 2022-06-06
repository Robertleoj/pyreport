import {Meteor} from 'meteor/meteor';
import Reports from '../collections/Reports.js';


Meteor.publish('reports', function (){
    return Reports.find();
});