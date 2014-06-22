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
  
    $scope.aboutDescription = "I'm Kiran, working as UI Developer & Researcher in India."+" I've a passion to Front End Development in Computer Science"+" in Graphics & Image Processing in Mobile, Web & Desktop.";
    $scope.Experience = "1 year in Corporate Companies & a lot more Academical Experience";
    $scope.Skills = "HTML5 (Core Specifications), Core Javascript (ECMA), CSS3, SVG, Node JS, Front End Frameworks in Javascvript (JQuery, Angular JS & D3 JS), Unit Testing with Testing Frameworks (Jasmine)";
    $scope.name = "My Introduction Video";

});
