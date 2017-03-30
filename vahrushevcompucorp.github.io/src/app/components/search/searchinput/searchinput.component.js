var searchinput ={
    templateUrl: './searchinput.html',
    controller: 'SearchInputController',
    bindings: {
        st: '='
    }
};

angular
    .module('components.search')
    .component('searchinput', searchinput);
