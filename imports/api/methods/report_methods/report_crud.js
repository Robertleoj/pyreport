import Reports from '../../collections/Reports'
import {mongoid, mongostr} from '/imports/utils';

Meteor.methods({
    // 'update-report'(){

    // },
    'add_report'(report_code, title, description){
        new_report = {
            title: title,
            description: description,
            report_code, report_code
        };
        Reports.schema.validate(new_report);
        return Reports.insert(new_report);
    },
    'delete_report'(reportId){
        Reports.remove(mongoid(reportId));
    },
    'update_report'(
        reportId,
        reportCode,
        title,
        description
    ){
        return Reports.update(
            {_id: mongoid(reportId)},
            {
                report_code: reportCode,
                title: title,
                description: description
            }
        );
    }
});