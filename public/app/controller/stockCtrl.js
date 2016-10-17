(function(){
    'use strict';

    angular.module('app').controller('stockCtrl', ['$scope','$http',
        function($scope, $http){
            $http.get('/api/stock/100').success(function(data){
                $scope.data = data;
            });
        }
    ]);
})();