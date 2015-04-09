       
 logbook.controller('PlacesCtrl', function($scope,$ionicModal) {
  $scope.places = [
    { name: 'Graz', id: 1 },
    { name: 'Wien', id: 2 },
    { name: 'Salzburg', id: 3 },
    { name: 'München', id: 4 },
    { name: 'Berlin', id: 5 },
    { name: 'Zürich', id: 6 }
  ];
  
  $ionicModal.fromTemplateUrl('templates/new-place.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.newPlace = function() {
    $scope.modal.show();
  };

  $scope.close = function() {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
})

logbook.controller('PlaceCtrl', function($scope, $stateParams) {
})
