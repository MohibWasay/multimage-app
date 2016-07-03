
(function(){
	'use strict';
	var module = 'multimage.core'; 

	angular
	  .module(module)
	  .run(routingEvents);

	function routingEvents($rootScope, lodash){
	  $rootScope.$on('$stateChangeStart', function(event, toState){
		  console.log(lodash.capitalize(toState.name));
	  });

	  $rootScope.$on('$stateChangeStart', function(event, toState){
		  $rootScope.pageTitle = toState.title;
	  });
	}
})();

