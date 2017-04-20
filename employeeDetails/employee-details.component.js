angular.module('employeeMain')
	.component('employeeDetails', {
		templateUrl: 'employeeDetails/employee-details.template.html',
		controller: ['$routeParams',
			function EmpDetailsController($http) {
			$http.get('http://127.0.0.1:8000/api/json/employees/' + $routeParams.emp_no);
		}]
	});