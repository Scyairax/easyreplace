angular.module('app').controller('demolitoriController', function ($scope, demolitore, demolitoreService) {

    $scope.demolitore = demolitore
    console.log($scope.demolitore)

    $scope.eliminaDemolitore = function (id) {
        demolitoreService.eliminaDemolitore(id)
            .then(response => {
                return demolitoreService.listaDemolitori()
            })
            .then(response => {
                $scope.demolitore = response.data
            })
    }

    $scope.creaDemolitore = function () {
        demolitoreService.creaDemolitore($scope.nuovodemolitore)
            .then(response => {
                return demolitoreService.listaDemolitori()
            })
            .then(response => {
                $scope.demolitore = response.data
            })
    }

})