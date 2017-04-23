function SearchPopupController($scope, $log){
    var ctrl = this;
    $scope.$log = $log;
    ctrl.formatDate = function(ms_duration){
        var date = new Date();
        date.setTime(ms_duration);
        return date;//date.getMinutes() + ':' + date.getSeconds();
    }
}

angular
    .module('components.search')
    .controller('SearchPopupController', ['$scope', '$log', SearchPopupController]);
