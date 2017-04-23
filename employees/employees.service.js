angular.module('employees').factory('Employees', ['$resource', function($resource) {
	  return $resource('http://127.0.0.1:8000/api/json/employees/:emp_no', { emp_no: '@_emp_no' }, {
	    update: {
	      method: 'PUT'
	    }
  	});
}]);