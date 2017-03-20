define(['components/devices/module', 'touch-swipe'], function (module) {
	
    'use strict';
	
    return module.registerDirective('deviceTypeCarousel',[ "$http","$filter", function ($http, $filter) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/components/devices/directives/deviceTypeCarousel/deviceTypeCarousel.tpl.html',
            scope: true,
            link: function (scope, carousel, attrs ) {
				attrs.$observe('carousel-class', function(carousel_class) {
					carousel.addClass(carosul_class);
				});
				$(document).ready(function(){
					carousel.swipe({
						swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
							if (direction == 'left') {
								scope.select_previous_five();
							}
							if (direction == 'right'){
								scope.select_next_five();
							}						
						},
						fingers:1
					});
				});
			}
		}
	}]);
});
