angular.module('ngBoilerplate.services', [] )
.factory('Feed',['$q', '$http', '$rootScope', '$log',function($q, $http, $rootScope, $log){
	return {
		BlogFeed : function(){
			$log.info(arguments);
				var q = $q.defer(),
				self = this,
				headers = {};

		$http.jsonp('http://jkefexjs.blogspot.com/feeds/posts/default?alt=json&callback=JSON_CALLBACK').success(function(data){ }).
			success(function (data, status, headers, config) {
              var res = Array.prototype.slice.call(arguments);
              res.push(q);
              self.BlogFeedSuccess.apply(self, res);
			}).
			error(function (data, status, headers, config) {
              var res = Array.prototype.slice.call(arguments);
              res.push(q);
              console.log(res);
              self.BlogFeedError.apply(self, res);
			});

			return q.promise;
		},
		BlogFeedSuccess : function(data, status, headers, config, q){
			$log.info(data);
			q.resolve(data);
		},
		BlogFeedError: function(data, status, headers, config, q){
			q.reject(status);
		},
		ResearchFeed : function(){

			$log.info(arguments);
				var q = $q.defer(),
				self = this,
				headers = {};

            $http.jsonp('http://kefexresearch.blogspot.com/feeds/posts/default?alt=json&callback=JSON_CALLBACK').success(function(data){ }).
			success(function (data, status, headers, config) {
              var res = Array.prototype.slice.call(arguments);
              res.push(q);
              self.ResearchFeedSuccess.apply(self, res);
			}).
			error(function (data, status, headers, config) {
              var res = Array.prototype.slice.call(arguments);
              res.push(q);

              console.log(res);
              self.ResearchFeedError.apply(self, res);
			});

			return q.promise;
		},
		ResearchFeedSuccess : function(data, status, headers, config, q){
			$log.info(data);
			q.resolve(data);
		},
		ResearchFeedError: function(data, status, headers, config, q){
			q.reject(status);
		},
		VideoFeed : function(){

			$log.info(arguments);
				var q = $q.defer(),
				self = this,
				headers = {};
           $http.get('http://gdata.youtube.com/feeds/users/jkefexjs/uploads?alt=json').success(function(data){ }).
			success(function (data, status, headers, config) {
              var res = Array.prototype.slice.call(arguments);
              res.push(q);
              self.VideoFeedSuccess.apply(self, res);
			}).
			error(function (data, status, headers, config) {
              var res = Array.prototype.slice.call(arguments);
              res.push(q);
              self.VideoFeedError.apply(self, res);
			});

			return q.promise;
		},
		VideoFeedSuccess : function(data, status, headers, config, q){
			$log.info(data);
			q.resolve(data);
		},
		VideoFeedError: function(data, status, headers, config, q){
			q.reject(status);
		}
	};
}])
.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});
