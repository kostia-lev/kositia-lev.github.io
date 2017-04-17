var searchitem ={
    templateUrl: './searchitem.html',
    controller: 'SearchItemController',
    transclude: {name:'h5'},
    bindings: {
        itemtype: '<',
        itemimgs: '<',
        itemid: '<'
    }
};

angular
    .module('components.search')
    .component('searchitem', searchitem);
