angular.module('app').service('autoService', function ($http) {
var listaAuto = function(){
    return $http({
        url:'/auto',
        method:'GET',
    })
}
var creaAuto = function(nuovo){
    return $http({
        url:'/auto',
        method:'POST',
        data: nuovo
    })
}

var eliminaAuto = function(id) {
    return $http({
        url: '/auto/'+ id,
        method: 'DELETE',
    })
}

    
return {
listaAuto:listaAuto,
creaAuto:creaAuto,
eliminaAuto: eliminaAuto,
}
})