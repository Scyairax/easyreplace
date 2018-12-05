angular.module('app').controller('autosController', function ($scope, auto, autoService) {

    $scope.auto = auto



    $scope.eliminaAuto = function (id) {
        autoService.eliminaAuto(id)
            .then(response => {
                return autoService.listaAuto()
            })
            .then(response => {
                $scope.auto = response.data
            })
    }


    $scope.creaAuto = function () {
        autoService.creaAuto($scope.nuovaauto)
            .then(response => {
                return autoService.listaAuto()
            })
            .then(response => {
                $scope.auto = response.data
            })
    }
    
   

})