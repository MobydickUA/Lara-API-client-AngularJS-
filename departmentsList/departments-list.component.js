angular.module('employeeMain')
	.component('departmentsList',{
		templateUrl: 'departmentsList/departments-list.template.html',
		controller: function departmentsListController($scope, Departments){
			$scope.depts = Departments.query();
		}
	});