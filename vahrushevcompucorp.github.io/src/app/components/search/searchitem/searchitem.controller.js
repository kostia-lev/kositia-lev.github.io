function SearchItemController($scope, $log){
    var ctrl = this;
    $scope.$log = $log;
}

angular
    .module('root')
    .controller('SearchItemController', ['$scope', '$log', SearchItemController]);
