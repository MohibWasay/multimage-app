

(function(){
	'use strict';

	var module = 'multimage.gallery';

	angular
		.module(module, [])
		.config(configuration)
	;

	function configuration($stateProvider) {
		$stateProvider
		.state('app.gallery', {
			url: '/gallery',
			title: 'Multimage - Gallery',
			templateUrl: 'gallery.html'
		})
	}
})();