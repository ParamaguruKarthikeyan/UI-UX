define(['components/devices/module', 'hammerjs'], function (module) {
	
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
<<<<<<< HEAD
					var hammer_carousel = new Hammer.Manager(carousel);
					hammer_carousel.on('swipeleft', function(){
						scope.select_previous_five();
					});
					hammer_carousel.on('swiperight', function(){
						scope.select_next_five();
=======
					carousel.find("*").swipe({
						swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
							if (direction == 'left') {
								scope.select_previous_five();
							}
							if (direction == 'right'){
								scope.select_next_five();
							}						
						},
						fingers:1
>>>>>>> d6dca7c85a1cc8c1291e97b031769e8a6c38f91e
					});
				});
			}
		}
	}]);
});
