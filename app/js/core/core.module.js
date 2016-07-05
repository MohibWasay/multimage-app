
(function(){
	'use strict';
	var module = 'multimage.core';
	var environment = {
		dev: { baseUrl: 'http://localhost:7075' }
	};

	angular
	.module(module, [
		'ui.router',
		'restangular'
		])
	.config(restangularConfiguration)
	.config(routerConfiguration)
	.value('lodash', _)
	.value('environment', environment)
	;

	function routerConfiguration($urlRouterProvider){
	  $urlRouterProvider.otherwise('/gallery/upload');
	}

	function restangularConfiguration(RestangularProvider){
	  RestangularProvider.setBaseUrl(environment['dev'].baseUrl);
	}
})();
