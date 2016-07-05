
(function(){
    'use strict';
    angular
        .module('multimage.gallery')
        .controller('Upload', controller);

    function controller(ImgUploader, Restangular, environment){
        var vm = this;
        vm.doneButton = true;
        vm.onTextChange = onTextChange;
        vm.uploader = ImgUploader.create(environment['dev'].baseUrl + '/upload');

        vm.uploader.onAfterAddingAll = onAfterAddingAll;
        vm.uploader.onCompleteAll = onCompleteAll;

        function onAfterAddingAll(addedFileItems){
            vm.doneButton = false;
        	vm.uploader.uploadAll();
        }

        function onTextChange(newName, oldName){
            Restangular.all('rename').post({oldName: oldName, newName: newName});
        }

        function onCompleteAll(){
            vm.doneButton = true;
        }
    }
})();
