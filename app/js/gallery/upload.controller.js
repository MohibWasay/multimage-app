
(function(){
    'use strict';
    angular
        .module('multimage.gallery')
        .controller('Upload', controller);

    function controller(ImgUploader){
        var vm = this;
        vm.uploader = ImgUploader.create('upload.php');
    }
})();