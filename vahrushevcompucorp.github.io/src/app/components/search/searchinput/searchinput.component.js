var searchinput ={
    templateUrl: './searchinput.html',
    controller: 'SearchInputController',
    bindings: {
        fetchedData: '=',
        st: '='
    }
};

angular
    .module('components.search')
    .component('searchinput', searchinput);
