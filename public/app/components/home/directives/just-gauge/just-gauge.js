define(['components/home/module'], function (module, nv) {
	
	'use strict';
	
    return module.registerDirective('justGauge', function($interval){
		return {
            restrict: 'E',
            replace: false,
            scope: true,
            link: function (scope, element, attrs ) {
				var gaugeMax = parseFloat(attrs["gaugeMax"]);
				var gaugeMin = parseFloat(attrs["gaugeMin"]);
				var gaugeRefreshEvery = parseFloat(attrs["gaugeRefreshEvery"]);
				var gaugeTitle = attrs["gaugeTitle"];
				var gaugeLabel = attrs["gaugeLabel"];
				var max_min_diff = gaugeMax - gaugeMin;
				
				var bandWidthGauge = new JustGage({
					id: element[0].id,
					value: getRandomInt(gaugeMin, gaugeMax),
					min: gaugeMin,
					max: gaugeMax,
					label: gaugeLabel,
					title : gaugeTitle,
					shadowOpacity: 0.6,
					shadowSize: 5,
					shadowVerticalOffset: 10,
					gaugeWidthScale: 0.3,
					relativeGaugeSize : true,
					valueFontColor: 'rgba(242,246,248,1)',
					textRenderer : function(value){
						return value; 	
					},
					levelColors : ["#FF0000", "#F1C900", "#07FB07"],	
					gaugeColor : "#414141", 
					pointer : true,
					counter : true,
					noGradient : false,
					pointerOptions : {
						color : 'rgba(242,246,248,1)'
					}
				});
				scope.updateGaugeData = function(){
					bandWidthGauge.refresh(getRandomInt(gaugeMin, gaugeMax));
				}
				var every_minute = $interval(function(){
					scope.updateGaugeData();
				}, gaugeRefreshEvery * 1000)
				
				scope.$on('$destroy', function() {
					if (angular.isDefined(every_minute)) {
						$interval.cancel(every_minute);
						every_minute = undefined;
					}
				});
				
			}
		};
		
	});
});

