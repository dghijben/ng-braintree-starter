exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./**/*.js'],
  capabilities: {
    browserName: 'phantomjs',
    'phantomjs.binary.path': './node_modules/phantomjs/bin/phantomjs'
  }
}
