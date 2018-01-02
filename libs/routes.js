FlowRouter.route('/', {
    name: 'Lists.show',
    action() {
        BlazeLayout.render('info', { main: 'Index'});
    }
});

FlowRouter.route('/privacy', {
    name: 'Lists.show',
    action() {
        BlazeLayout.render('privacy', { main: 'Privacy'});
    }
});
