angular.module( 'ngBoilerplate.research', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'ngBoilerplate.services'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'research', {
    url: '/research',
    views: {
      "main": {
        controller: 'researchCtrl',
        templateUrl: 'research/research.tpl.html'
      }
    },
    data:{ pageTitle: 'Research' }
  });
})

.controller( 'researchCtrl',function researchCtrl( $scope , Feed) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];

// This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];

  Feed.ResearchFeed().then(function(data){
      $scope.blog = data.feed.entry;
      $scope.thumbnail = data.feed.author[0].gd$image.src;
  });


});
