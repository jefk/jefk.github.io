angular.module('dot-red-3', ['ngRoute', 'templates']).config(function($routeProvider) {
  return $routeProvider.otherwise({
    redirectTo: '/'
  });
});

'app controller goes here';


angular.module('dot-red-3').config(function($routeProvider) {
  return $routeProvider.when('/case-study', {
    templateUrl: 'case_study/case_study.html'
  });
});

angular.module('dot-red-3').directive('haxPageScroller', function() {
  console.log('here');
  return {};
});

'common service goes here';


angular.module('dot-red-3').config(function($routeProvider) {
  return $routeProvider.when('/', {
    templateUrl: 'main/main.html',
    controller: 'MainCtrl'
  });
}).controller('MainCtrl', function($scope) {
  var github, linkedin;
  linkedin = {
    href: 'https://www.linkedin.com/in/jefkahn',
    icon_class: 'linkedin'
  };
  github = {
    href: 'https://github.com/jefk',
    icon_class: 'github'
  };
  return $scope.profiles = [linkedin, github];
});
