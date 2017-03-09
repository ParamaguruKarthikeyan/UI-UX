define(['../module', 'chatjs', 'angular-bootstrap'], function (module) {
	
	'use strict';
	
	return module.registerController('HomeCtrl', function ($scope, $state, $http, $window, $rootScope, $interval, $timeout, $filter) {
		$scope.message = "In Home Page"	
		$scope.createDataUsageChart = function(){
			if($rootScope.is_small_device){
				$(".mani").attr("height", "250");
			}
			var data = {
				labels: [],
				datasets: [
					{
						label : "GB ",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(75,192,192,0.4)",
						borderColor: "rgba(75,192,192,1)",
						borderCapStyle: 'butt',
						borderDash: [],
						borderDashOffset: 0.0,
						borderJoinStyle: 'miter',
						pointBorderColor: "rgba(75,192,192,1)",
						pointBackgroundColor: "#fff",
						pointBorderWidth: 1,
						pointHoverRadius: 5,
						pointHoverBackgroundColor: "rgba(75,192,192,1)",
						pointHoverBorderColor: "rgba(220,220,220,1)",
						pointHoverBorderWidth: 2,
						pointRadius: 1,
						pointHitRadius: 10,
						data: [],
						spanGaps: false,
					}
				]
			};
			var i = 0;
			while(i < 7){
				var date = new Date();				
				data.labels.push($filter('date')(date.setDate(date.getDate() - (i + 1)) , "dd MMM"));
				data.datasets[0].data.push(getRandomInt(30, 100));
				i++;
				
			}
			data.labels.reverse();
			Chart.defaults.global.defaultFontColor = "rgba(242,246,248,1)";
			Chart.Line($(".mani")[0], {
				data: data,
				options: {
					legend: {
						display: false,
						labels: {
							fontColor: 'rgb(255, 99, 132)'
						}
					},
					title: {
						display: true,
						text: 'Data Usage',
						position : 'bottom'
					}
				}
			});
		};
		
		
		$scope.today = function() {
			$scope.dt = new Date();
		};
		$scope.today();
		
		$scope.clear = function() {
			$scope.dt = null;
		};
		
		$scope.inlineOptions = {
			customClass: getDayClass,
			minDate: new Date(),
			showWeeks: true
		};
		
		$scope.dateOptions = {
			dateDisabled: disabled,
			formatYear: 'yy',
			maxDate: new Date(2020, 5, 22),
			minDate: new Date(),
			startingDay: 1
		};
		
		// Disable weekend selection
		function disabled(data) {
			var date = data.date,
			mode = data.mode;
			return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
		}
		
		$scope.toggleMin = function() {
			$scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
			$scope.dateOptions.minDate = $scope.inlineOptions.minDate;
		};
		
		$scope.toggleMin();
		
		$scope.open1 = function() {
			$scope.popup1.opened = true;
		};
		
		$scope.open2 = function() {
			$scope.popup2.opened = true;
		};
		
		$scope.setDate = function(year, month, day) {
			$scope.dt = new Date(year, month, day);
		};
		
		$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
		$scope.format = $scope.formats[0];
		$scope.altInputFormats = ['M!/d!/yyyy'];
		
		$scope.popup1 = {
			opened: false
		};
		
		$scope.popup2 = {
			opened: false
		};
		
		var tomorrow = new Date();
		tomorrow.setDate(tomorrow.getDate() + 1);
		var afterTomorrow = new Date();
		afterTomorrow.setDate(tomorrow.getDate() + 1);
		$scope.events = [
			{
				date: tomorrow,
				status: 'full'
			},
			{
				date: afterTomorrow,
				status: 'partially'
			}
		];
		
		function getDayClass(data) {
			var date = data.date,
			mode = data.mode;
			if (mode === 'day') {
				var dayToCheck = new Date(date).setHours(0,0,0,0);
				
				for (var i = 0; i < $scope.events.length; i++) {
					var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);
					
					if (dayToCheck === currentDay) {
						return $scope.events[i].status;
					}
				}
			}
			
			return '';
		}
	});
});
