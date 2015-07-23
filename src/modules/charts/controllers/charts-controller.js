angular.module( 'patternflyApp.chartsModule' )
    .controller( 'chartsController',
    ['$scope', '$resource',
     function( $scope, $resource ) {
        'use strict';


        // stash a ref to the controller object, and the various parent objects
        var vm = this;

         //Get the container data
        var Quotas = $resource('/quotas');
        Quotas.get({}, function(data) {
            vm.quotas = data.data;
        });

    }] );