// app-angular.js

angular.module('fitnessApp', [])
    .controller('FitnessController', function($scope, $http) {
        const apiKey = 'YOUR_API_KEY';

        $http.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London`)
            .then(response => {
                $scope.weather = response.data;
            });

        $http.get(`https://api.fitnessapi.com/v1/activity?key=${apiKey}`)
            .then(response => {
                $scope.fitnessData = response.data;
            });
    });
