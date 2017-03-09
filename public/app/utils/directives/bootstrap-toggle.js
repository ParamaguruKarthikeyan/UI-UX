define(['utils/module','bootstrap-toggle'], function (module) {
	
    'use strict';
	
    return module.registerDirective('bootstrapToggle',function () {
        return {
            restrict: 'A',
            replace: false,
            scope: false,
			link: function (scope, checkbox, attrs ) {
				$(checkbox).bootstrapToggle({
					on: 'Enabled',
					off: 'Disabled'
				});
			}
		}
	});
});
