'use strict';

describe('Service: sad', function () {

  // load the service's module
  beforeEach(module('vibeKillerApp'));

  // instantiate service
  var sad;
  beforeEach(inject(function (_sad_) {
    sad = _sad_;
  }));

  it('should do something', function () {
    expect(!!sad).toBe(true);
  });

});
