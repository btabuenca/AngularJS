/**
 * Created by Bernardo Tabuenca
 */
angular.module('analyticsApp.controllers',[]).controller('RecepcionListController',function($scope,$state,popupService,$window,Recepcion){

    $scope.recepciones=Recepcion.query();

}).controller('ExpedicionListController',function($scope,$state,popupService,$window,Expedicion){

    $scope.expediciones=Expedicion.query();

}).controller('RecepcionViewController',function($scope,$stateParams,Recepcion){

    $scope.recepcion=Recepcion.get({id:$stateParams.id});

}).controller('ExpedicionViewController',function($scope,$stateParams,Expedicion){

    $scope.expedicion=Expedicion.get({id:$stateParams.id});
    
}).controller("StatsController", function ($scope,$state,popupService,$window,Expedicion) {
        $scope.pieChartObject = {};
        
        $scope.pieChartObject.type = "PieChart";
        
        $scope.onions = [
            {v: "Otractividad"},
            {v: 3},
        ];

        $scope.pieChartObject.data = {"cols": [
            {id: "t", label: "Topping", type: "string"},
            {id: "s", label: "Slices", type: "number"}
        ], "rows": [
            {c: [
                {v: "Congelado"},
                {v: 3},
            ]},
            {c: $scope.onions},
            {c: [
                {v: "Refrigerado"},
                {v: 31}
            ]},
            {c: [
                {v: "Pescado"},
                {v: 1},
            ]},
            {c: [
                {v: "Fruta"},
                {v: 2},
            ]}
        ]};

        $scope.pieChartObject.options = {
            'title': 'Actividad en expediciones'
        };
        
        
        
        $scope.barChartObject = {};
        
        $scope.barChartObject.type = "BarChart";
        
        $scope.barChartObject.data = {"cols": [
            {id: "r", label: "Actividad", type: "string"},
            {id: "s", label: "Expediciones", type: "number"},
            {id: "t", label: "Recepciones", type: "number"}
        ], "rows": [
            {c: [
                {v: "Congelado"},
                {v: 3},
                {v: 13}
            ]},
            {c: [
                {v: "Refrigerado"},
                {v: 33},
                {v: 31}
            ]},
            {c: [
                {v: "Pescado"},
                {v: 1},
                {v: 5}
            ]},
            {c: [
                {v: "Fruta"},
                {v: 2},
                {v: 3}
            ]}
        ]};

        $scope.barChartObject.options = {
            'title': 'Actividades por tipo de visita'
        };
        
        
        
        
        
        $scope.gaugeChartObject = {};
        $scope.gaugeChartObject.type = "Gauge";

        $scope.gaugeChartObject.options = {
          width: 400,
          height: 120,
          redFrom: 90,
          redTo: 100,
          yellowFrom: 75,
          yellowTo: 90,
          minorTicks: 5
        };

        $scope.gaugeChartObject.data = [
          ['Label', 'Value'],
          ['Variable A', 80],
          ['Variable B', 55],
          ['Variable C', 68]
        ];
        
        
        
        
        
        $scope.lineChartObject = {
        		  "type": "AreaChart",
        		  "displayed": false,
        		  "data": {
        		    "cols": [
        		      {
        		        "id": "month",
        		        "label": "Month",
        		        "type": "string",
        		        "p": {}
        		      },
        		      {
        		        "id": "laptop-id",
        		        "label": "Congelado",
        		        "type": "number",
        		        "p": {}
        		      },
        		      {
        		        "id": "desktop-id",
        		        "label": "Refrigerado",
        		        "type": "number",
        		        "p": {}
        		      },
        		      {
        		        "id": "server-id",
        		        "label": "Fruta",
        		        "type": "number",
        		        "p": {}
        		      },
        		      {
        		        "id": "cost-id",
        		        "label": "Pescado",
        		        "type": "number"
        		      }
        		    ],
        		    "rows": [
        		      {
        		        "c": [
        		          {
        		            "v": "Enero"
        		          },
        		          {
        		            "v": 9,
        		            "f": "42 itemssss"
        		          },
        		          {
        		            "v": 12,
        		            "f": "Ony 12 items"
        		          },
        		          {
        		            "v": 7,
        		            "f": "7 servers"
        		          },
        		          {
        		            "v": 4
        		          }
        		        ]
        		      },
        		      {
        		        "c": [
        		          {
        		            "v": "Febrero"
        		          },
        		          {
        		            "v": 13
        		          },
        		          {
        		            "v": 1,
        		            "f": "1 unit (Out of stock this month)"
        		          },
        		          {
        		            "v": 12
        		          },
        		          {
        		            "v": 2
        		          }
        		        ]
        		      },
        		      {
        		        "c": [
        		          {
        		            "v": "Marzo"
        		          },
        		          {
        		            "v": 24
        		          },
        		          {
        		            "v": 25
        		          },
        		          {
        		            "v": 21
        		          },
        		          {
        		            "v": 26
        		          }
        		        ]
        		      },
        		      {
          		        "c": [
          		          {
          		            "v": "Abril"
          		          },
          		          {
          		            "v": 14
          		          },
          		          {
          		            "v": 15
          		          },
          		          {
          		            "v": 1
          		          },
          		          {
          		            "v": 6
          		          }
          		        ]
          		      },
        		      {
          		        "c": [
          		          {
          		            "v": "Mayo"
          		          },
          		          {
          		            "v": 4
          		          },
          		          {
          		            "v": 5
          		          },
          		          {
          		            "v": 11
          		          },
          		          {
          		            "v": 16
          		          }
          		        ]
          		      },
        		      {
          		        "c": [
          		          {
          		            "v": "Junio"
          		          },
          		          {
          		            "v": 24
          		          },
          		          {
          		            "v": 15
          		          },
          		          {
          		            "v": 1
          		          },
          		          {
          		            "v": 6
          		          }
          		        ]
          		      }          		      
        		    ]
        		  },
        		  "options": {
        		    "title": "Evolucion de las visitas. Non-stacked line chart",
        		    "isStacked": "false",
        		    "fill": 20,
        		    "displayExactValues": true,
        		    "vAxis": {
        		      "title": "Numero de visitas",
        		      "gridlines": {
        		        "count": 10
        		      }
        		    },
        		    "hAxis": {
        		      "title": "Date"
        		    }
        		  },
        		  "formatters": {}
        		};
        
        $scope.expediciones=Expedicion.query();
        
        
        
        
});
//.controller('ExpedicionCreateController',function($scope,$state,$stateParams,Expedicion){
//
//    $scope.expedicion=new Expedicion();
//
//    $scope.addExpedicion=function(){
//        $scope.expedicion.$save(function(){
//            $state.go('expediciones');
//        });
//    }
//
//}).controller('ExpedicionEditController',function($scope,$state,$stateParams,Expedicion){
//
//    $scope.updateExpedicion=function(){
//        $scope.expedicion.$update(function(){
//            $state.go('expediciones');
//        });
//    };
//
//    $scope.loadExpedicion=function(){
//        $scope.expedicion=Expedicion.get({id:$stateParams.id});
//    };
//
//    $scope.loadExpedicion();
//
//});
//.controller('RecepcionListController',function($scope,$state,popupService,$window,Recepcion){
//
//    $scope.recepciones=Recepcion.query();
//
//    $scope.deleteRecepcion=function(recepcion){
//        if(popupService.showPopup('Really delete this?')){
//            recepcion.$delete(function(){
//                $window.location.href='';
//            });
//        }
//    }    
//
//}).controller('RecepcionViewController',function($scope,$stateParams,Recepcion){
//
//	$scope.recepcion=Recepcion.get({id:$stateParams.id});
//
//}).controller('RecepcionCreateController',function($scope,$state,$stateParams,Recepcion){
//
//	$scope.recepcion=new Recepcion();
//
//	$scope.addRecepcion=function(){
//	    $scope.recepcion.$save(function(){
//	        $state.go('recepciones');
//	    });
//	}
//
//}).controller('RecepcionEditController',function($scope,$state,$stateParams,Recepcion){
//
//	$scope.updateRecepcion=function(){
//	    $scope.recepcion.$update(function(){
//	        $state.go('recepciones');
//	    });
//	};
//
//	$scope.loadRecepcion=function(){
//	    $scope.recepcion=Recepcion.get({id:$stateParams.id});
//	};
//	
//	$scope.loadRecepcion();
//});