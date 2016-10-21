function StaffController(){
    var vm = this;

    vm.name = 'Yoshi';
    vm.email = 'yoshi@rails.com';
    vm.phone = '012345678';

}

angular
	.module('app')
	.controller('StaffController', StaffController);
