'use strict';

var module = 'multimage.core'; 

angular
	.module(module, [
		'angular.ui.router',
		'restangular',
		'restangular'
		])
	.config(routerConfiguration)
	.config(restangularConfiguration)
	.value('lodash', _)
;

function routerConfiguration($urlRouterProvider){
  $urlRouterProvider.otherwise('/gallery');
}

function restangularConfiguration(RestangularProvider){
  RestangularProvider.setBaseUrl('/api');
}


