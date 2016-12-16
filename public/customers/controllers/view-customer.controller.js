angular.module('customersApp.customers').controller('ViewCustomerController', function($scope){
    $scope.customer = {};

    $scope.save = function(){
        console.log('Save customer.');
    };
});