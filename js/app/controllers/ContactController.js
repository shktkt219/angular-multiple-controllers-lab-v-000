function ContactController(){
  var vm = this;

  vm.name = 'Tokita';
  vm.email = 'tokita@rails.com';
  vm.phone = '01234';



  vm.changeName = function(){
    vm.name = 'Furushita';
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);
