var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose');
var Customer    = require('./server/models/customers');

var port = process.env.PORT || 4000;
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('build'))
app.use(express.static('public'))

router.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.use('/api', router);

router.route('/customers')
  .post(function(req, res){
    var customer = new Customer();
    
    customer.firstName = req.body.firstName;
    customer.surname = req.body.surname;
    customer.address = req.body.address;
    customer.phone = req.body.phone;
    customer.email = req.body.email;
    customer.idNumber = req.body.idNumber;
    
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
    Customer.findById(req.params.customer_id, function(err){
        if(err){ res.send(err); }
      
    }).remove(function(err){
        if(err){ res.send(err); }

        res.json({ message: 'Customer deleted' })
    })
  })

  .put(function(req, res){
    Customer.findById(req.params.customer_id, function(err, customer){
      if(err){ res.send(err); }

        customer.firstName = req.body.firstName;
        customer.surname = req.body.surname;
        customer.address = req.body.address;
        customer.phone = req.body.phone;
        customer.email = req.body.email;
        customer.idNumber = req.body.idNumber;
        customer.modified = new Date().toISOString();

      customer.save(function(err){
        if(err){ res.send(err); }
        
        res.json({ message: 'Customer updated' })
      });
    });
  });

app.listen(port, function(){
  console.log('Listening on port 4000...');
});

mongoose.connect('mongodb://localhost/customersdb');