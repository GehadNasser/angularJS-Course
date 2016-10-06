(function (){
	'use strict';
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', myController);
	myController.$inject = ['$scope'];
	
	function myController ($scope) {
		$scope.name ="";
		console.log("inside controller");

		function splitString(stringToSplit, separator) {
		  console.log("inside splitString");

		  var arrayOfStrings = stringToSplit.split(separator);
		  console.log(arrayOfStrings);
		  return arrayOfStrings.length;
		};


		$scope.showMessage = function (){
			console.log("inside showMessage");
			console.log($scope.name);
			//$scope.message = "";
			var length = splitString($scope.name,",");
			console.log(length);
			if($scope.name ==="" || $scope.name ===" "){
				$scope.message = "Please Enter Data!";
				
			}
			else if(length < 4){
			$scope.message = "Enjoy!";
			}
			else {
			$scope.message = "Too much!";
			}
		};
		//TOODO

	}

	
})();