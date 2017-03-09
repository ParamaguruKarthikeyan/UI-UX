define(['../module'], function (module) {
	
	'use strict';
	
	return module.registerController('RoutersCtrl', function ($scope, $state, $http, $window, $rootScope, $interval, $timeout) {
		$scope.message = "In Routers Page"
		$scope.routers = angular.copy($rootScope.uiConfig.routers);
		$scope.open_routers_panel = function(idx){
			var parentElement = $("." + idx + "_index");
			var toggleElmnt = $("#router_" + idx);
			if(toggleElmnt.attr("aria-expanded") == undefined || toggleElmnt.attr("aria-expanded")=='false'){
				parentElement.removeClass('closed').addClass('open');
				toggleElmnt.collapse("show");
			} else {
				parentElement.removeClass('open').addClass('closed');
				toggleElmnt.collapse("hide");
			}
			
		};
		
	});	
});
