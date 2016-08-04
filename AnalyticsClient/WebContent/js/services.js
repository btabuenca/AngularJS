/**
 * Created by Bernardo Tabuenca
 */

angular.module('analyticsApp.services',[]).factory('Expedicion',function($resource){
    return $resource('http://localhost:8080/AnalyticsWS/rest/expediciones/:id',{id:'@idregistro'},{
        update: {
            method: 'PUT'
        }
    });
}).factory('Recepcion',function($resource){
    return $resource('http://localhost:8080/AnalyticsWS/rest/recepciones/:id',{id:'@idregistro'},{
        update: {
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});