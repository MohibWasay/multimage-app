
(function(){
	'use strict';

	var module = 'multimage.gallery';

	angular
		.module(module, [])
		.config(configuration);

	function configuration($stateProvider) {
		$stateProvider
		.state('gallery', {
			url: '/gallery',
			controller: 'Gallery as vm',
			templateUrl: 'js/gallery/gallery.html'
		})
	}
})();