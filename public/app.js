$(function () {
    angular.bootstrap(document, ['customersApp']);
});

angular.module('customersApp', [
    'ngMessages',

    'ui.router',
    'ui.mask',

    'customersApp.home',
    'customersApp.customers'
    
    ])

.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('app', {
            url: '/',
            views: {
                root: {
                    templateUrl: 'layout/layout.html',
                    controller: function($scope, $state){
                        $scope.state = $state;
                    }
                }
            }
        })

    $urlRouterProvider.otherwise('/home');
});