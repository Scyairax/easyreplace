angular.module('app').controller('autoController', function ($scope, auto, autoService, $state) {

    $scope.auto = auto
    console.log($scope.auto)


    $scope.eliminaAuto = function (id) {
        autoService.eliminaAuto(id)
            .then(response => {
                $state.go('auto')
            })
    }


    $scope.modificaAuto = function () {
        autoService.modificaAuto($scope.auto, $scope.auto._id)
            .then(response => {
                $state.go('auto')
            })
            .then(response => {
                $scope.auto = response.data
            })
    }








})