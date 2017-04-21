angular.module('employeeMain')
	.component('employeeDetails', {
		templateUrl: 'employeeDetails/employee-details.template.html',
		controller: ['$routeParams', 'Employees', '$scope' , function EmpDetailsController($routeParams, Employees, $scope) {
			$scope.emp = Employees.get({emp_no: $routeParams.emp_no});
		}]
	});