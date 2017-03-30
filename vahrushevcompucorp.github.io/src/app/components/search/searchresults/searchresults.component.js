var searchresults ={
    templateUrl: './searchresults.html',
    controller: 'SearchResultsController',
    bindings: {
        fetchedarr: '=',
        t: '='
    }
};

angular
    .module('components.search')
    .component('searchresults', searchresults);
