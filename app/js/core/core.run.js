
(function(){
	'use strict';
	var module = 'multimage.core'; 

	angular
	  .module(module)
	  .run(routingEvents);

	function routingEvents($rootScope, lodash){
	  $rootScope.$on('$stateChangeStart', function(){
	  	console.log(lodash);
	  });
	}
})();

