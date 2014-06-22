angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ngBoilerplate.contact',
  'ngBoilerplate.portfolio',
  'ngBoilerplate.research',
  'ngBoilerplate.blog',
  'ngBoilerplate.videos',
  'ui.router',
  'ui.bootstrap'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider) {
  //$locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  
  $scope.brandtitle = "Kiran Kumar";

  $scope.location = "Hyderabad";

  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Kiran Kumar' ;
    }
  });

});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });

    // Fluid Videos

    $('.video-wrapper').fitVids();

    $('.navbar-brand').hover(function(){
      $(this).addClass('rotateIn');
    },function(){
      $(this).removeClass('rotateIn');
    });

    var counter = 0, // to keep track of current slide
    $items = $('.diy-slideshow figure'), // a collection of all of the slides, caching for performance
    numItems = $items.length; // total number of slides

    // this function is what cycles the slides, showing the next or previous slide and hiding all the others
    var showCurrent = function(){
        var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show  
       
      $items.removeClass('show'); // remove .show from whichever element currently has it
      $items.eq(itemToShow).addClass('show');    
    };

    // add click events to prev & next buttons 
    $('.next').on('click', function(){
        counter++;
        showCurrent(); 
    });
    $('.prev').on('click', function(){
        counter--;
        showCurrent(); 
    });

    // if touch events are supported then add swipe interactions using TouchSwipe https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
    if('ontouchstart' in window){
      $('.diy-slideshow').swipe({
        swipeLeft:function() {
          counter++;
          showCurrent(); 
        },
        swipeRight:function() {
          counter--;
          showCurrent(); 
        }
      });
    }
});




