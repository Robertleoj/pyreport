import Folders from "../../collections/Folders";
import {mongoid, mongostr} from '/imports/utils';

Meteor.methods({
    'add_folder'(name, parentId=null, childFolderIds=[], childFileIds=[]){
        new_folder = {
            name: name,
            childFolderIds: childFolderIds,
            childFileIds: childFileIds,
        };
        Folders.schema.validate(new_folder);
        return Folders.insert(new_folder);
    },
    'delete_folder'(folderId){
        return Folders.remove(mongoid(folderId));
    },
})