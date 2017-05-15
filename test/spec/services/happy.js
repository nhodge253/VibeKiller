'use strict';

describe('Service: happy', function () {

  // load the service's module
  beforeEach(module('vibeKillerApp'));

  // instantiate service
  var happy;
  beforeEach(inject(function (_happy_) {
    happy = _happy_;
  }));

  it('should do something', function () {
    expect(!!happy).toBe(true);
  });

});
