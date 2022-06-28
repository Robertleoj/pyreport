import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Folders = new Mongo.Collection('folders', {idGeneration: "MONGO"});
Folders.schema = new SimpleSchema({
    parentFolderId: {type: String, optional: true},
    name: {type: String}
});

export default Folders;