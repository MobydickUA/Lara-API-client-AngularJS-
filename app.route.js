mainApp.config(function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');  
		$routeProvider
		.when('/employees', {
			template: '<employees></employees>'
		})
		.when('/employees/:emp_no', {
			template: '<employee-details></employee-details>'
		})
		.when('/departments', {
			template: '<departments></departments>'
		})
		.when('/departments/:dep_no', {
			template: '<department-details></department-details>'
		});
		// .otherwise('/employees');
  });