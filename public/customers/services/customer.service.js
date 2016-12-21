angular.module('customersApp.customers').service('CustomerService', function($http){

    this.create = function(customer) {
        return $http.post('/api/customers', customer).then(function(result) {
            return result;
        });
    };

    this.update = function(customer) {
        return $http.put('/api/customers/' + customer._id, customer).then(function(result) {
            return result;
        });
    };

    this.delete = function(customerId) {
        return $http.delete('/api/customers/' + customerId).then(function(result) {
            return result;
        });
    };

    this.get = function(customerId) {
        return $http.get('/api/customers/' + customerId).then(function(result) {
            return result;
        });
    };

    this.getAll = function() {
        return $http.get('/api/customers').then(function(result) {
            return result;
        });
    };

    this.getTodaysCount = function(){
        return $http.get('/api/customers/stats').then(function(result){
            return result;
        });
    };
});