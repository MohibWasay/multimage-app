
(function(){
	'use strict';

	var module = {
		name: 'multimage.gallery',
		dependencies: []
	};

	angular
		.module(module.name, module.dependencies)
		.config(configuration);

	function configuration($stateProvider) {
		$stateProvider
		.state('gallery', {
			url: '/gallery',
			title: 'Image Gallery',
			controller: 'Gallery as vm',
			templateUrl: 'js/gallery/gallery.html'
		})
		.state('gallery.upload', {
			url: '/upload',
			title: 'Image Gallery - Upload',
			controller: 'Upload as vm',
			templateUrl: 'js/gallery/upload.html'
		})
	}
})();