angular.module("sampleApp.appModule",["ngResource","ngRoute","pascalprecht.translate","sampleApp.designModule","sampleApp.pageModule","sampleApp.chartsModule","patternfly.navigation"]).config(["$routeProvider","$translateProvider",function(a,b){"use strict";a.when("/home/about",{templateUrl:"modules/home/views/home.html",controller:"homeController",controllerAs:"vm"}).when("/design",{templateUrl:"modules/design/views/design.html",controller:"designController",controllerAs:"vm"}).when("/forms",{templateUrl:"modules/forms/views/dropdowns/dropdowns.html",controller:"formsController",controllerAs:"vm"}).when("/page",{templateUrl:"modules/page/views/page.html",controller:"pageController",controllerAs:"vm"}).when("/notifications",{templateUrl:"modules/notifications/views/notifications.html",controller:"notificationsController",controllerAs:"vm"}).when("/tables",{templateUrl:"modules/tables/views/tables.html",controller:"tablesController",controllerAs:"vm"}).when("/charting",{templateUrl:"modules/charts/views/charts.html",controller:"chartsController",controllerAs:"vm"}).when("/pagetemplates/basic",{templateUrl:"modules/tables/views/tables.html",controller:"pagetemplatesController",controllerAs:"vm"}).otherwise({redirectTo:"/home/about"}),b.translations("default","en"),b.preferredLanguage("default")}]),angular.module("sampleApp.chartsModule",["ui.bootstrap","patternfly.charts"]),angular.module("sampleApp.designModule",["ui.bootstrap"]),angular.module("sampleApp.pageModule",["ui.bootstrap","patternfly.card"]),angular.module("sampleApp.appModule").controller("sampleApp.appController",["$scope","$rootScope",function(a,b){"use strict";var c=this;c.navigationItems=[{title:"Home",href:"#/home",children:[{title:"About Patternfly",href:"#/home/about"},{title:"Getting Started",href:"#/home/gettingstarted"},{title:"What's New",href:"#/home/whatsnew"},{title:"What's Next",href:"#/home/whatsnext"},{title:"FAQ",href:"#/home/faq"}]},{title:"Design",href:"#/design#colors",children:[{title:"Color Palette",href:"#/design#colors"},{title:"Typography",href:"#/design#typography"},{title:"Iconography",href:"#/design#iconography"}]},{title:"Page Components",href:"#/page#cards",children:[{title:"Header",href:"#/page#iconography"},{title:"Breadcrumb",href:"#/page#breadcrumb"},{title:"Tabs",href:"#/page#iconography"},{title:"Paging",href:"#/page#iconography"},{title:"Tree View",href:"#/page#iconography"},{title:"Cards",href:"#/page#cards"}]},{title:"Form Elements",href:"#/forms#dropdowns",children:[{title:"Buttons",href:"#/forms#buttons"},{title:"Button Groups",href:"#/forms#buttongroups"},{title:"Dropdowns",href:"#/forms#dropdowns"},{title:"Select boxes",href:"#/forms#select"},{title:"Labels",href:"#/forms#labels"},{title:"Inputs",href:"#/forms#inputs"},{title:"Text Area",href:"#/forms#textarea"},{title:"Radio Buttons",href:"#/forms#radiobuttons"},{title:"Checkboxes",href:"#/forms#checkboxes"},{title:"Date Picker",href:"#/forms#datepicker"}]},{title:"Notifications",href:"#/notifications#alerts",children:[{title:"Alerts",href:"#/notifications#alerts"},{title:"Progress Bars",href:"#/notificationsn#progressbars"},{title:"Badges",href:"#/notifications#badges"},{title:"Loading Indicators",href:"#/notifications#loading"}]},{title:"Tables & Grids",href:"#/tables#tables",children:[{title:"Table",href:"#/tables#tables"},{title:"Data Grid",href:"#/tables#datagrid"},{title:"Angular Grid",href:"#/tables#angulargrid"}]},{title:"Charting",href:"#/charting#percentageused",children:[{title:"Donut",href:"#/charting#donuts"},{title:"Sparkline",href:"#/charting#dounuts"},{title:"Trends",href:"#/charting#trends"},{title:"Percentage Used",href:"#/charting#percentageused"},{title:"Utilization",href:"#/charting#utilization"}]},{title:"Page Templates",href:"#/pagetemplates/basic",children:[{title:"Basic",href:"#/pagetemplates/basic"},{title:"Two Column",href:"#/pagetemplates/twocolumn"},{title:"Dashboard",href:"#/pagetemplates/dashboards"}]}]}]),angular.module("patternfly.navigation",[]).directive("pfNavigation",["$location","$rootScope","$anchorScroll",function(a,b,c){var d=function(c){b.$on("$routeChangeSuccess",function(b,d,f){e(c);var g="#"+a.path(),h=a.hash();h&&(g=g+"#"+h);var i=!1;c.items.forEach(function(a){a.children&&!i&&a.children.forEach(function(b){g.indexOf(b.href)>-1&&(b["class"]="active",a["class"]="active",i=!0)}),i||g.indexOf(a.href)>-1&&(a["class"]="active",i=!0)})})},e=function(a){a.items.forEach(function b(a){a.children?(a["class"]="",a.children.forEach(b)):a["class"]=""})};return{restrict:"A",scope:{items:"="},replace:!0,templateUrl:"modules/app/directives/navigation/navigation.html",link:function(b){b.$watch("items",function(c,d){if(0===d.length){var e="#"+a.path();b.items.forEach(function(a){a.children&&a.children.forEach(function(b){e.indexOf(b.href)>-1&&(b["class"]="active",a["class"]="active")})})}},!0)},controller:d}}]),angular.module("sampleApp.designModule").controller("designController",["$scope",function(a){"use strict"}]),angular.module("sampleApp.designModule").controller("formsController",["$scope",function(a){"use strict"}]),angular.module("sampleApp.pageModule").controller("pageController",["$scope",function(a){"use strict";var b=this;b.status_widgets=[{name:"Nodes",iconClass:"pficon-container-node",count:"52",status:[{iconClass:"pficon-error-circle-o",count:"3"}]},{name:"Containers",iconClass:"fa-cube",count:300},{name:"Registries",iconClass:"pficon-registry",count:4},{name:"Projects",type:"projects",iconClass:"pficon-project",count:510},{name:"Container Groups",iconClass:"fa-cubes",count:1200,status:[{iconClass:"pficon-error-circle-o",count:3}]},{name:"Services",iconClass:"pficon-service",count:2500}]}]),angular.module("sampleApp.chartsModule").controller("chartsController",["$scope","$resource",function(a,b){"use strict";var c=this,d=b("/quotas");d.get({},function(a){c.quotas=a.data})}]);