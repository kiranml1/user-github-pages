angular.module( 'ngBoilerplate.portfolio', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'portfolio', {
    url: '/portfolio',
    views: {
      "main": {
        controller: 'portfolioCtrl',
        templateUrl: 'portfolio/portfolio.tpl.html'
      }
    },
    data:{ pageTitle: 'Portfolio' }
  });
})

.controller( 'portfolioCtrl', function portfolioCtrl( $scope , $modal) {

   $scope.portItems = {"html5":
                        [
                          {'title':'WebRTC Experiment','href':'http://kiranml1.github.io/researchdemos/demos/videochat/','description':'HTML5 WebRTC Specification'},
                          {'title':'HTML5 File Upload','href':'http://kiranml1.github.io/researchdemos/demos/localfileupload/','description':'HTML5 File Upload'},
                          {'title':'Physical Simulation - Particles','href':'http://kiranml1.github.io/researchdemos/demos/particles/','description':'Particles Simulation'},
                          {'title':'Paper JS Physical Simulation - Particles','href':'http://kiranml1.github.io/researchdemos/demos/paperjs-particles/','description':'Paper JS - Particles Simulation'},
                          {'title':'Web-Audio Analysing Experiment','href':'http://kiranml1.github.io/researchdemos/demos/webaudiovis-canvas/','description':'Web-Audio Analyser - HTML5 Specification'},
                          {'title':'Web Audio Experiment','href':'http://kiranml1.github.io/researchdemos/demos/webaudio/','description':'Web Audio - HTML5 Specification'},
                          {'title':'Web Video Recording','href':'http://kiranml1.github.io/researchdemos/demos/webmvideo/','description':'Web VIdeo Recording - Canvas - HTML5 Specification'}
                        ],
                        "Flash":
                        [
                          {'title':'Interactive Flash Application - KEFEX','href':'http://kiranml1.github.io/researchdemos/demos/flashfan/demo/','description':'Action Script 3.0 - Flash Animation'},
                          {'title':'Interactive Flash Application - Love Transformers','href':'http://kiranml1.github.io/researchdemos/demos/flashfan/demo/','description':'Action Script 3.0 - Flash Animation'},
                          {'title':'Cartooon Movie - 2D Animation','href':'https://www.youtube.com/watch?v=nMOKoZIv6LE','description':'Action Script 3.0 - 2D Animation','data':'flash'},
                          {'title':'IIM Cartooon Animation Event - 2D Animation','href':'https://www.youtube.com/watch?v=WauQ37nMCY4','description':'Action Script 3.0 - 2D Animation','data':'flash'}
                        ],
                        "visual":
                        [
                          {'title':'D3 JS - Cartooon Show','href':'http://kiranml1.github.io/researchdemos/demos/d3-svg/','description':'D3 JS - Cartoon Simulation in Ocean Water'},
                          {'title':'D3 JS - Win-Loss Chart','href':'http://kiranml1.github.io/researchdemos/demos/d3js-win-loss%20-barchart/','description':'D3 JS Win-Loss Visualisation'},
                          {'title':'D3 JS - Bar Chart','href':'http://kiranml1.github.io/researchdemos/demos/d3jsbarchart/','description':'D3 JS Bar Chart Visualisation'},
                          {'title':'D3 JS - Bar Chart','href':'http://kiranml1.github.io/researchdemos/demos/d3jsbarchart/','description':'D3 JS Bar Chart Visualisation'},
                          {'title':'D3 JS - Funnel Chart','href':'http://kiranml1.github.io/researchdemos/demos/d3jsfunnel/','description':'D3 JS Funnel Chart Visualisation'},
                          {'title':'D3 JS - Force Layout - Tree','href':'http://kiranml1.github.io/researchdemos/demos/d3-forcelayout/','description':'D3 JS - Force Layout - Tree'},
                          {'title':'D3 JS - Treemap','href':'http://kiranml1.github.io/researchdemos/demos/d3jstreemap/','description':'D3 JS - Treemap'}
                        ],
                        "graphic":
                        [
                          {'title':'EXTJS-Facebook','href':'http://jkefexphp.appspot.com/','description':'EXTJS-Facebook Inetraged Application'},
                          {'title':'Audio Recorder','href':'http://kiranml1.github.io/researchdemos/demos/audio-recorder/','description':'HTML5 Audio Recorder - Web-Audio'},
                          {'title':'D3 JS - Path Drawing Implementation','href':'http://kiranml1.github.io/researchdemos/demos/canvas-d3/','description':'D3 JS Drawing Path Implementation'},
                          {'title':'SIP Client','href':'http://kiranml1.github.io/researchdemos/demos/sip/','description':'HTML5 SIP Client Application'},
                          {'title':'D3 JS Palm Path','href':'http://kiranml1.github.io/researchdemos/demos/d3js-hand/','description':'D3 JS - Palm Path'},
                          {'title':'HTML5 Web Workers','href':'http://kiranml1.github.io/researchdemos/demos/workers/','description':'HTML5 Web Workers'}
                        ],
                        "work":
                        [
                          {'title':'Lyris - Racerx','href':'http://lyris.com/us-en/','description':'Inetraged Digital Marketing ( Working Project )'},
                          {'title':'Tripanzee','href':'http://tweb.tripanzee.com/','description':'Singapore Social Network Tripping'},
                          {'title':'Perzo','href':'https://www.perzo.com/','description':'Personnel Network & Chatting Application'},
                          {'title':'Deloitte - DSNAP','href':'http://www.deloitte.com/','description':'DSNAP - Deloitte Reverse Bidding Stock Trading Project for Bidders & Consumers'},
                          {'title':'Asvida Asia | Singapore','href':'http://www.asvidaasia.com/','description':'Asvida Asia - Branding Site in Multiple Countries'}
                        ],
                        "image":
                        [
                          {'title':'CSS3 Web-Filters','href':'http://kiranml1.github.io/researchdemos/demos/webfilters/','description':'CSS3 Web-Filters Image Processing Application'},
                          {'title':'D3 JS - Line Graph','href':'http://bl.ocks.org/kiranml1/6872115','description':'D3 JS Line Graph - Code Sample'},
                          {'title':'HTML5 History','href':'http://kiranml1.github.io/researchdemos/demos/history','description':'HTML5 History Experiment'},
                          {'title':'HTML5 Blob Images','href':'http://kiranml1.github.io/researchdemos/demos/blobdata/','description':'HTML5 Blob Images'},
                          {'title':'HTML5 Video Element - Customization','href':'http://kiranml1.github.io/researchdemos/demos/videojs/','description':'HTML5 - Video JS'},
                          {'title':'Document Presentation','href':'http://kiranml1.github.io/researchdemos/demos/google-doc-demo/','description':'Document Presentation'}
                        ]
                      };

   $scope.open = function (size,title,index) {

    var modalInstance = $modal.open({
      templateUrl: 'portfolio/modal.tpl.html',
      controller: function($scope, $modalInstance, json, index) {

        $scope.title = title;

        if(index !== undefined)
        {
          $scope.item = json[index];
          console.log($scope.item);
        }else {
          $scope.item = [];
        }

        $scope.ok = function () {
          $modalInstance.close();
        };

        $scope.cancel = function () {
          $modalInstance.dismiss('cancel');
        };
      },
      size: size,
      resolve: {
        json: function () {
          return $scope.portItems;
        },
        index:function () {
          return index;
        }
      }
    });

    modalInstance.result.then(function () {
      //$scope.selected = selectedItem;
    }, function () {
      //$log.info('Modal dismissed at: ' + new Date());
    });
  };

});
