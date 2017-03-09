define([
    'angular',
    'angular-couch-potato',
    'angular-ui-router'
	], function (ng, couchPotato) {
	
    "use strict";
	
    var module = ng.module('app.login', [
        'ui.router'
	]);
	
    couchPotato.configureApp(module);
	
    module.config(function ($stateProvider, $couchPotatoProvider){
		
		$stateProvider.state('hdnlogin', {
			url: '/login',
			views: {
				root: {
					templateUrl: "app/auth/views/login.html",
					controller: 'LoginCtrl',
					resolve: {
						deps: $couchPotatoProvider.resolveDependencies([
							'auth/controllers/LoginCtrl'
						])
					}
				}
			},
			data: {
				title: 'Login',
				rootId: 'extra-page'
			}
			
		});		
		
	});
	
	module.run(function($couchPotato){
		module.lazy = $couchPotato;
	});
	return module;
});