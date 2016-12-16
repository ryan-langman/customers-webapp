angular.module('customersApp.customers').controller('AddCustomerController', function($scope){
    $scope.customer = {};

    $scope.create = function(){
        console.log('Create customer.');
    };
});