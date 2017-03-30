function RootController($scope, $log, $http){
    var ctrl = this;
    $scope.$log = $log;
    ctrl.test = 'hello1234567';
    ctrl.fetchedData = [1, 2, 3, 4];
    //this component will take search phrase and will get data from ajax
    $scope.$on('search', function(event, data){
        $log.log(event);
        $log.log(data);
        $log.log('request data start');

        $http.get('http://globalcorp.local/somejson.php', []).then(function(e){
            $log.log(e.data);
            ctrl.fetchedData = e.data;
        });

    });
}

angular
    .module('root')
    .controller('RootController', ['$scope', '$log', '$http', RootController]);
