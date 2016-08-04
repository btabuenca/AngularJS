/**
 * Created by Bernardo Tabuenca
 */

angular.module('analyticsApp',['ui.router','ngResource','googlechart','analyticsApp.controllers','analyticsApp.services']);

angular.module('analyticsApp').config(function($stateProvider,$httpProvider){$stateProvider
		.state('expediciones',{
	        url:'/expediciones',
	        templateUrl:'./AnalyticsClient/partials/expediciones.html',
	        controller:'ExpedicionListController'
	    }).state('viewExpedicion',{
	       url:'/expediciones/:id/view',
	       templateUrl:'./AnalyticsClient/partials/expedicion-view.html',
	       controller:'ExpedicionViewController'
	    }).state('recepciones',{
	        url:'/recepciones',
	        templateUrl:'./AnalyticsClient/partials/recepciones.html',
	        controller:'RecepcionListController'
	    }).state('viewRecepcion',{
	       url:'/recepciones/:id/view',
	       templateUrl:'./AnalyticsClient/partials/recepcion-view.html',
	       controller:'RecepcionViewController'
	    }).state('stats',{
	        url:'/stats',
	        templateUrl:'./AnalyticsClient/partials/stats.html',
	        controller:'StatsController'	    	   
    });     
}).run(function($state){
   $state.go('expediciones');
});