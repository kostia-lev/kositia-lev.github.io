function RootController($scope, $log, $http, Spotify){
    var ctrl = this;
    $scope.$log = $log;
    ctrl.searchLimit = {'limit': 6, 'offset': 0};
    ctrl.fetchedData = [];
    ctrl.albumsTotal = 0;
    ctrl.artistsTotal = 0;
    ctrl.searchQuery = '';
    ctrl.showModal = false;

    //this component will take search phrase and will get data from ajax
    $scope.$on('search', function(event, data){
        ctrl.searchLimit = {'limit': 6, 'offset': 0};
        ctrl.searchQuery = data;

        Spotify.search(data, 'artist,album', ctrl.searchLimit)
         .then(function (response) {

             ctrl.albumsTotal = response.data.albums.total;
             ctrl.artistsTotal = response.data.artists.total;



            ctrl.fetchedData = [...response.data.albums.items, ...response.data.artists.items];
        });

    });

    $scope.$on('showmemore', function(event, data){
        ctrl.searchLimit.offset += 6;

        Spotify.search(ctrl.searchQuery, 'artist,album', ctrl.searchLimit)
         .then(function (response) {
            ctrl.fetchedData = ctrl.fetchedData.concat([...response.data.albums.items, ...response.data.artists.items]);
        });

    });

    $scope.$on('viewitem', function(event, data){
        ctrl.showModal = true;
    });
}

angular
    .module('root')
    .controller('RootController', ['$scope', '$log', '$http', 'Spotify', RootController]);
