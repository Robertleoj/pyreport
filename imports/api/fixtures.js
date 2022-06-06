import { Meteor } from 'meteor/meteor';
import Reports from './collections/Reports.js';

Meteor.startup(() => {
    if(Reports.find().count() === 0){
        const reportdata = [
            {
                title: "Diccreport",
                description: "All about diccs"
            }
        ];
        reportdata.forEach(rep => {
            Reports.insert(rep);
        });
    };
});
