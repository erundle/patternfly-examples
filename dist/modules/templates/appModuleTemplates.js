angular.module('appModule').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('modules/app/directives/navigation/navigation.html',
    "<ul class=\"nav navbar-nav navbar-primary persistent-secondary\"><li ng-repeat=\"item in items\" class=\"{{ item.class }}\"><a href=\"{{item.href}}\">{{ item.title }}</a><ul class=\"nav navbar-nav navbar-persistent\" ng-if=\"item.children\"><li ng-repeat=\"child in item.children\" class=\"{{ child.class }}\"><a href=\"{{ child.href }}\">{{ child.title }}</a></li></ul></li></ul>"
  );

}]);
