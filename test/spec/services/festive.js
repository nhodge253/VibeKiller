'use strict';

describe('Service: festive', function () {

  // load the service's module
  beforeEach(module('vibeKillerApp'));

  // instantiate service
  var festive;
  beforeEach(inject(function (_festive_) {
    festive = _festive_;
  }));

  it('should do something', function () {
    expect(!!festive).toBe(true);
  });

});
