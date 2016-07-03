
(function(){
	'use strict';
	var module = 'multimage.core';

	angular
	.module(module, [
		'ui.router',
		'restangular'
		])
	.config(restangularConfiguration)
	.config(routerConfiguration)
	.value('lodash', _)
	;

	function routerConfiguration($urlRouterProvider){
	  $urlRouterProvider.otherwise('/gallery');
	}

	function restangularConfiguration(RestangularProvider){
	  RestangularProvider.setBaseUrl('/api');
	}
})();

