import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Reports =  new Mongo.Collection('reports');
Reports.schema = new SimpleSchema({
    title: {type: String},
    description: {type: String}
})

export default Reports;