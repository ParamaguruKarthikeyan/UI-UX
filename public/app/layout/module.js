define(['angular',
	'angular-couch-potato',
	'angular-ui-router'], function (ng, couchPotato) {
	
	"use strict";
	
	
	var module = ng.module('app.layout', ['ui.router']);
	
	
	couchPotato.configureApp(module);
	
	module.config(function ($stateProvider, $couchPotatoProvider, $urlRouterProvider) {
		
		$stateProvider
		.state('app', {
			abstract: true,
			views: {
				root: {
					templateUrl: 'app/layout/view/layout.html',
					controller: 'LayoutCtrl',
					resolve: {
						deps: $couchPotatoProvider.resolveDependencies([
							'layout/controllers/LayoutCtrl'
						])
					}
				}
			}
		});
		$urlRouterProvider.otherwise('/login');
	});
	
	module.run(function ($couchPotato) {
		module.lazy = $couchPotato;
	});
	
	return module;
	
});
