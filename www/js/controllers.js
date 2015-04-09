angular.module('logbook.controllers', [])

logbook.controller('LogbookCtrl', function($scope, $ionicModal, $timeout) {
})




.controller('TestsCtrl', function($scope, todos) {
    $scope.todos = todos;
})

.controller('TestCtrl', function($scope, todo) {
    $scope.todo = todo;
})

.controller('DBTestCtrl', function($scope, $cordovaSQLite) {
    $scope.insert = function(firstname, lastname) {
        var query = "INSERT INTO people (firstname, lastname) VALUES (?,?)";
        $cordovaSQLite.execute(db, query, [firstname, lastname]).then(function(res) {
            console.log("INSERT ID -> " + res.insertId);
            console.log("INSERT name -> " + firstname);
            console.log("INSERT surname -> " + lastname);
        }, function (err) {
            console.error(err);
        });
    }
 
    $scope.select = function(lastname) {
        var query = "SELECT firstname, lastname FROM people WHERE lastname = ?";
        $cordovaSQLite.execute(db, query, [lastname]).then(function(res) {
            if(res.rows.length > 0) {
                $scope.selectedPerson = res.rows.item(0);
                console.log("SELECTED -> " + res.rows.item(0).firstname + " " + res.rows.item(0).lastname);
            } else {
                $scope.selectedPerson.firstname = "";
                $scope.selectedPerson.lastname = "";
                console.log("No results found");
            }
        }, function (err) {
            console.error(err);
        });
    }
    
    $scope.clear = function() {
        var query = "DELETE FROM people";
        $cordovaSQLite.execute(db, query).then(function() {
            console.log("== DATABASE CLEARED ==");
        }, function(err){
            console.error(err);
        });
    }
})
;

