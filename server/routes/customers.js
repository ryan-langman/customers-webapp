var express     = require('express');
var router      = express.Router();
var Customer    = require('../models/customers');

router.route('/customers')
  .post(function(req, res){
    var customer = new Customer();
    customer.Name = 'Ryan';
    
    customer.save(function(err){
      if(err){ res.send(err); }

      res.json({ message: 'Customer created' });
    })
  })

  .get(function(req, res){
    Customer.find(function(err, customers){
      if(err){ res.send(err); }

      res.json(customers);
    })
  });

router.route('/customers/:customer_id')
  .get(function(req, res){
    Customer.findById(req.params.customer_id, function(err, customer){
      if(err){ res.send(err); }

      res.json(customer);
    });
  })

  .delete(function(req, res){
    Customer.findById(req.params.customer_id, function(){
        if(err){ res.send(err); }
      
    }).remove(function(err){
        if(err){ res.send(err); }

        res.json({ message: 'Customer deleted' })
    })
  })

  .put(function(req, res){
    Customer.findById(req.params.customer_id, function(err, customer){
      if(err){ res.send(err); }

      customer.name = req.body.name;

      customer.save(function(err){
        if(err){ res.send(err); }
        
        res.json({ message: 'Customer updated' })
      });
    });
  });

  module.exports = router