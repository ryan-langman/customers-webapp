angular.module('customersApp.customers').controller('AddCustomerController', function($scope, $state, CustomerService, ngToast){
    $scope.customer = {};

    $scope.save = function(){
        CustomerService.create($scope.customer)
            .then(function(result){
                ngToast.create({
                    className: 'success',
                    content: 'Customer: ' + $scope.customer.firstName + ' ' + $scope.customer.surname + ' saved.'
                });
                $state.go('app.customers.list');
            })
            .catch(function(){
                ngToast.create({
                    className: 'warning',
                    content: 'Problem saving customer. Please try again.'
                });
            });
    };
});