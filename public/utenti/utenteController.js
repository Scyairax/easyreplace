angular.module('app').controller('utenteController', function ($scope, utente, utenteService, $state) {

    $scope.utente = utente
    //console.log($scope.utente)

    $scope.eliminaUtente = function (id) {
        utenteService.eliminaUtente(id)
            .then(response => {
                $state.go('utente')
            })
    }

    $scope.modificaUtente = function () {
        utenteService.modificaUtente($scope.utente, $scope.utente._id)
            .then(response => {
                $state.go('utente')
                //console.log(response.data)
            })
            .then(response => {
                $scope.utente = response.data
                //console.log(response.data)
            })
    }
})