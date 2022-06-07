import Reports from '../../collections/Reports'

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
    }
});