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

					var hammer_carousel = new Hammer.Manager(carousel[0]);
					hammer_carousel.on('swipeleft', function(){
						scope.select_previous_five();
					});
					hammer_carousel.on('swiperight', function(){
						scope.select_next_five();
					});
				});
			}
		}
	}]);
});
