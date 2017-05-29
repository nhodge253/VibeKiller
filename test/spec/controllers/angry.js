'use strict';

describe('Controller: AngryCtrl', function () {

  // load the controller's module
  beforeEach(module('vibeKillerApp'));

  var AngryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AngryCtrl = $controller('AngryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AngryCtrl.awesomeThings.length).toBe(3);
  });
});
