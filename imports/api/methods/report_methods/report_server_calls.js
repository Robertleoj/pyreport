import urls from './report_server_config';
import {postData} from '../../utils/requests';
import Reports from '../../collections/Reports';

Meteor.methods({
    'run_report': async function(reportId) {
        console.log("bruh 2");

        var reportObj = Reports.findOne(
            reportId
        );

        if(typeof reportObj === 'undefined'){
            throw Error('Report does not exists');
        }

        var res = await postData(urls.run_report, {report_code: reportObj.report_code});
        return res;
    }
});