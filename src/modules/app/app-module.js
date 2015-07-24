angular.module( 'patternflyApp.appModule', [
    'ngResource',
    'ngRoute',
    'pascalprecht.translate',
    'patternflyApp.chartsModule',
    'patternflyApp.designModule',
    'patternflyApp.formsModule',
    'patternflyApp.homeModule',
    'patternflyApp.notificationsModule',
    'patternflyApp.pageModule',
    'patternflyApp.tablesModule',
    'patternfly.navigation'
] )
    .config( ['$routeProvider', '$translateProvider',
              function( $routeProvider, $translateProvider ) {
                  'use strict';

                  $routeProvider
                  .when('/home', {
                    templateUrl: 'modules/home/views/home.html',
                    controller: 'homeController',
                    controllerAs: 'vm'
                  })
                  .when('/home/about', {
                    templateUrl: 'modules/home/views/about.html',
                    controller: 'homeController',
                    controllerAs: 'vm'
                  })
                  .when('/home/contribute', {
                    templateUrl: 'modules/home/views/contribute.html',
                    controller: 'homeController',
                    controllerAs: 'vm'
                  })
                  .when('/home/faq', {
                    templateUrl: 'modules/home/views/faq.html',
                    controller: 'homeController',
                    controllerAs: 'vm'
                  })
                  .when('/home/gettingstarted', {
                    templateUrl: 'modules/home/views/gettingstarted.html',
                    controller: 'homeController',
                    controllerAs: 'vm'
                  })
                  .when('/home/whatsnew', {
                    templateUrl: 'modules/home/views/whatsnew.html',
                    controller: 'homeController',
                    controllerAs: 'vm'
                  })
                  .when('/home/whatsnext', {
                    templateUrl: 'modules/home/views/whatsnext.html',
                    controller: 'homeController',
                    controllerAs: 'vm'
                  })
                  .when('/design', {
                    templateUrl: 'modules/design/views/design.html',
                    controller: 'designController',
                    controllerAs: 'vm'
                  })
                  .when('/forms', {
                    templateUrl: 'modules/forms/views/dropdowns/dropdowns.html',
                    controller: 'formsController',
                    controllerAs: 'vm'
                  })
                  .when('/page', {
                    templateUrl: 'modules/page/views/page.html',
                    controller: 'pageController',
                    controllerAs: 'vm'
                  })
                  .when('/notifications', {
                    templateUrl: 'modules/notifications/views/notifications.html',
                    controller: 'notificationsController',
                    controllerAs: 'vm'
                  })
                  .when('/tables', {
                    templateUrl: 'modules/tables/views/tables.html',
                    controller: 'tablesController',
                    controllerAs: 'vm'
                  })
                  .when('/charting', {
                    templateUrl: 'modules/charts/views/charts.html',
                    controller: 'chartsController',
                    controllerAs: 'vm'
                  })
                  .when('/pagetemplates/basic', {
                    templateUrl: 'modules/tables/views/tables.html',
                    controller: 'tablesController',
                    controllerAs: 'vm'
                  })
                  // Default
                  .otherwise({
                    redirectTo: '/home'
                  });

                  $translateProvider.translations( 'default', 'en');
                  $translateProvider.preferredLanguage( 'default' );

              }
    ] )
