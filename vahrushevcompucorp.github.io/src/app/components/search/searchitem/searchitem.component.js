var searchitem ={
    templateUrl: './searchitem.html',
    controller: 'SearchItemController',
    transclude: {name:'h5', image: 'img'},
    bindings: {
        itemtype: '<'
    }
};

angular
    .module('components.search')
    .component('searchitem', searchitem);
