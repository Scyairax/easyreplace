angular.module('app').service('utenteService', function ($http) {

    var listaUtenti = function () {
        return $http({
            url: '/api/utenti?tipo=utente',
            method: 'GET',
        })
    }

    var listaOfficine = function () {
        return $http({
            url: '/api/utenti?tipo=officina',
            method: 'GET',
        })
    }

    var creaUtente = function (nuovo) {
        return $http({
            url: '/api/utenti',
            method: 'POST',
            data: nuovo
        })
    }

    var eliminaUtente = function (id) {
        return $http({
            url: '/api/utenti/' + id,
            method: 'DELETE'

        })
    }
    var cercaUtente = function (id) {
        return $http({
            url: '/api/utenti/' + id,
            method: 'GET',
        })
    }

    var modificaUtente = function (modifica, id) {
        return $http({
            url: '/api/utenti/' + id,
            method: 'PUT',
            data: modifica
        })
    }

    return {
        listaUtenti: listaUtenti,
        listaOfficine: listaOfficine,
        creaUtente: creaUtente,
        eliminaUtente: eliminaUtente,
        cercaUtente: cercaUtente,
        modificaUtente: modificaUtente
    }
})