angular.module('customersApp.home').controller('HomeController', function($scope, customersToday){
    $scope.customersToday = customersToday;
});