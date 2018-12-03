angular.module('app').controller('autoController', function ($scope, autoService){
autoService.listaAuto()
.then(response => {
    console.log(response)
})
})
