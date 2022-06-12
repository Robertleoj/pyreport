import CreateApp from './createApp'
import './vueMeteorTracker';
import './set_session';


/*= End of Imports =*/
/*=============================================<<<<<*/



/*=============================================>>>>>
=  Load App on Html  =
===============================================>>>>>*/

Meteor.startup(() => {
  CreateApp()
})