function RootController($scope, $log){
    var ctrl = this;
    $scope.$log = $log;
    //this component will take search phrase and will get data from ajax
}

angular
    .module('root')
    .controller('RootController', ['$scope', '$log', RootController]);
