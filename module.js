angular.module('ng-braintree', [])
  .directive('braintreePaymentForm', function() {
    return {
      template: '<form id="checkout" \
                       method="post" \
                       action="/checkout"> \
                  <div id="dropin"></div> \
                  <input type="submit" \
                         value="Pay $10"> \
                </form>',
      controller: function($http) {
        $http.get('/client_token').success(function(token) {
          braintree.setup(token, 'dropin', {
            container: 'dropin'
          });
        });
      }
    }
  });
