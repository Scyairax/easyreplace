angular.module('app').service('demolitoreService', function ($http) {
    
    var listaDemolitori = function () {
        return $http({
            url: '/api/demolitori',
            method: 'GET',
        })
    }

    var creaDemolitore = function (nuovo) {
        return $http({
            url: '/api/demolitori',
            method: 'POST',
            data: nuovo
        })
    }

    var eliminaDemolitore = function (id) {
        return $http({
            url: '/api/demolitori/' + id,
            method: 'DELETE'

        })
    }
    var cercaDemolitore = function (id) {
        return $http({
            url: '/api/demolitori/' + id,
            method: 'GET',
        })
    }

    var modificaDemolitore = function (modifica, id) {
        return $http({
            url: '/api/demolitori/' + id,
            method: 'PUT',
            data: modifica
        })
    }

    return {
        listaDemolitori: listaDemolitori,
        creaDemolitore: creaDemolitore,
        eliminaDemolitore: eliminaDemolitore,
        cercaDemolitore: cercaDemolitore,
        modificaDemolitore: modificaDemolitore,
    }
})