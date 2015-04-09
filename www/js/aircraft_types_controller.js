angular.module('logbook.aircraft_types_controller',[])
        
 logbook.controller('AcTypesCtrl', function($scope) {
  $scope.aircrafttypes = [
        { id: 1, manufacturer: 'Boeing', model: '737-600', designator: 'B736' },
	{ id: 2, manufacturer: 'Antonov', model: 'An-140', designator: 'A140' },
	{ id: 3, manufacturer: 'Cessna', model: '525 Citation CJ1', designator: 'C525' }
  ];
})

logbook.controller('AcTypeCtrl', function($scope, $stateParams) {
})
