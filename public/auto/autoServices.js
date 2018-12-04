angular.module('app').service('autoService', function ($http) {
var listaAuto = function(){
    return $http({
        url:'/api/auto',
        method:'GET',
    })
}
var creaAuto = function(nuovo){
    return $http({
        url:'/api/auto',
        method:'POST',
        data: nuovo
    })
}

var eliminaAuto = function(id) {
    return $http({
        url: '/api/auto/'+ id,
        method: 'DELETE'
        
    })
}
var cercaAuto = function(id) {
    return $http({
        url: '/api/auto/'+id,
        method: 'GET',
    })
}
    
return {
listaAuto:listaAuto,
creaAuto:creaAuto,
eliminaAuto: eliminaAuto,
cercaAuto:cercaAuto,
}
})