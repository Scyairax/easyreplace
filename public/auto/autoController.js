angular.module('app').controller('autoController', function ($scope, auto, autoService, $state) {

    $scope.auto = auto
    console.log($scope.auto)


    $scope.eliminaAuto = function (id) {
        autoService.eliminaAuto(id)
            .then(response => {
                $state.go('auto')
            })
    }


    // $scope.inserisci = function () {
    //     autoService.creaAuto($scope.nuovaauto)
    //         .then(response => {
    //            $state.go('auto')
    //         })
    // }







})