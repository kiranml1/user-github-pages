angular.module( 'ngBoilerplate.blog', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'ngBoilerplate.services'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'blog', {
    url: '/blog',
    views: {
      "main": {
        controller: 'blogCtrl',
        templateUrl: 'blog/blog.tpl.html'
      }
    },
    data:{ pageTitle: 'Blog' }
  });
})

.controller( 'blogCtrl', function blogCtrl( $scope, $http , $sce, Feed) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];

  Feed.BlogFeed().then(function(data){
      $scope.blog = data.feed.entry;
      $scope.thumbnail = data.feed.author[0].gd$image.src;
  });

});