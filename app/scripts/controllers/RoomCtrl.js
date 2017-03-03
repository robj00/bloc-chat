(function() {
    function RoomCtrl(Room) {
        this.roomData = Room.all;
         console.log (this.roomData);
    
    }
    
     angular
         .module('blocChat')
         .controller('RoomCtrl', ['Room' , RoomCtrl] );
})();