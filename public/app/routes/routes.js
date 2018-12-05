angular.module('app').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {


    $locationProvider.html5Mode(true).hashPrefix('!')
    $urlRouterProvider.otherwise('/')
    $urlRouterProvider.when('', '/')

    $stateProvider.state('/', {
        url: '/',
        template: '<h1>HOME PAGE</h1>'
    })
    .state('auto', {
        url: '/auto',
        templateUrl: '/public/auto/page/auto.html',
        controller: 'autosController',
        // prima di entrare in questa rotta risolvimi delle proprieta
        resolve: {
            auto: async function (autoService) {
                var risposta = await autoService.listaAuto()
                return risposta.data
            },
        }
    })




    .state('autodettaglio', {
            url: '/auto/{id:[0-9a-f]{24}}',
            templateUrl: '/public/auto/page/autodettaglio.html',
            controller: 'autoController',
            resolve: {
                auto: async function (autoService, $stateParams) {
                    var risposta = await autoService.cercaAuto($stateParams.id)
                    return risposta.data
                },

            }
        })
   



    
        
    }
)