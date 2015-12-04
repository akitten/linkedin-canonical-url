var test       = require('tape');
var dir        = __dirname.split('/')[__dirname.split('/').length-1];
var file       = dir + __filename.replace(__dirname, '') + " > ";

var transform  = require('../lib/index.js');

test(file+'Transform polish url into wwww', function(t) {
  var polish   = 'https://sy.linkedin.com/pub/krzysztof-marzec/a7/576/b50?trk=biz_employee_pub';
  var result   = transform(polish);
  var expected = 'https://www.linkedin.com/in/krzysztof-marzec-b50576a7';
  t.equal(result, expected, "Polish url was successfully transformed");
  t.end();
});

test(file+'Transform Abdi url into canonical', function(t) {
  var polish   = 'https://uk.linkedin.com/pub/abdi-ahmed/100/384/6b0';
  var result   = transform(polish);
  var expected = 'https://www.linkedin.com/in/abdi-ahmed-6b0384100';
  t.equal(result, expected, "Abdi's (UK Public) profile url transformed");
  t.end();
});

test(file+'Transform Anita url into canonical', function(t) {
  var polish   = 'https://uk.linkedin.com/in/anitaczapla';
  var result   = transform(polish);
  var expected = 'https://www.linkedin.com/in/anitaczapla';
  t.equal(result, expected, "Anita's profile url transformed");
  t.end();
});
