
(function(){
    'use strict';
    angular
        .module('multimage.gallery')
        .controller('Upload', controller);

    function controller(FileUploader){
        var vm = this;

        var uploader = new FileUploader({
            url: 'upload.php'
        });

        uploader.filters.push({
            name: 'imageFilter',
            fn: function(item) {
                var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        });

        vm.state = 'Hello From Uploader';
    }
})();