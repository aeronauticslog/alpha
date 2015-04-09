  logbook.factory('ContactsFactory', function($cordovaSQLite, $q) {
  var factory = {};
  var contacts = [];
  
  factory.getContacts = function() {
    contacts = [];
    var query = "SELECT contact_id, name, surname, id, organization, type, is_me, email, phone, comment, is_default_sic, is_default_pic, is_favorite, image FROM contact";
    $cordovaSQLite.execute(db, query).then(function(res) {
        if(res.rows.length > 0) {
            for(var i = 0; i < res.rows.length; ++i)
            {
                contacts.push(res.rows.item(i));
                console.log("contact_id = " + res.rows.item(i).contact_id);
                console.log("=================================\n");
            }
        } else {
            console.log("No results found!!");
        }
    }, function (err) {
        console.error(err);
    });
    
    return contacts;
  };
  
  factory.getContact = function(contactId) {
    var dfd = $q.defer();
    contacts.forEach(function(contact) {
        if(contact.contact_id.toString() === contactId) dfd.resolve(contact);
    });
    return dfd.promise;
  };
  
  factory.insertContact = function(newContact) {
    validateNewContact(newContact);
    
    var query = "INSERT INTO contact (name, surname, id, organization, type, is_me, email, phone, comment, is_default_sic, is_default_pic, is_favorite, image) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
    $cordovaSQLite.execute(db, query, [newContact.name,newContact.surname,newContact.id,newContact.organization,newContact.type,newContact.is_me,newContact.email,newContact.phone,newContact.comment,newContact.is_default_sic,newContact.is_default_pic,newContact.is_favorite,newContact.image]).then(function(res) {
        console.log("INSERT ID -> " + res.insertId);
        console.log("INSERT name -> " + newContact.name);
        console.log("INSERT surname -> " + newContact.surname);
    }, function (err) {
        console.error(err);
        console.log("NOT INSERTED !!!!!!!!!!!! ================================================\n");
    });
  };
  
  function validateNewContact(newContact) {
      if(newContact.is_me === "true") {
          newContact.is_me = 1;
      }else {
          newContact.is_me = 0;
      }
      if(newContact.is_default_pic === "true") {
          newContact.is_default_pic = 1;
      }else {
          newContact.is_default_pic = 0;
      }
      if(newContact.is_default_sic === "true") {
          newContact.is_default_sic = 1;
      }else {
          newContact.is_default_sic = 0;
      }
      if(newContact.is_favorite === "true") {
          newContact.is_favorite = 1;
      }else {
          newContact.is_favorite = 0;
      }
  }
  
  return factory;
});
