angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('churAPPiController.SERIES', {
    url: '/series',
    views: {
      'tab1': {
        templateUrl: 'templates/SERIES.html',
        controller: 'SERIESCtrl'
      }
    }
  })

  .state('churAPPiController.EVENTS', {
    url: '/events',
    views: {
      'tab2': {
        templateUrl: 'templates/EVENTS.html',
        controller: 'EVENTSCtrl'
      }
    }
  })

  .state('churAPPiController.BIBLE', {
    url: '/bible',
    views: {
      'tab3': {
        templateUrl: 'templates/BIBLE.html',
        controller: 'BIBLECtrl'
      }
    }
  })

  .state('churAPPiController.announcements', {
    url: '/announcements',
    views: {
      'tab4': {
        templateUrl: 'templates/announcements.html',
        controller: 'announcementsCtrl'
      }
    }
  })

  .state('churAPPiController.announcementRead', {
    url: '/announcementRead/:id',
    views: {
      'tab4': {
        templateUrl: 'templates/announcementRead.html',
        controller: 'announcementReadCtrl'
      }
    }
  })

  .state('churAPPiController.MORE', {
    url: '/more',
    views: {
      'tab5': {
        templateUrl: 'templates/MORE.html',
        controller: 'MORECtrl'
      }
    }
  })

  .state('churAPPiController', {
    url: '/controllerAPPi',
    templateUrl: 'templates/churAPPiController.html',
    abstract:true
  })

  .state('churAPPiController.episodesInSeries', {
    url: '/episodes/:id',
    views: {
      'tab1': {
        templateUrl: 'templates/episodesInSeries.html',
        controller: 'episodesInSeriesCtrl'
      }
    }
  })

  .state('churAPPiController.episodeDetails', {
    url: '/episode-details/:id',
    views: {
      'tab1': {
        templateUrl: 'templates/episodeDetails.html',
        controller: 'episodeDetailsCtrl'
      }
    }
  })

  .state('churAPPiController.monthEvents', {
    url: '/month-events/:id',
    views: {
      'tab2': {
        templateUrl: 'templates/monthEvents.html',
        controller: 'monthEventsCtrl'
      }
    }
  })

  .state('churAPPiController.eventDetails', {
    url: '/event-details/:id',
    views: {
      'tab2': {
        templateUrl: 'templates/eventDetails.html',
        controller: 'eventDetailsCtrl'
      }
    }
  })

  .state('churAPPiController.map', {
    url: '/map/:id',
    views: {
      'tab2': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
      }
    }
  })

  .state('churAPPiController.readingPlan', {
    url: '/reading-plan',
    views: {
      'tab3': {
        templateUrl: 'templates/readingPlan.html',
        controller: 'readingPlanCtrl'
      }
    }
  })

  .state('churAPPiController.readingPlanDetails', {
    url: '/reading-plan-details/:id',
    views: {
      'tab3': {
        templateUrl: 'templates/readingPlanDetails.html',
        controller: 'readingPlanDetailsCtrl'
      }
    }
  })
  
  .state('churAPPiController.webpage', {
    url: '/webpage',
    views: {
      'tab3': {
        templateUrl: 'templates/webpage.html',
        controller: 'webpageCtrl'
      }
    }
  })

  .state('churAPPiController.webpageMore', {
    url: '/webpageMore/:id',
    views: {
      'tab5': {
        templateUrl: 'templates/webpageMore.html',
        controller: 'webpageMoreCtrl'
      }
    }
  })

  .state('churAPPiController.livestream', {
    url: '/livestream',
    views: {
      'tab5': {
        templateUrl: 'templates/livestream.html',
        controller: 'streamCtrl'
      }
    }
  })

  .state('churAPPiController.pastors', {
    url: '/pastors',
    views: {
      'tab5': {
        templateUrl: 'templates/pastors.html',
        controller: 'pastorsCtrl'
      }
    }
  });

$urlRouterProvider.otherwise('/controllerAPPi/series');

  

});