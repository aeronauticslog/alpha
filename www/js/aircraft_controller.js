
logbook.controller('AircraftsCtrl', function($scope) {
  $scope.aircrafts = [
        { id: 1, aircraftid: 'N591US', type: '737-600', image: 'user_img/aircrafts/1.png' },
	{ id: 2, aircraftid: 'EP-GPA', type: 'An-140', image: 'user_img/aircrafts/2.png' },
        { id: 3, aircraftid: 'OE-FRF', type: '525 Citation CJ1', image: 'user_img/aircrafts/3.png' }
  ];
})

logbook.controller('AircraftCtrl', function($scope, $stateParams) {
})

