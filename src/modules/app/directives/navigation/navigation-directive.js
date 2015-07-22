'use strict';

angular.module('patternfly.navigation', []).directive('pfNavigation', ['$location', '$rootScope', '$anchorScroll', function(location, rootScope, anchorScroll) {

	var navigationController = ['$scope', function($scope) {

		rootScope.$on( "$routeChangeSuccess", function(event, next, current) {
 			
			clearActiveItems($scope);

 			var updatedRoute = "#" + location.path();
 			var hash = location.hash();

 			if(hash) {
				//anchorScroll();
				updatedRoute = updatedRoute + "#" + hash; 
			}

			//Setting active state on load
			var found = false;
			$scope.items.forEach(function (topLevel) {
				if (topLevel.children && !found) {	
					//Check to see if the route matches the 2nd level
					topLevel.children.forEach(function (secondLevel) {
						if (updatedRoute.indexOf(secondLevel.href) > -1) {
							secondLevel.class="active";
							topLevel.class="active";
							found = true;
						}
					});
				} 

				//Check to see if the route matches the first level
				if (!found) {
					if (updatedRoute.indexOf(topLevel.href) > -1) {
						topLevel.class="active";
						found = true;
					}
				}
			});

			
		});
	}];

	var clearActiveItems = function($scope) {
		$scope.items.forEach(function eachItem(item) {
			if (item.children) {
				item.class = "";
				item.children.forEach(eachItem);
			} else {
				item.class = "";
			}
		});
	};

	return {
		restrict: 'A',
		scope: {
			items: '='
		},
		replace: true,
		templateUrl: 'modules/app/directives/navigation/navigation.html',
		
		link: function($scope) {
			//wrapping this in a watcher to make sure state is set correctly
			$scope.$watch('items', function(newVal, oldVal){
				if (oldVal.length === 0) {
					var updatedRoute = "#" + location.path();
					//Setting active state on load
					$scope.items.forEach(function (topLevel) {
						if (topLevel.children) {	
							topLevel.children.forEach(function (secondLevel) {
								if (updatedRoute.indexOf(secondLevel.href) > -1) {
									secondLevel.class="active";
									topLevel.class="active";
								}
							});
						} 
					});
				}	
			}, true);
		},
		controller: navigationController
	};
}]);

