var searchitem ={
    templateUrl: './searchitem.html',
    controller: 'SearchItemController',
    transclude: {name:'h5'},
    bindings: {
        itemtype: '<',
        itemimgs: '<'
    }
};

angular
    .module('components.search')
    .component('searchitem', searchitem);
