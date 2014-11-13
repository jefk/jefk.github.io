angular.module('dot-red-3', ['ngRoute', 'dot-red-3-main', 'templates']).config(function($routeProvider) {
  return $routeProvider.otherwise({
    redirectTo: '/'
  });
});

'app controller goes here';


angular.module('dot-red-3').directive('haxPageScroller', function() {
  console.log('here');
  return {};
});

'common service goes here';


angular.module('dot-red-3-main', ['ngRoute']).config(function($routeProvider) {
  return $routeProvider.when('/', {
    templateUrl: 'main/main.html',
    controller: 'MainCtrl'
  });
}).controller('MainCtrl', function($scope) {
  return console.log($('section'));
});
