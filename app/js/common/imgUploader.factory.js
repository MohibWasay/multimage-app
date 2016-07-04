
(function(){
    'use strict';

    angular
        .module('multimage.common')
        .factory('ImgUploader', factory);

    function factory(FileUploader){
        function onWhenAddingFileFailed(item, filter, options){
            console.info('onWhenAddingFileFailed', item, filter, options);
        }

        function onAfterAddingFile(fileItem){
            console.info('onAfterAddingFile', fileItem);
        }

        function onAfterAddingAll(addedFileItems){
            console.info('onAfterAddingAll', addedFileItems);
        }

        function onBeforeUploadItem(item){
            console.info('onBeforeUploadItem', item);
        }

        function onProgressItem(fileItem, progress){
            console.info('onProgressItem', fileItem, progress);
        }

        function onProgressAll(progress){
            console.info('onProgressAll', progress);
        }

        function onSuccessItem(fileItem, response, status, headers){
            console.info('onSuccessItem', fileItem, response, status, headers);
        }

        function onErrorItem(fileItem, response, status, headers){
            console.info('onErrorItem', fileItem, response, status, headers);
        }

        function onCancelItem(fileItem, response, status, headers){
            console.info('onCancelItem', fileItem, response, status, headers);
        }

        function onCompleteItem(fileItem, response, status, headers){
            console.info('onCompleteItem', fileItem, response, status, headers);
        }

        function onCompleteAll(){
            console.info('onCompleteAll');
        }

        function create(url){
            var uploader = new FileUploader({
                url: url,
                arrayKey: ''
            });

            uploader.filters.push({
                name: 'imageFilter',
                fn: function(item) {
                    var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                    if('|jpg|png|jpeg|bmp|gif|'.indexOf(type) === -1){
                        console.log('Only images can be uploaded my Friend :(');
                    }
                    return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
                }
            });

            uploader.onWhenAddingFileFailed = onWhenAddingFileFailed;
            uploader.onAfterAddingFile = onAfterAddingFile;
            uploader.onAfterAddingAll = onAfterAddingAll;
            uploader.onBeforeUploadItem = onBeforeUploadItem;
            uploader.onProgressItem = onProgressItem;
            uploader.onProgressAll = onProgressAll;
            uploader.onSuccessItem = onSuccessItem;
            uploader.onErrorItem = onErrorItem;
            uploader.onCompleteItem = onCompleteItem;
            uploader.onCompleteAll = onCompleteAll;
            uploader.onCancelItem = onCancelItem;

            return uploader;
        }


        return {
            create: create
        }
    }
})();
