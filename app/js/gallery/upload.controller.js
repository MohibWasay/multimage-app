
(function(){
    'use strict';
    angular
        .module('multimage.gallery')
        .controller('Upload', controller);

    function controller(ImgUploader, Restangular){
        var vm = this;
        vm.doneButton = true;
        vm.uploader = ImgUploader.create('http://localhost:7075/upload');

        vm.uploader.onAfterAddingAll = onAfterAddingAll;
        vm.uploader.onCompleteAll = onCompleteAll;

        function onAfterAddingAll(addedFileItems){
            vm.doneButton = false;
        	vm.uploader.uploadAll();
        }

        function onCompleteAll(){
            vm.doneButton = true;
        }
    }
})();
