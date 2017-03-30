var root = {
  templateUrl: './root.html',
  controller: 'RootController as parent'
};

angular
  .module('root')
  .component('root', root);
