angular.module('departments')
	.factory('Departments', function($resource){
		return $resource('http://127.0.0.1:8000/api/json/departments/:dept_no',{
			dept_no: '@dept_no'},{
				update: {
					method:'PUT'
				}
			});
	});