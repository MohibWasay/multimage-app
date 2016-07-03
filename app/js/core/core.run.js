'use strict';

var module = 'multimage.core'; 

angular.
  .module(module, [])
  .run(routingEvents)
;

function routingEvents($rootScope, lodash){
  $rootScope.$on('$stateChangeStart', onStateChanged);

  function onStateChanged(){
    console.log(lodash);
  }
}
