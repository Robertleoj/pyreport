import urls from './report_server_config';
import {postData} from '../../utils/requests';

Meteor.methods({
    'run_report': async function(report_code) {
        console.log("bruh 2");
        var res = await postData(urls.run_report, {report_code: report_code});
        return res;
    }
});