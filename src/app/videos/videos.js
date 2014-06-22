angular.module( 'ngBoilerplate.videos', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'ngBoilerplate.services'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'videos', {
    url: '/videos',
    views: {
      "main": {
        controller: 'videosCtrl',
        templateUrl: 'videos/videos.tpl.html'
      }
    },
    data:{ pageTitle: 'Videos' }
  });
})

.controller( 'videosCtrl', function videosCtrl( $scope, $http , $sce, Feed, $timeout) {

  $scope.entryLimit = 6; //max rows for data table

  Feed.VideoFeed().then(function(data){
      $scope.vids = data.feed.entry;
      $scope.videosUrls = [];
      $scope.vids.forEach(function(v,i){
        var tempArr = v.id['$t'].split("/");
        $scope.url = "//www.youtube.com/embed/"+tempArr[tempArr.length-1];
        $scope.videosUrls[i] = {"id":$sce.trustAsResourceUrl($scope.url),"title":v.title['$t'],"description":v.media$group['media$description']['$t']};
      });
  });

})
.filter('startFrom', function() {
    return function(input, start) {
        if(input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    };
});
