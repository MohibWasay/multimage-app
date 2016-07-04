
(function(){
    'use strict';
    angular
        .module('multimage.gallery')
        .controller('Upload', controller);

    function controller(ImgUploader, Restangular){
        var vm = this;
        vm.uploader = ImgUploader.create('upload.php');
        vm.uploader.onAfterAddingAll = onAfterAddingAll;

        function onAfterAddingAll(addedFileItems){
        	Restangular.all('upload')
          	.withHttpConfig({transformRequest: angular.identity})
          	.customPOST(addedFileItems, undefined, undefined,
            	{ 'Content-Type': 'application/x-www-form-urlencoded' });
        }
    }
})();
