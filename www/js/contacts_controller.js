

logbook.controller('ContactsController', function($scope, $ionicModal, $cordovaCamera, ContactsFactory) {
    $scope.contacts = [];
    $scope.newcontact = {};
    
    init();
            
    function init() {
        $scope.contacts = ContactsFactory.getContacts();
    }

    $scope.newContact = function(modal) {
        $ionicModal.fromTemplateUrl('templates/new-contact.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
        });
    };
    
    $scope.close = function() {
        ContactsFactory.insertContact($scope.newcontact);
        $scope.newcontact = {};
        $scope.modal.hide();
        $scope.modal.remove();
        init();
    };

    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
    
    $scope.addPicture = function() {
        var options = { 
            quality : 75, 
            destinationType : Camera.DestinationType.DATA_URL, 
            sourceType : Camera.PictureSourceType.CAMERA, 
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };
        
        $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.newcontact.image = "data:image/jpeg;base64," + imageData;
        }, function(err) {
            // An error occured. Show a message to the user
        });
    };
})

.controller('ContactController', function($scope, contact) {
    $scope.contact = contact;
})