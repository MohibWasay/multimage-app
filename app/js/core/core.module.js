'use strict';

var module = 'multimage.core'; 

angular
	.module(module, [])
	.config(routerConfiguration)
	.config(restangularConfiguration)
;

function routerConfiguration($urlRouterProvider){
  $urlRouterProvider.otherwise('/gallery');
}

function restangularConfiguration(RestangularProvider){
  RestangularProvider.setBaseUrl('/api');
}


