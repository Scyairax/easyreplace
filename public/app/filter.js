angular.module("app").filter('maiuscolo', function () {


    return function (input) {
        return input.toUpperCase()
    }
})

    .filter('filtraVersione', function () {
        return function (input, versione) {
           if(!versione) return input
            return input.filter(el => el.versione == versione)
        }
    })