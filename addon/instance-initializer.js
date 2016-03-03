// import getOwner from 'ember-getowner-polyfill';

export default function instanceInitialize(applicationInstance) {
  // var owner = getOwner(this);

  var router = applicationInstance.lookup('router:main');
  var segment = applicationInstance.lookup('service:segment');

  router.on('didTransition', function() {
    segment.trackPageView();

    var applicationRoute = applicationInstance.lookup('route:application');
    if(applicationRoute && typeof applicationRoute.identifyUser === 'function') {
      applicationRoute.identifyUser();
    }
  });
}
