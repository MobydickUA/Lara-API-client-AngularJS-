mainApp.config(function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');  
		$routeProvider
		.when('/employees', {
			template: '<employees-list></employees-list>'
		})
		.when('/employees/create', {
			template: '<employee-create></employee-create>'
		})
		.when('/employees/:emp_no', {
			template: '<employee-details></employee-details>'
		})
		.when('/departments', {
			template: '<departments-list></departments-list>'
		})
		.when('/departments/:dept_no', {
			template: '<department-details></department-details>'
		})
		.otherwise('/employees');
  });