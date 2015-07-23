angular.module( 'patternflyApp.pageModule' )
    .controller( 'pageController',
    ['$scope',
     function( $scope ) {
        'use strict';


        // stash a ref to the controller object, and the various parent objects
        var vm = this;

        vm.status_widgets = [
         {
            "name":"Nodes",
            "iconClass":"pficon-container-node",
            "count":"52",
            "status":[
               {
                  "iconClass":"pficon-error-circle-o",
                  "count":"3"
               }
            ]
         },
         {
            "name":"Containers",
            "iconClass":"fa-cube",
            "count":300
         },
         {
            "name":"Registries",
            "iconClass":"pficon-registry",
            "count":4
         },
         {
            "name":"Projects",
            "type":"projects",
            "iconClass":"pficon-project",
            "count":510
         },
         {
            "name":"Container Groups",
            "iconClass":"fa-cubes",
            "count":1200,
            "status":[
               {
                  "iconClass":"pficon-error-circle-o",
                  "count":3
               }
            ]
         },
         {
            "name":"Services",
            "iconClass":"pficon-service",
            "count":2500
         }
      ];

    }] );