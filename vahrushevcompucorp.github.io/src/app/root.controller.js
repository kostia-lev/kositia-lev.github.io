function RootController($scope, $log, $http, Spotify){
    var ctrl = this;
    $scope.$log = $log;
    ctrl.test = 'hello1234567';
    ctrl.fetchedData = [];
    //this component will take search phrase and will get data from ajax
    $scope.$on('search', function(event, data){
        $log.log(event);
        $log.log(data);
        $log.log('request data start');

        /*$http.get('http://globalcorp.local/somejson.php', []).then(function(e){
         $log.log(e.data);
         ctrl.fetchedData = e.data;
         });*/

        Spotify.search(data, 'artist,album')
         .then(function (response) {
            $log.log(response);
            ctrl.fetchedData = [...response.data.albums.items, ...response.data.artists.items];
        });

    });
}

angular
    .module('root')
    .controller('RootController', ['$scope', '$log', '$http', 'Spotify', RootController]);
