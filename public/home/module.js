angular.module('customersApp.home', ['ui.router']).config(function($stateProvider){
    
    $stateProvider
        .state('app.home', {
            url: 'home',
            views: {
                content: {
                    templateUrl: 'home/home.html',
                    controller: 'HomeController'
                }
            }
        })

});