define([
	'angular',
	'angular-couch-potato',
	'angular-ui-router'
	], function (ng, couchPotato, _) {
	'use strict';
	
	var module = ng.module('app.devices', [
		'ui.router'
	]);
	
	couchPotato.configureApp(module);
	
	module.config(function ($stateProvider, $couchPotatoProvider) {
		
		$stateProvider
		.state('app.devices', {
			abstract: true,
			data: {
				title: 'Devices'
			}
		})
		.state('app.devices.view', {
			url: '/devices',
			data: {
				title: 'Devices'
			},
			views: {
				"content@app": {
					controller: 'DevicesCtrl',
					templateUrl: "app/components/devices/views/devices.html",
					resolve: {
						deps: $couchPotatoProvider.resolveDependencies([
							'components/devices/controllers/devicesCtrl',
							'components/devices/directives/devicePannel/devicePannel',
							'components/devices/directives/deviceTypeCarousel/deviceTypeCarousel'
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