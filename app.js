var mainApp = angular.module('employeeMain', [
		'topMenu', 
		'ngRoute',
		'employees',
		'employeeDetails'
	]);

mainApp.filter('gender', function() {
	var gender = function(input) {
			var res = '';
			input == 'M' ? res = 'Male' : res = 'Female';
			return res;
		};
		return gender;
});