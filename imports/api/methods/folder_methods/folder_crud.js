import Folders from "../../collections/Folders";
import {mongoid, mongostr} from '/imports/utils';


Meteor.methods({
    'add_folder'(name, parentId=null){
        // Make sure parent exists in folders
        if(!Folders.findOne(mongoid(parentId))){
            throw new Meteor.Error('Must have parent folder');
        }

        new_folder = {
            name: name,
            parentFolderId: parentId
        };

        Folders.schema.validate(new_folder);
        return Folders.insert(new_folder);
    },
    'delete_folder'(folderId){
        return Folders.remove(mongoid(folderId));
    },
})