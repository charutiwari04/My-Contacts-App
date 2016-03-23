/*
 * Angular Module
 */
var app = angular.module('myapp',[]);
/*
 * Angular Controller formController
 */
app.controller('formController', ['$scope',function($scope){
	var receivedIndex = 0;
	/*
	 * items is object containing contacts data of various users.
	 */
	var items={};
	items.data=[
	{id: "1",
	 firstName: "Sara",
	 lastName: "Bona",
	 birthDay: "XX/XX/YYYY",
	 company: "AAA",
	 email: "example@domain.com",
	 mobile: "222-333-4444",
	 imgUrl: "images/320px-Man_Silhouette2.jpg"},
	 {id: "2",
	 firstName: "Lara",
	 lastName: "Bona",
	 birthDay: "XX/XX/YYYY",
	 company: "BBB",
	 email: "example@domain.com",
	 mobile: "222-222-4444",
	 imgUrl: "images/Blank_Avatar_Female.jpg"}
	];
	$scope.items = items;
	/*
	 * Adds new contact with dummy data on left side of the screen
	 */
	$scope.addItem = function(){
		items.data.push({
			id: items.data.length+1,
			firstName: "Full",
			lastName: "Name"
		})
	};
	/*
	 * When Edit button is clicked on any contact, form on right is
     * filled with user data for editing.
	 */
	$scope.editItem = function(index){
		$scope.id = items.data[index].id;
		$scope.firstName = items.data[index].firstName;
		$scope.lastName = items.data[index].lastName;
		$scope.birthDay = items.data[index].birthDay;
		$scope.company = items.data[index].company;
		$scope.email = items.data[index].email;
		$scope.mobileNum = items.data[index].mobile;
		$scope.imgUrl = items.data[index].imgUrl;
		receivedIndex = index;
	};
	/*
	 * Deletes contact.
	 */
	$scope.deleteItem = function(index){
		items.data.splice(index, 1);
	};
	/*
	 * Saves data edited on the form.
	 */
	$scope.saveItem = function(event){
		var myindex = receivedIndex;
		items.data[myindex].firstName = $scope.firstName;
		items.data[myindex].lastName = $scope.lastName;
		items.data[myindex].birthDay = $scope.birthDay;
		items.data[myindex].company = $scope.company;
		items.data[myindex].email = $scope.email;
		items.data[myindex].mobile = $scope.mobileNum;
		items.data[myindex].imgUrl = $scope.imgUrl;
	};
	/*
	 * Cancels edited data for user.
	 */
	$scope.cancelItem = function(){
		$scope.firstName = '';
		$scope.lastName = '';
		$scope.birthDay = '';
		$scope.company = '';
		$scope.email = '';
		$scope.mobileNum = '';
		$scope.imgUrl = 'images/nopreview.jpg';
		$scope.myform.$setPristine()
	};
	/* 
	 * Uploads selected image.
	 */
	$scope.imageUpload = function(element){
		var reader = new FileReader();
		reader.onload = $scope.imageIsLoaded;
		reader.readAsDataURL(element.files[0]);
		
	};
	$scope.imageIsLoaded = function(e){
		$scope.$apply(function(){
			$scope.imgUrl = e.target.result;
		});
	};
}]);