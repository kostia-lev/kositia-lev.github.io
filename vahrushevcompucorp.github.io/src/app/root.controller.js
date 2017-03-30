function RootController($scope, $log){
    var ctrl = this;
    $scope.$log = $log;
    //this.searchText = 'hello';
    this.fetchedData = [1,2];
    //this component will take search phrase and will get data from ajax
}

angular
    .module('root')
    .controller('RootController', ['$scope', '$log', RootController]);
