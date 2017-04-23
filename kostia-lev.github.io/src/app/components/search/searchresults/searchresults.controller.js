function SearchResultsController($scope, $log){
    var ctrl = this;
    $scope.$log = $log;
    $log.log(this.artistsTotal);
    $log.log(this.albumsTotal);
    ctrl.showmemore = function(){
        $log.log('show me more');
        $scope.$emit('showmemore');
    }
}

angular
    .module('root')
    .controller('SearchResultsController', ['$scope', '$log', SearchResultsController]);
