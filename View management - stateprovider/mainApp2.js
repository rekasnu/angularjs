
(function(){
//if using named controllers we use this instead $scope
angular.module('eventModule', [])
// create shared variables -- for this we use factory
.factory('MainTitle', [function(){
	return {
			title : 'Es eju majas !!!',
			base : 'http://localhost/Angulars/lesson%205%20view%20management%20-%20stateprovider/'
	};
}])
// addd custom filter witch filters item names 
.filter('searchAct',function(){
	return function(items,search){
		var filtered = [];
		if (!search){return items;}
		angular.forEach(items, function(item){
			if(angular.lowercase(item.title).indexOf(angular.lowercase(search)) != -1)
			{
				filtered.push(item);
			}
		});
		return filtered;
	}
})
.config([function () {
	console.log('Event Module :: config');
}])
.run([function(){
	console.log('Event Module :: running');
}])
// dependancy injection 'MainTitle'
.controller('EventCntrl', ['$scope','$location','MainTitle','$state','$stateParams','$localStorage', function($scope,$location,mainTitle,$state,$stateParams,$localStorage){
//	$scope.title ='Your game';
	//$scope.reload ->
//			$scope.reload = function() {
//    $state.reload();
//};
//$scope.reload = function() {
//   $state.go($state.current, {}, {reload: true});
//}
/*//////////////////////////////////////
catch refresh or page state change event
	$scope.$on("$locationChangeStart", function(event, next, current) { 
		
		//event.preventDefault();
		//$route.reload();
		//$state.reload();
		//var current = $state.current;
        //var params = angular.copy($stateParams);
        */
       /* $state.reload = function reload() {
		    $state.transitionTo($state.current, $state.params, { reload: true, inherit: true, notify: true });
		};*/
		/*
        //$state.transitionTo(current, params, { reload: true, inherit: true, notify: true });
		
		console.log("next    : "+next);
		console.log("current : "+current);
		console.log("          "+mainTitle.base);
	
	//	$scope.reloadRoute = function() {
    //$state.reload();
//};
	    //if(next != mainTitle.base && next == current){
	    //	event.preventDefault();
	    //	alert('go');
	    //    $location.path('/');
	    //}
	   	//$location.path(next); 
	  
	});
//////////////////////////*/
	this.title = mainTitle.title;
	this.menu=[
		{
			name: 'Events',
			href: 'page_parts/contactus.html'
		},
		{
			name: 'contacts',
			href: 'page_parts/contactus.html'
		}
	]
//scope function access in the view
//	if(!this.index){
//	this.index = 0;
//	this.eventIndex = 0;
//}
	if($localStorage.page)
		this.index = $localStorage.page
	else
		this.index = 0;

	//if($location.path() == '/'){
	//	this.index = 0;
	//	$storage.page = 0;
	//}
	//else if($location.path() == '/events'){
	//	this.index = 1;
	//	$storage.page = 1;
	//}
	//else if($location.path() == '/contact'){
	//	this.index = 2;
	//	$storage.page = 2;
	//}

	this.setIndex=function(val){
		this.index= val;
		if(this.index==0){
			$location.path('/');
			$localStorage.$reset({page:0});
       // 	console.log($localStorage.page);
		}
		else if(this.index==1){
			$location.path('events');
			$localStorage.$reset({page:1});
        //	console.log($localStorage.page);
		}
		else if(this.index==2){
			$location.path('contact');
			$localStorage.$reset({page:2});
        //	console.log($localStorage.page);
		}
	}
	this.getIndex=function(){
		return this.index;
	}
	this.setEventIndex = function(val){
		this.eventIndex = val;
	}

	this.getEventIndex = function(){
		return this.eventIndex;
	}

	this.events=[
		{
		  title : "New Yourk Actrise",
		  itemTitle: mainTitle.title,
		  description: "is one day event",
		  imgName: "lacey",
		  date: Date.parse("January 24 2015")	
		},
		{
		  title : "Singer in UK",
		  itemTitle: mainTitle.title,
		  description: "is two day event that teaches kids to sing",
		  imgName: "cheryl",
		  date: Date.parse("January 04 2015")	
		},
		{
		  title : "Presenter Ireland",
		  itemTitle: mainTitle.title,
		  description: "is one day event again that teaches kids to present and debate",
		  imgName: "sinead",
		  date: Date.parse("February 14 2015")	
		},
		{
		  title : "AtomicK Singer from UK",
		  itemTitle: mainTitle.title,
		  description: "is two day event in which atomic k teaches kids to sing",
		  imgName: "natashaH",
		  date: Date.parse("January 04 2015")	
		},
		{
		  title : "AtomicK Singer from UK",
		  itemTitle: mainTitle.title,
		  description: "is two day event repeats",
		  imgName: "natasha",
		  date: Date.parse("January 04 2015")	
		},
		{
		  title : "Girls Aloud Singer from UK",
		  itemTitle: mainTitle.title,
		  description: "is two day event that teaches kids to sing",
		  imgName: "kimberly",
		  date: Date.parse("January 04 2015")	
		},
		{
		  title : "Presenter and entertiner in Ireland",
		  itemTitle: mainTitle.title,
		  description: "is one day event again that teaches kids to present and debate",
		  imgName: "lizzie-cundy",
		  date: Date.parse("February 14 2015")	
		},
		{
		  title : "AtomicK Singer in UK",
		  itemTitle: mainTitle.title,
		  description: "is two day event once again",
		  imgName: "natasha-hamilton",
		  date: Date.parse("January 04 2015")	
		}

	]
}])
.controller('EventItemCntrl', ['$scope', function($scope){
	this.itemTitle ='Young game makers in NY';
	this.description ='young game makers in one day !!!';
	this.imageSrc = './2j0joyg.jpg';
	this.imageSrc2 = './picks/003.jpg';
	this.date = ' January 12, 2015';
}])
.controller('EventTabCntrl', ['$scope', function($scope){
	this.tab = 0;
	console.log('yes');
	this.setTab=function(val){
		this.tab = val;
	}
	this.getTab=function(){
		return this.tab;
	}
}])

//custom directive
.directive('eventItem', function(){
	return{
		restrict: 'E', // E-element, A-attribute,,C-class, M-comment
		templateUrl: 'page_parts/eventitem.html',
		//or we can use inline java code
		//template: " <div class='container container-fluid'><h1>Hello</h1></div>",
		controller: function($scope){
			//directives scope to manipulate data
			console.log('Do stuff')
		}, //Embede the custom controller into directive
		//link page with this directive
		link: function($scope,element,attrs){} //dom manipulation
	}
});

})();