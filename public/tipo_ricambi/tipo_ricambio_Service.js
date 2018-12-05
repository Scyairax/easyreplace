angular.module('app').service('ricambioService', function ($http) {
    var listaRicambi = function(){
        return $http({
            url:'/api/ricambi',
            method:'GET',
        })
    }

    return {
    listaRicambi:listaRicambi
    
    }
    })