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
            templateUrl: 'customers/views/customer.html',
            controller: 'AddCustomerController'
        })
        .state('app.customers.view', {
            url: '/view/:customer_id',
            templateUrl: 'customers/views/customer.html',
            controller: 'ViewCustomerController'
        });

});