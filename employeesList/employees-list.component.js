angular.module('employeeMain')
	.component('employeesList', {
		templateUrl: 'employeesList/employees-list.template.html',
		controller: function employeesListController($http, $scope, $location) {
			$scope.currentPage = 1;

			$scope.load = function(){
				$http.get('http://127.0.0.1:8000/api/json/employees?offset='+($scope.currentPage-1)*10)
					.then(
						response => {
							$scope.employees = response.data.employees; 
							$scope.count = response.data.count;
						},
						error => { console.log(error); }
					);
			}

			$scope.redirect = function(path){
				$location.path(path);
			}
			$scope.load();
		}
	});