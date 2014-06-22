angular.module( 'ngBoilerplate.contact', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'contact', {
    url: '/contact',
    views: {
      "main": {
        controller: 'contactCtrl',
        templateUrl: 'contact/contact.tpl.html'
      }
    },
    data:{ pageTitle: 'Contact' }
  });
})

.controller( 'contactCtrl', function contactCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
})

;
