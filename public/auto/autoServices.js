angular.module('app').service('autoService', function ($http) {
var listaAuto = function(){
    return $http({
        url:'/auto',
        method:'GET',
    })
}

    
return {
listaAuto:listaAuto,
}
})