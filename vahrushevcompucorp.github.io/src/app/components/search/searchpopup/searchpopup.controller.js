function SearchPopupController($scope, $log){
    var ctrl = this;
    $scope.$log = $log;
}

angular
    .module('components.search')
    .controller('SearchPopupController', ['$scope', '$log', SearchPopupController]);
