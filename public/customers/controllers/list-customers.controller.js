angular.module('customersApp.customers').controller('ListCustomersController', function($scope, customers, CustomerService, ngToast){
    $scope.customers = customers;
    $scope.paginator = {
        currentPage: 1,
        itemsPerPage: 10,
        numPages: 0
    };

    $scope.pageCustomers = function(){
        $scope.pagedCustomers = $scope.customers.slice(
            ($scope.paginator.currentPage - 1) * $scope.paginator.itemsPerPage,
            $scope.paginator.currentPage * $scope.paginator.itemsPerPage
        );
    };

    $scope.delete = function(customerId){
        CustomerService.delete(customerId)
            .then(function(result){
                ngToast.create({
                    className: 'success',
                    content: 'Customer with ID ' + customerId + ' deleted.'
                });

                // Quick and dirty. Not ideal for massive collections but gets the job done.
                angular.forEach($scope.customers, function(value, index){
                    if(value._id === customerId){
                        $scope.customers.splice($scope.customers.indexOf(value), 1);
                        $scope.pageCustomers();
                    }
                });
            })
            .catch(function(){
                ngToast.create({
                    className: 'warning',
                    content: 'Could not deleted customer with ID ' + customerId + '.'
                });
            });
    };

    $scope.pageCustomers();
});