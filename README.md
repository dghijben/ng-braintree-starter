# Angular + Braintree Dropin starter

Hopefully this is a useful starting point for those of you who want to use Braintree Dropin in your AngularJS app.

## Running the example

```bash
git clone git@github.com:jeffcarp/ng-braintree-starter.git
cd ng-braintree-starter
npm install
```

1. Get your merchant ID, client token, public key and private key from the [Sandbox](https://sandbox.braintreegateway.com/)
  - (Once you're in the Sandbox dashboard, go to Account>My User then click on "API Keys")
2. Put those credentials into [`app.js`](app.js)

```bash
npm start
```

You can view it at [http://localhost:9000](http://localhost:9000)
