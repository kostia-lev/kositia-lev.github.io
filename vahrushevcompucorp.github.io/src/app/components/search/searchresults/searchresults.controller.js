function SearchResultsController($scope, $log){
    var ctrl = this;
    $scope.$log = $log;
}

angular
    .module('root')
    .controller('SearchResultsController', ['$scope', '$log', SearchResultsController]);
