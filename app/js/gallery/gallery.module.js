
(function(){
	'use strict';

	var module = {
		name: 'multimage.gallery',
		dependencies: ['angularFileUpload']
	};

	angular
		.module(module.name, module.dependencies)
		.config(configuration);

	function configuration($stateProvider) {
		$stateProvider
		.state('gallery', {
			url: '/gallery',
			controller: 'Gallery as vm',
			templateUrl: 'js/gallery/gallery.html'
		})
		.state('gallery.upload', {
			url: '/upload',
			controller: 'Upload as vm',
			templateUrl: 'js/gallery/upload.html'
		})
	}
})();