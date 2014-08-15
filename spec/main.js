var app = require('../examples/app');

var server;
var startServer = function(cb) {
  server ? cb() : app.listen(4001, cb);
};

describe('angularjs homepage', function() {

  // Hopefully temp hack
  beforeEach(startServer);

  it('should have a title', function() {
    browser.driver.get('http://localhost:4001/');
    expect(browser.driver.getTitle()).toEqual('Braingular');
  });

});
