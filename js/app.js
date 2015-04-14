var ngApp = angular.module("launcher", ["ngRoute"]);

ngApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when("/", { templateUrl: "views/alternative.html", controller: "alt" })
	.when("/third", { templateUrl: "views/third.html", controller: "alt" })
	.otherwise({ redirectTo: "/" });
}]);


ngApp.controller('main', function($scope, $location){
	$scope.naam = "Jaap";

	$scope.close = function(){
		win.close();
	}

	$scope.goTo = function(url){
		$location.path("/third");
		console.log(url);
	}

	$scope.minimize = function(){
		win.minimize();
	}
});

ngApp.controller('alt', function($scope){

});