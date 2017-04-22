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

        if(data.type == 'album'){
            Spotify.getAlbum(data.id)
                .then(function (response) {
                    $log.log(response)
                });

        }else if(data.type == 'artist'){
            var fetchedArtist = Spotify.getArtist(data.id);

            var artistAlbums = Spotify.getArtistAlbums(data.id);

            Promise.all([fetchedArtist, artistAlbums]).then(values=>{
                $log.log(values);
                $scope.$apply(function () {
                    ctrl.modalTitle = values[0].data.name;
                    ctrl.modalType = values[0].data.type;
                    ctrl.modalData = values[1].data.items;
                    ctrl.modalPicture = values[0].data.images[1];
                    $log.log(ctrl.modalTitle);
                });
            });

        }
    });
}

angular
    .module('root')
    .controller('RootController', ['$scope', '$log', '$http', 'Spotify', RootController]);
