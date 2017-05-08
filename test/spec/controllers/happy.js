'use strict';

describe('Controller: HappyCtrl', function () {

  // load the controller's module
  beforeEach(module('vibeKillerApp'));

  var HappyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HappyCtrl = $controller('HappyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HappyCtrl.awesomeThings.length).toBe(3);
  });
});
