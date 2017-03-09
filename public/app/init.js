window.name = "NG_DEFER_BOOTSTRAP!";
define([
    'require',
	'angular',
    'domReady',	
    'app',
	'jquery',
    'bootstrap',
	'includes',
	'uiConfig'
], function (require, ng, domReady) {
    'use strict';
    
	domReady(function (document) {
        ng.bootstrap(document, ['app']);
        ng.resumeBootstrap();
    });
});
