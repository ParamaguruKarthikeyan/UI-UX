var require = {
    waitSeconds: 0,
    paths: {
		"uiConfig"				:	"../uiConfig",
		"domReady"				:	"/libs/requirejs-domReady/domReady",
		
		"jquery"				:	["/libs/jQuery/jquery.min"],
		"bootstrap"				:	"/libs/bootstrap/bootstrap.min",
		"angular"				:	"/libs/angular/angular.min",
		"angular-ui-router"		:	"/libs/angular-ui-router/angular-ui-router.min",
		"angular-bootstrap"		:	"/libs/angular-bootstrap/ui-bootstrap-tpls.min",
		"angular-couch-potato"	:	"/libs/angular-couch-potato/couchPotato",
		"ngSanitize"			:	"/libs/angular-couch-potato/angular-sanitize",
		"justgage"				:	"/libs/justGage/justgage",
		"chatjs"				:	"/libs/chartjs/Chart.bundle.min",
		"touch-swipe"			:	"/libs/touch-swipe/jquery.touchSwipe.min",
		'd3'					: 	'/libs/nv-d3/d3/d3.v3.min',
		'nvd3' 					: 	'/libs/nv-d3/nv.d3/nv.d3'
	},
	shim: {
		"jquery"				: 	{ "exports" : "jQuery"},
		"bootstrap"				: 	{ deps: ["jquery"] },
		"angular"				:	{ "exports": "angular", deps: ["jquery"]},
		"angular-bootstrap"		: 	{ deps: ["angular"] },
        "angular-ui-router"		: 	{ deps: ["angular"] },
        "angular-couch-potato"	: 	{ deps: ["angular"] },
		"raphael"				:	{ "exports" : "Raphael"},
		"touch-swipe"			: 	{ deps: ["jquery"] },
		"nvd3" 					: 	{ "exports" : 'nv', deps:["d3"]}
	},
    priority: [
		"jquery",
        "bootstrap",
        "angular"
    ]
}