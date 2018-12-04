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



    var modificaAuto = function (modifica, id) {
        return $http({
            url: '/api/auto/' + id,
            method: 'PUT',
            data: modifica
        })
    }
    
return {
listaAuto:listaAuto,
creaAuto:creaAuto,
eliminaAuto: eliminaAuto,
cercaAuto:cercaAuto,
    modificaAuto: modificaAuto,
}
})