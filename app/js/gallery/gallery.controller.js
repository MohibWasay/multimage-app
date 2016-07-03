
(function(){
	'use strict';
	var module = 'multimage.gallery'; 
	angular.module(module).
		controller('Gallery', controller);

	function controller(){
		var vm = this;
		vm.state = 'Hello World';
	}
})();