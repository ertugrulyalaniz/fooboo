var app = angular.module('fobo',[]);  
app.controller('BaseCtrl',['$scope','$http',function ($scope,$http) {
	
	io.socket.get('/emoji', function(data){
		$scope.things = data;
		$scope.$apply();
	});
	io.socket.on('emoji',function(event){
		switch (event.verb) {
			case 'created':
				$scope.things.push(event.data);
				$scope.$apply();
				break;
		}
	});
	
}]);