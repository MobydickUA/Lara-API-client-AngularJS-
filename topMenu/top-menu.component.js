angular.module('employeeMain')
	.component('topMenu',{
		templateUrl: 'topMenu/top-menu.template.html',
		controller: function topMenuController(){
			this.items = [
				{
					title: 'Employees',
					url: '/employees'
				},
				{
					title: 'Departments',
					url: '/departments'
				}
			];
		}
	});