angular.module('customersApp.home', ['ui.router']).config(function($stateProvider){
    
    $stateProvider
        .state('app.home', {
            url: 'home',
            views: {
                content: {
                    templateUrl: 'home/home.html',
                    controller: 'HomeController',
                    resolve: {
                        customersToday: function(CustomerService){
                            return CustomerService.getTodaysCount().then(function(result){
                                return result.data;
                            });
                        }
                    }
                }
            }
        })

});