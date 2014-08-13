(function(){
	var app = angular.module('app', []).filter('checkmark',
		function(){
			return function(input){
				return input ? '\u2713' : '\u2718'
			};
		});
	
	app.controller("PhoneController", ["$scope", function ($scope) {
	    $scope.list = [new Contact()];
	    $scope.add = function () {
	        $scope.list.push(new Contact());
	    }
	    $scope.remove = function (item) {
	        $scope.list = _.without($scope.list, item);
	    }
	}]);

	function Contact() {
	    this.name = "john doe";
	    this.phone = "12345678";
	};

	app.controller('TestController', function(){
		this.foo = "bar";
		
		this.tabs = [
            { name: "home", href: "#home", active: true },
            { name: "about", href: "#about", active: false },
		];

		this.clearTabs = function () {
		    this.tabs.forEach(function (item) {
		        item.active = false;
		    });
		}
		
		this.user = {
			name: "david"
		};
	});

	app.controller('FormController', ['$scope', function ($scope) {
	    $scope.bool = true;
	    $scope.text = "abc";
	    $scope.int = 42;
	    $scope.date = new Date();
	    $scope.email = "";
	    $scope.select = null;
	    $scope.list = [];
	    $scope.options = ["2", "3", "5", "7"];
	    $scope.foo = function () {
	        debugger;
	    };
	}]);
})();