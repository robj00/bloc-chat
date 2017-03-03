(function() {
    function Room($rootScope, $firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        var Service = { all: rooms }
           
        return Service;  
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$rootScope' , '$firebaseArray', Room]);
})();