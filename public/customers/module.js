angular.module('customersApp.customers', ['ui.router']).config(function($stateProvider){
    
    $stateProvider
        .state('app.customers', {
            abstract: true,
            url: 'customers',
            views: {
                content: {
                    template: '<ui-view/>'
                }
            }
        })
        .state('app.customers.list', {
            url: '/list',
            templateUrl: 'customers/views/list-customers.html',
            controller: 'ListCustomersController'
        })
        .state('app.customers.add', {
            url: '/add',
            templateUrl: 'customers/views/add-customers.html',
            controller: 'AddCustomersController'
        });

});