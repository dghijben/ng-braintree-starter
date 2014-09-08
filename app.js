var braintree = require('braintree');
var express = require('express');
var app = express();
app.use(express.static(__dirname));

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "your_merchant_id",
  publicKey: "your_public_key",
  privateKey: "your_private_key"
});

app.get("/client_token", function(req, res) {
  gateway.clientToken.generate({
  }, function(err, response) {
    res.send(response.clientToken);
  });
});

app.get("/purchase_something", function(req, res) {
  gateway.transaction.sale({
    amount: req.query['amount'] + '.00',
    paymentMethodNonce: req.query['payment_method_nonce'],
  }, function(err, result) {
    console.log(err, result);
    res.redirect('/');
  });
});

app.listen(9000, function() {
  console.log("Server now listening on port 9000.");
});
