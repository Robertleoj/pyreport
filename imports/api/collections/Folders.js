import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Folders = new Mongo.Collection('folders', {idGeneration: "MONGO"});
Folders.schema = new SimpleSchema({
    parentId: {type: String, optional: true},
    name: {type: String},
    childFolderIds: [{type: Number}],
    childFileIds: [{type: Number}],
});

export default Folders;