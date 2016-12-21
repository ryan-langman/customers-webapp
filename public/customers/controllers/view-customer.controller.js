angular.module('customersApp.customers').controller('ViewCustomerController', function($scope, customer, $state, CustomerService){
    $scope.customer = customer;

    $scope.save = function(){
        CustomerService.update($scope.customer).then(function(result){
            ngToast.create({
                className: 'success',
                content: 'Customer with ID ' + customerId + ' deleted.'
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