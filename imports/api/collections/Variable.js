import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';


const Variables = new Mongo.Collection('variables');

export default Variables;
