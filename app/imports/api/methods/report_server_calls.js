import urls from './report_server_config';
import {postData} from '../utils/requests';

Meteor.methods({
    'get_report': async function (report_id){
        var res = await postData(urls.run_report, {report_id: report_id});
        return res;
    }
})