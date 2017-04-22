var searchpopup ={
    templateUrl: './searchpopup.html',
    controller: 'SearchPopupController',
    bindings: {
        showmodal: '='
    }
};

angular
    .module('components.search')
    .component('searchpopup', searchpopup);
