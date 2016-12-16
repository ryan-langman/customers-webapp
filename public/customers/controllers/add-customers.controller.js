angular.module('customersApp.customers').controller('AddCustomersController', function($scope){
    $scope.customer = {};

    $scope.save = function(){
        console.log('Save customer.');
    };
});