function SearchInputController($scope, $log){
    var ctrl = this;
    $scope.$log = $log;
    $scope.$ctrl.onclick = function(e){
        $scope.$emit('search', ctrl.st);
    }
}

angular
    .module('components.search')
    .controller('SearchInputController', ['$scope', '$log', SearchInputController]);
