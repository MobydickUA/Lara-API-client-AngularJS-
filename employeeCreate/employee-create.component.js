angular.module('employeeMain')
	.component('employeeCreate',{
		templateUrl: 'employeeCreate/employee-create.template.html',
		controller: function employeeCreateController($scope, Employees){
			$scope.emp = {
				first_name: '',
				last_name: '',
				gender: '',
				birth_date: new Date(),
				hire_date: new Date()
			}

			$scope.store = function(){
				var response = Employees.save($scope.emp);
				if(response.status != 'OK')
					console.log(response.status);
			}
		}
	});