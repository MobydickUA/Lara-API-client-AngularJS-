angular.module('employeeMain')
	.component('departmentDetails',{
		templateUrl: 'departmentDetails/department-details.template.html',
		controller: function departmentDetailsController($scope, Departments, $routeParams) {
			$scope.data = Departments.get({dept_no: $routeParams.dept_no});
			console.log($scope.data);
		} 
	});