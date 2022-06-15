import { Meteor } from 'meteor/meteor';
import Folders from './collections/Folders.js';
import Reports from './collections/Reports.js';

Meteor.startup(() => {
    if(Reports.find().count() === 0){
        const reportdata = [
            {
                title: "Vaccine",
                description: "Test vaccine report"
            }
        ];
        reportdata.forEach(rep => {
            Reports.insert(rep);
        });
    };
    if(Folders.find().count() === 0){
        const folderData =
            {
                name: 'Root',
                parentId: null,
            };
        Folders.insert(folderData);
    } else {
        console.log("FAILURE:", Folders.find().count());
    }
});
