//#load additional module eventModule (dependencie) from mainApp2.js

angular.module('mainApp',['eventModule','ui.router','ngStorage'])
// ngRoute gives us $routeProvider
.config(['$urlRouterProvider','$locationProvider','$stateProvider', function ($urlRouterProvider,$locationProvider,$stateProvider) {
	//console.log($routeProvider);
	console.log($locationProvider);
	$locationProvider.html5Mode(true);//.hashPrefix('#');
	$urlRouterProvider.otherwise('/');
	
	/*
	$rootScope.$on("$locationChangeStart", function(event, next, current) { 

	if(next==current && next=='/newproject')
	    event.preventDefault();
	    $state.go('home');

	});
*/
	$stateProvider.
		state('home',{
			url: '/',
			templateUrl: "page_parts/home.html",
			controller: 'HomeCntrl',
		}).
		state('events',{
			url: '/events',
			templateUrl: "page_parts/events.html",
			controller: 'EventsCntrl',
		}).
		state('contact',{
			url: '/contact',
			templateUrl: "page_parts/contactus.html",
			controller: 'ContactCntrl',
		});

	console.log('Configuration hook!!!');
}])
.run([function(){
	// runs when ap is kicked off
	//$(window).unload(function(event) {
	//	event.preventDefault();
  //alert('Handler for .unload() called.');
//}); 
	console.log('Run block !!!');
}])
.controller('HomeCntrl', ['$scope',function($scope){
	// this runs on home page
	//var sc = function(){
	//	alert('Go');
	//}
	//sc();
	//$scope.message='Go home';
}])
.controller('EventsCntrl', ['$scope',function($scope){
	$scope.item = 1;
	$scope.message = 'Come back';
}])
.controller('ContactCntrl', ['$scope',function($scope){
	$scope.item = 2;
	$scope.message='See you !!!';
}])
/*

<VirtualHost *:80>
    DocumentRoot "C:\xampp\htdocs\Angulars\lesson 5 view management - stateprovider"
    ServerName www.mysite.com
    DirectoryIndex index.php index.html index.htm
    <Directory "C:\xampp\htdocs\Angulars\lesson 5 view management - stateprovider">

        Order allow,deny
        Allow from all
        Require all granted
        RewriteEngine on

        # Don't rewrite files or directories
        RewriteCond %{REQUEST_FILENAME} -f [OR]
        RewriteCond %{REQUEST_FILENAME} -d
        RewriteRule ^ - [L]

        # Rewrite everything else to index.html to allow html5 state links
        RewriteRule ^ index.html [L]

    </Directory>
</VirtualHost>

*/