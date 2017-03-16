define(['../module'], function (module) {
	"use strict";
	module.registerController('LoginCtrl', function ($scope, $rootScope, $state) {
		$scope.login_in_progress = false;
		$scope.username = "";
		$scope.validateAndLogin = function(){
			$rootScope.userName = $scope.username
			$scope.login_in_progress = true;
			setTimeout(function(){
				$state.go("app.home.view");
			}, 300)
		};
	});
});
