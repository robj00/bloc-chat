function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            }); 
         
        $stateProvider
            .state('main', {
                url: '/',
//                controller: 'LandingCtrl as landing',
                templateUrl: '/templates/home.html'
            });  
     }
 
     angular
         .module('blocChat', ['ui.router', 'firebase'])
         .config(config);
})();
