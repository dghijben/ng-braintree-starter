var braintree = require('braintree');
var app = require('express')();

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "8t9kz9kbkcfh6nv5",
  publicKey: "rfbnkkh2rtykqw9c",
  privateKey: "20f41a1fb1066aa7079a813847bbd836"
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
});

var oneUp = __dirname.replace('/examples', '');

app.get('/braintree.js', function(req, res) {
  res.sendFile(oneUp + '/braintree.js')
});

app.get('/module.js', function(req, res) {
  res.sendFile(oneUp + '/module.js')
});

app.get("/client_token", function (req, res) {
  gateway.clientToken.generate({
  }, function (err, response) {
    res.send(response.clientToken);
  });
});

app.listen(4000);
