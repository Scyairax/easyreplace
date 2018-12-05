angular.module('app').service('ricambioService', function ($http) {
   

   
    var listaRicambi = function () {
        return $http({
            url:'/api/ricambi',
            method:'GET',
        })
    }

    var eliminaRicambio = function(id){
        return $http({
            url:'/api/ricambi/'+ id,
            method:'DELETE',
        })
    }

    

    return {
        listaRicambi: listaRicambi,
        eliminaRicambio:eliminaRicambio
    
    }
    })