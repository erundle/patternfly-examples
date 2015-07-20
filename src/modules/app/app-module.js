angular.module( 'sampleApp.appModule', [
    'ngResource',
    'ngRoute',
    'pascalprecht.translate',
    'sampleApp.designModule',
    'sampleApp.pageModule',
    'sampleApp.chartsModule',
    'patternfly.navigation'
] )
    .config( ['$routeProvider', '$translateProvider',
              function( $routeProvider, $translateProvider ) {
                  'use strict';

                  $routeProvider
                  .when('/home/about', {
                    templateUrl: 'modules/home/views/home.html',
                    controller: 'homeController',
                    controllerAs: 'vm'
                  })
                  .when('/design', {
                    templateUrl: 'modules/design/views/design.html',
                    controller: 'designController',
                    controllerAs: 'vm'
                  })
                  .when('/forms', {
                    templateUrl: 'modules/forms/views/forms.html',
                    controller: 'formsController',
                    controllerAs: 'vm'
                  })
                  .when('/page', {
                    templateUrl: 'modules/page/views/page.html',
                    controller: 'pageController',
                    controllerAs: 'vm'
                  })
                  .when('/notifications', {
                    templateUrl: 'modules/page/views/page.html',
                    controller: 'pageController',
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
                    controller: 'pagetemplatesController',
                    controllerAs: 'vm'
                  })
                  // Default
                  .otherwise({
                    redirectTo: '/home/about'
                  });

                  $translateProvider.translations( 'default', 'en');
                  $translateProvider.preferredLanguage( 'default' );

              }
    ] )
