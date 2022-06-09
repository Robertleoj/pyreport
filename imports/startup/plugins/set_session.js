import {Session} from 'meteor/session';
import {page} from '../../statics/session';

Meteor.startup(() => {
    Session.setDefault(page.var, page.opts.reports);
});