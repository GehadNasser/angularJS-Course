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
		  return arrayOfStrings.length;
		};


		$scope.showMessage = function (){
			console.log("inside showMessage");
			//$scope.message = "";
			var length = splitString(name,',');
			console.log(length);
			if(name ==="" || name ===" "){
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