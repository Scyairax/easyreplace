angular.module('app').controller('demolitoreController', function ($scope, demolitore, demolitoreService, $state, officine) {

    $scope.demolitore = demolitore
    $scope.officine = officine
    //console.log($scope.demolitore)

    $scope.eliminaDemolitore = function (id) {
        demolitoreService.eliminaDemolitore(id)
            .then(response => {
                $state.go('demolitore')
            })
    }

    $scope.modificaDemolitore = function () {
        demolitoreService.modificaDemolitore($scope.demolitore, $scope.demolitore._id)
            .then(response => {
                $state.go('demolitore')
                //console.log(response.data)
            })
            .then(response => {
                $scope.demolitore = response.data
                //console.log(response.data)
            })
    }
})