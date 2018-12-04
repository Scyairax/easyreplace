angular.module('app').controller('autoController', function ($scope, autoService){


    $scope.auto= []

function init() {  

    autoService.listaAuto().then(risposta =>{
        $scope.auto = risposta.data
    })

}
init()



$scope.inserisci = function (){
autoService.creaAuto($scope.nuovaauto)
.then(response => { 
    init()
})
}



$scope.eliminaAuto = function (id){
autoService.eliminaAuto(id)
.then(response => { 
    init()
})
}






})
