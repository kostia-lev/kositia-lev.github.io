function SearchResultsController($scope, $log){
    var ctrl = this;
    $scope.$log = $log;
    ctrl.showmemore = function(){
        $scope.$emit('showmemore');
    }
}

angular
    .module('root')
    .controller('SearchResultsController', ['$scope', '$log', SearchResultsController]);
