var searchpopup ={
    templateUrl: './searchpopup.html',
    controller: 'SearchPopupController',
    bindings: {
        showmodal: '=',
        modaltitle: '<',
        modaltype: '<',
        modaldata: '<',
        modalpicture: '<'
    }
};

angular
    .module('components.search')
    .component('searchpopup', searchpopup);
