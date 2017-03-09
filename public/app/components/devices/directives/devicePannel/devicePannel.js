define(['components/devices/module', 'chatjs'], function (module) {
	
    'use strict';
	
    return module.registerDirective('devicePannel',[ "$http","$filter", function ($http, $filter) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/components/devices/directives/devicePannel/devicePannel.tpl.html',
            scope: true,
            link: function (scope, pannel, attrs ) {
				attrs.$observe('device-class', function(device_class) {
					pannel.addClass(device_class);
				});
				Chart.defaults.global.defaultFontColor = "rgba(242,246,248,1)";
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
				Chart.Line(pannel.find(".chart_canvas")[0], {
					data: data,
					 options: {
						legend: {
							display: false,
							labels: {
								fontColor: 'rgb(255, 99, 132)'
							}
						}
					}
				});
				/*
				
				var data = {
					labels: ["January", "February", "March", "April", "May", "June", "July"],
					datasets: [
						{
							label: "My First dataset",
							backgroundColor: [
								'rgba(255, 99, 132, 0.2)',
								'rgba(255, 99, 132, 0.2)',
								'rgba(255, 99, 132, 0.2)',
								'rgba(255, 99, 132, 0.2)',
								'rgba(255, 99, 132, 0.2)',
								'rgba(255, 99, 132, 0.2)'
								
							],
							borderColor: [
								'rgba(255,99,132,1)',
								'rgba(255,99,132,1)',
								'rgba(255,99,132,1)',
								'rgba(255,99,132,1)',
								'rgba(255,99,132,1)',
								'rgba(255,99,132,1)'
							],
							borderWidth: 1,
							data: [65, 59, 80, 81, 56, 55, 40],
						}
					]
				};
				var myBarChart = new Chart(pannel.find(".chart_canvas")[0], {
					type: 'bar',
					data: data,
					 options: {
						legend: {
							display: false,
							labels: {
								fontColor: 'rgb(255, 99, 132)'
							}
						}
					}
				});*/
			}
		}
	}]);
});
