'use strict';

describe('Controller: SadCtrl', function () {

  // load the controller's module
  beforeEach(module('vibeKillerApp'));

  var SadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SadCtrl = $controller('SadCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SadCtrl.awesomeThings.length).toBe(3);
  });
});
