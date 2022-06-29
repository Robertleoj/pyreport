import Reports from '../../collections/Reports'
import Folders from '/imports/api/collections/Folders';

Meteor.methods({
    // 'update-report'(){

    // },
    'add_report'(report_code, title, description, parentFolderId = null){
        if(parentFolderId === null) {
            parentFolderId = Folders.findOne({name: "Root"})._id;
        }
        new_report = {
            title: title,
            description: description,
            report_code, report_code,
            parent_folder_id: parentFolderId
        };

        Reports.schema.validate(new_report);
        return Reports.insert(new_report);
    },
    'delete_report'(reportId){
        Reports.remove(reportId);
    },
    'update_report'(
        reportId,
        reportCode,
        title,
        description,
        reportFolderId
    ){
        return Reports.update(
            {_id:reportId},
            { 
                $set: {
                    report_code: reportCode,
                    title: title,
                    description: description,
                    parent_folder_id : reportFolderId
                }
            }
        );
    }
});