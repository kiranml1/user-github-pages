angular.module( 'ngBoilerplate.about', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'about', {
    url: '/about',
    views: {
      "main": {
        controller: 'AboutCtrl',
        templateUrl: 'about/about.tpl.html'
      }
    },
    data:{ pageTitle: 'About' }
  });
})

.controller( 'AboutCtrl', function AboutCtrl( $scope ) {
  
    $scope.aboutDescription = "I'm Kiran, Front End Developer & Researcher in India."+" I've a extreme passion to Front End Development and Computer Science"+" with Graphics & Image Processing in Mobile, Web & Desktop.";
    $scope.Experience = "2 years of Corporate & Open Source Front End Development";
    $scope.Skills = "HTML5 (Core Specifications), Core Javascript (ECMA), CSS3, SVG, Node JS, Front End Frameworks in Javascript (JQuery, Angular JS & D3 JS), Unit Testing with Testing Frameworks (Jasmine)";

});
