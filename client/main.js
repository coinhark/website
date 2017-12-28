import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.info.onCreated(function helloOnCreated() {
    import '../imports/ui/css/bootstrap.min.css'
    import '../imports/ui/css/themify-icons.css';
    import '../imports/ui/css/flexslider.css';
    import '../imports/ui/css/theme-hyperblue.css';
    import '../imports/ui/css/custom.css';

    import '../imports/ui/js/jquery.min.js';
    import '../imports/ui/js/bootstrap.min.js';
    import '../imports/ui/js/flexslider.min.js';
    import '../imports/ui/js/smooth-scroll.min.js';
    import '../imports/ui/js/parallax.js';
    import '../imports/ui/js/scripts.js';
});

/*
 <link href="../imports/ui/css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
  <link href="../imports/ui/css/themify-icons.css" rel="stylesheet" type="text/css" media="all" />
  <link href="../imports/ui/css/flexslider.css" rel="stylesheet" type="text/css" media="all" />
  <link href="../imports/ui/css/theme-hyperblue.css" rel="stylesheet" type="text/css" media="all" />
  <link href="../imports/ui/css/custom.css" rel="stylesheet" type="text/css" media="all" />
  <link href='http://fonts.googleapis.com/css?family=Lato:300,400%7CRaleway:100,400,300,500,600,700%7COpen+Sans:400,500,600' rel='stylesheet' type='text/css'>
 */