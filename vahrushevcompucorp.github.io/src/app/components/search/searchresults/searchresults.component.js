var searchresults ={
    templateUrl: './searchresults.html',
    controller: 'SearchResultsController',
    bindings: {
        fetchedarr: '=',
        artiststotal: '=',
        albumstotal: '='
    }
};

angular
    .module('components.search')
    .component('searchresults', searchresults);
