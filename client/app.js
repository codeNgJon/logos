
angular.module('myApp', [
  'ngFx',
  'myApp.directives',
  'myApp.controllers',
  'myApp.services',
  'ngRoute'
   ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/landingView.html',
        controller: 'LandingController'
      })
      .when('/login',{
        templateUrl: 'views/loginView.html',
        controller: 'LoginController'
      })
      .when('/signup',{
        templateUrl: 'views/loginView.html',
        controller: 'SignupController'
      })
      .when('/logo', {
        templateUrl: 'views/logoView.html',
        controller: 'd3Controller'
      })
      .when('/account', {
        templateUrl: 'views/accountView.html',
        //controller : 'accountController'
      })
      .otherwise({redirectTo:'/'});
  });

angular.module('myApp.controllers', []);
angular.module('myApp.directives', []);
angular.module('myApp.services', []);
