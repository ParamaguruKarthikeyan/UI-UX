define([
	'angular',
	'angular-couch-potato',
	'angular-ui-router'
	], function (ng, couchPotato, _) {
	'use strict';
	
	var module = ng.module('app.routers', [
		'ui.router'
	]);
	
	couchPotato.configureApp(module);
	
	module.config(function ($stateProvider, $couchPotatoProvider) {
		
		$stateProvider
		.state('app.routers', {
			abstract: true,
			data: {
				title: 'Routers'
			}
		})
		.state('app.routers.view', {
			url: '/routers',
			data: {
				title: 'Routers and Boosters'
			},
			views: {
				"content@app": {
					controller: 'RoutersCtrl',
					templateUrl: "app/components/routers/views/routers.html",
					resolve: {
						deps: $couchPotatoProvider.resolveDependencies([
							'components/routers/controllers/routersCtrl'
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