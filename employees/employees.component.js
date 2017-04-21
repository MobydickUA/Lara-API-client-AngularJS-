angular.module('employeeMain')
	.component('employees', {
		templateUrl: 'employees/employees.template.html',
		controller: function employeesController($http) {
			$http.get('http://127.0.0.1:8000/api/json/employees/')
				.then(
					response => { this.employees = response.data; }, 
					error => { console.log(error); }
					);
			}
	});