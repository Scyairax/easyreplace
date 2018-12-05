angular.module('app').controller('utentiController', function ($scope, utente, utenteService) {

    $scope.utente = utente
    console.log($scope.utente)

    $scope.eliminaUtente = function (id) {
        utenteService.eliminaUtente(id)
            .then(response => {
                return utenteService.listaUtenti()
            })
            .then(response => {
                $scope.utente = response.data
            })
    }

    $scope.creaUtente = function () {
        utenteService.creaUtente($scope.nuovoutente)
            .then(response => {
                return utenteService.listaUtenti()
            })
            .then(response => {
                $scope.utente = response.data
            })
    }

})