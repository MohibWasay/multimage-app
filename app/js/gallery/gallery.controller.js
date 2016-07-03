
(function(){
	'use strict';
	angular
		.module('multimage.gallery')
		.controller('Gallery', controller);

	function controller(){
		var vm = this;
		vm.state = 'Hello From Gallery';
	}
})();