import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.info.onRendered( function () {
    import '../imports/ui/css/bootstrap.min.css'
    import '../imports/ui/css/themify-icons.css';
    import '../imports/ui/css/flexslider.css';
    import '../imports/ui/css/theme-hyperblue.css';
    import '../imports/ui/css/custom.css';
    import '../imports/ui/js/jquery.min.js';
    import '../imports/ui/js/bootstrap.min.js';
    import '../imports/ui/js/flexslider.min.js';
    import '../imports/ui/js/smooth-scroll.min.js';
    //import '../imports/ui/js/parallax.js';
    import '../imports/ui/js/scripts.js';
});
