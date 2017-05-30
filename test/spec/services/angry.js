'use strict';

describe('Service: angry', function () {

  // load the service's module
  beforeEach(module('vibeKillerApp'));

  // instantiate service
  var angry;
  beforeEach(inject(function (_angry_) {
    angry = _angry_;
  }));

  it('should do something', function () {
    expect(!!angry).toBe(true);
  });

});
