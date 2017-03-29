
function SearchInputController($scope, $log){
    var ctrl = this;
    $scope.$log = $log;
}

angular
    .module('components.search')
    .controller('SearchInputController', ['$scope', '$log', SearchInputController]);
