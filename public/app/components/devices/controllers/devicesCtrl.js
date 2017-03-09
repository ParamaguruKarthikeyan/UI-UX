define(['../module'], function (module) {
	
	'use strict';
	
	return module.registerController('DevicesCtrl', function ($scope, $state, $http, $window, $rootScope, $interval, $timeout) {
		$scope.message = "In Devices Page"
		$scope.carousel_start_count = 0;
		$scope.active_device_type_pos = 0;
		$scope.active_device_array_pos = 0;
		$scope.device_types_array = [];
		$scope.device_types = angular.copy($rootScope.uiConfig.devices.device_types);
		$scope.tmpDeviceDefault = {};
		while($scope.device_types.length){
			$scope.device_types_array.push($scope.device_types.splice(0,5));
		}
		$scope.active_device_array_pos
		$scope.select_previous_five = function(){
			$scope.active_device_type_pos = 0;
			if(($scope.active_device_array_pos + 1) < $scope.device_types_array.length){
				$scope.active_device_array_pos++;
			} else {
				$scope.active_device_array_pos = 0;
			}
		};
		$scope.select_next_five = function(){
			$scope.active_device_type_pos = 0;
			if(($scope.active_device_array_pos) > 0){
				$scope.active_device_array_pos--;
			} else {
				$scope.active_device_array_pos = $scope.device_types_array.length - 1;
			}
		};
		$scope.select_current_device = function(index){
			$scope.active_device_type_pos = index;
		};
		$scope.getActive_count = function(device_type){
			var count = 0;
			$scope.devices.forEach(function(device){
				if(device.type == device_type && device.device_status == "online"){
					count++;
				}
			});
			return count;
		}
		$scope.current_device_type = function(device){
			return device.type == $scope.device_types_array[$scope.active_device_array_pos][$scope.active_device_type_pos].type;
		}
		$scope.device_default_settings = angular.copy($rootScope.uiConfig.devices.device_default);
		$scope.devices = angular.copy($rootScope.uiConfig.devices.devices);
		$scope.initDeviceSettingsPopUp = function(device_id){
			$scope.selectedDevice = {};
			$scope.devices.every(function(device){
				if(device.device_id == device_id){
					angular.copy(device,$scope.selectedDevice);
					return false;
				}
				return true;
			});
		};
		$scope.blockDevice = function(device_id){
			$scope.devices.every(function(device, index){
				if(device.device_id == device_id){
					device.device_status = "blocked";
					return false;
				}
				return true;
			});
		};
		$scope.unblockDevice = function(device_id){
			$scope.devices.every(function(device, index){
				if(device.device_id == device_id){
					device.device_status = "offline";
					return false;
				}
				return true;
			});
		};
		$scope.updateDeviceSettings = function(device_id){
			$scope.devices.every(function(device, index){
				if(device.device_id == device_id){
					angular.copy($scope.selectedDevice,device);
					return false;
				}
				return true;
			});
			$scope.selectedDevice = {};
			$("#edit_device").modal("hide");
		}
		
		
		$scope.initDeviceDefaultSettingsPopUp = function(device_id){
			$scope.tmpDeviceDefault = {};
			angular.copy($scope.device_default_settings, $scope.tmpDeviceDefault);	
		};
		$scope.updateDeviceDefaultSettings = function(){
			angular.copy($scope.tmpDeviceDefault, $scope.device_default_settings);			
			$scope.tmpDeviceDefault = {};
			$("#edit_devices_default").modal("hide");			
		};
		
		$scope.toggleConnectionMethod = function(obj_name, conn_method){
			var index = $scope[obj_name].allowed_conn_mtd.indexOf(conn_method);
			if(index != -1){
				$scope[obj_name].allowed_conn_mtd = $scope[obj_name].allowed_conn_mtd.slice(index, 1);
			} else {
				$scope[obj_name].allowed_conn_mtd.push(conn_method);
			}
		};
		
	});
});
