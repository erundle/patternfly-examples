angular.module( 'sampleApp.appModule' )
    .controller( 'sampleApp.appController',
    ['$scope',
     '$rootScope',
     function( $scope,
         $rootScope) {

         'use strict';

         var vm = this;

         vm.navigationItems = [
          {     
          "title": "Home",
          "href": "#/home",
          "children":[
                {
                    "title":"About Patternfly",
                    "href":"#/home/about"
                },
                {
                    "title":"Getting Started",
                    "href":"#/home/gettingstarted"
                },
                {
                    "title":"What's New",
                    "href":"#/home/whatsnew"
                },
                {
                    "title":"What's Next",
                    "href":"#/home/whatsnext"
                },
                {
                    "title":"FAQ",
                    "href":"#/home/faq"
                }
                ]
                },
         		{			
					"title": "Design",
					"href": "#/design",
					"children":[
            		{
               			"title":"Color Palette",
               			"href":"#/design#colors"
            		},
            		{
               			"title":"Typography",
               			"href":"#/design#typography"
            		},
            		{
               			"title":"Iconography",
               			"href":"#/design#iconography"
            		}
            		]
				},
                {			
				"title": "Page Components",
				"href": "#/page#cards",
                "children":[
                {
                    "title":"Header",
                    "href":"#/page#iconography"
                },
                {
                    "title":"Breadcrumb",
                    "href":"#/page#breadcrumb"
                },
                {
                    "title":"Tabs",
                    "href":"#/page#iconography"
                },
                {
                    "title":"Paging",
                    "href":"#/page#iconography"
                },
                {
                    "title":"Tree View",
                    "href":"#/page#iconography"
                },
                {
                    "title":"Cards",
                    "href":"#/page#cards"
                }
                ]
				},
				{
				"title": "Form Elements",
				"href": "#/forms",
                "children":[
                {
                    "title":"Buttons",
                    "href":"#/forms#iconography"
                },
                 {
                    "title":"Button Groups",
                    "href":"#/forms#iconography"
                },
                {
                    "title":"Dropdowns",
                    "href":"#/forms#iconography"
                },
                {
                    "title":"Select boxes",
                    "href":"#/forms#iconography"
                },
                {
                    "title":"Labels",
                    "href":"#/forms#colors"
                },
                {
                    "title":"Inputs",
                    "href":"#/forms#colors"
                },
                {
                    "title":"Text Area",
                    "href":"#/forms#typography"
                },
                {
                    "title":"Radio Buttons",
                    "href":"#/forms#typography"
                },
                {
                    "title":"Checkboxes",
                    "href":"#/forms#typography"
                },
                {
                    "title":"Date Picker",
                    "href":"#/forms#iconography"
                }
                ]
				},
                {
                "title": "Notifications",
                "href": "#/notifications",
                "children": [
                {
                    "title":"Alerts",
                    "href":"#/design#colors"
                },
                {
                    "title":"Progress Bars",
                    "href":"#/design#colors"
                },
                {
                    "title":"Badges",
                    "href":"#/design#typography"
                },
                {
                    "title":"Loading Indicators",
                    "href":"#/design#iconography"
                }
                ]
                },
				{
				"title": "Tables & Grids",
				"href": "#/tables",
                "children":[
                {
                    "title":"Table",
                    "href":"#/tables#iconography"
                },
                {
                    "title":"Data Grid",
                    "href":"#/tables#iconography"
                }
                ]
				},
                {
                "title": "Charting",
                "href": "#/charting#percentageused",
                "children":[
                {
                    "title":"Donut",
                    "href":"#/charting#donuts"
                },
                {
                    "title":"Sparkline",
                    "href":"#/charting#dounuts"
                },
                {
                    "title":"Trends",
                    "href":"#/charting#trends"
                },
                {
                    "title":"Percentage Used",
                    "href":"#/charting#percentageused"
                },
                {
                    "title":"Utilization",
                    "href":"#/charting#utilization"
                }

                ]
                },
                {     
                "title": "Page Templates",
                "href": "#/pagetemplates/basic",
                "children":[
                {
                    "title":"Basic",
                    "href":"#/pagetemplates/basic"
                },
                {
                    "title":"Two Column",
                    "href":"#/pagetemplates/twocolumn"
                },
                {
                    "title":"Dashboard",
                    "href":"#/pagetemplates/dashboards"
                }
                ]
                }
			];

     }] );
