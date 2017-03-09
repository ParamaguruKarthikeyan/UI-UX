define(['utils/module'], function (module) {
	
    'use strict';
	
    return module.registerDirective('uiInclude',[ "$http","$filter", function ($http, $filter) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: function(elemnt, attrs){
				return attrs.url;
			},
            scope: true
		}
	}]);
});
