define([
	'angular',
	'angular-couch-potato',
	'angular-ui-router'
	], function (ng, couchPotato, _) {
	'use strict';
	
	var module = ng.module('app.home', [
		'ui.router'
	]);
	
	couchPotato.configureApp(module);
	
	module.config(function ($stateProvider, $couchPotatoProvider) {
		
		$stateProvider
		.state('app.home', {
			abstract: true,
			data: {
				title: 'Home'
			}
		})
		.state('app.home.view', {
			url: '/home',
			data: {
				title: 'Home'
			},
			views: {
				"content@app": {
					controller: 'HomeCtrl',
					templateUrl: "app/components/home/views/home.html",
					resolve: {
						deps: $couchPotatoProvider.resolveDependencies([
							'components/home/controllers/homeCtrl',
							'components/home/directives/angular-nvd3/angular-nvd3',
							'components/home/directives/just-gauge/just-gauge'
							
						])
					}
				}
			}
		});
	});
	
	module.run(function ($couchPotato) {
		module.lazy = $couchPotato;
	});
	
	return module;
});