angular.module( 'patternflyApp.appModule' )
    .controller( 'patternflyApp.appController',
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
					"href": "#/design#colors",
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
                    "href":"#/page#tabs"
                },
                {
                    "title":"Paging",
                    "href":"#/page#paging"
                },
                {
                    "title":"Tree View",
                    "href":"#/page#treeview"
                },
                {
                    "title":"Cards",
                    "href":"#/page#cards"
                }
                ]
				},
				{
				"title": "Form Elements",
				"href": "#/forms#dropdowns",
                "children":[
                {
                    "title":"Buttons",
                    "href":"#/forms#buttons"
                },
                 {
                    "title":"Button Groups",
                    "href":"#/forms#buttongroups"
                },
                {
                    "title":"Dropdowns",
                    "href":"#/forms#dropdowns"
                },
                {
                    "title":"Select boxes",
                    "href":"#/forms#select"
                },
                {
                    "title":"Labels",
                    "href":"#/forms#labels"
                },
                {
                    "title":"Inputs",
                    "href":"#/forms#inputs"
                },
                {
                    "title":"Text Area",
                    "href":"#/forms#textarea"
                },
                {
                    "title":"Radio Buttons",
                    "href":"#/forms#radiobuttons"
                },
                {
                    "title":"Checkboxes",
                    "href":"#/forms#checkboxes"
                },
                {
                    "title":"Date Picker",
                    "href":"#/forms#datepicker"
                }
                ]
				},
                {
                "title": "Notifications",
                "href": "#/notifications#alerts",
                "children": [
                {
                    "title":"Alerts",
                    "href":"#/notifications#alerts"
                },
                {
                    "title":"Progress Bars",
                    "href":"#/notificationsn#progressbars"
                },
                {
                    "title":"Badges",
                    "href":"#/notifications#badges"
                },
                {
                    "title":"Loading Indicators",
                    "href":"#/notifications#loading"
                }
                ]
                },
				{
				"title": "Tables & Grids",
				"href": "#/tables#tables",
                "children":[
                {
                    "title":"Table",
                    "href":"#/tables#tables"
                },
                {
                    "title":"Data Grid",
                    "href":"#/tables#datagrid"
                },
                {
                    "title":"Angular Grid",
                    "href":"#/tables#angulargrid"
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
                    "href":"#/charting#sparkline"
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
