(function() {
function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            }); 
         
        $stateProvider
            .state('roomc', {
                url: '/',
                controller: 'RoomCtrl as roomc',
                templateUrl: '/templates/home.html'
            });  
     }
 
     angular
         .module('blocChat', ['ui.router', 'firebase'])
         .config(config);
})();
