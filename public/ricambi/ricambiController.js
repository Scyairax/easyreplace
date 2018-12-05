angular.module('app').controller('ricambiCtrlr', function ($scope, ricambi, ricambioService, $state) {

    $scope.ricambi = ricambi
    console.log($scope.ricambi)

    $scope.eliminaRicambio = function (id) {
        ricambioService.eliminaRicambio(id)
            .then(response => {
        return ricambioService.listaRicambi()
            })
            .then(response => {
            $scope.ricambi = response.data
        })
    }
    








    }

)
