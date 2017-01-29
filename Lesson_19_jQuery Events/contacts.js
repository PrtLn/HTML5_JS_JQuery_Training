function contactsScreen(mainID) {
    var screen = mainID;
    var initialized = false;
    return {
         init: function() {
            if (initialized) {
                return;
            }  

          // Registering Event Listeners
          $(screen).find('form input[type="submit"]').click(
            function(evt) {
              evt.preventDefault();

            // Post the form data to the server
              // check whether the form is valid
              if ($(evt.target).parents('form')[0].checkValidity()) { 
                // extract a serialized version of the form
                var contact = this.serializeForm();  // extract a serialized version of the form
                // create a new tr element based on the date in the serialized object
                var html = '<tr><td> + contact.contactName + </td>' +
                  '<td> + contact.phoneNumber + </td>' +
                  '<td> + contact.emailAddress + </td>' +
                  '<td> + contact.companyName + </td>' +
                  '<td><time datetime="' + contact.lastContacted +'">' +
                  contact.lastContacted + '</time>' +
                  '<div class="overlay">' + contact.notes + '</div></td></tr>';

                // add the new tr element as last child of tbody  
                $(screen).find('table tbody').append(html);

                // clear the form of all values
                $(screen).find('form :input[name]').val('');
                
                // hide the input section of the page
                $(screen).find('#contactDetails').hide();
              }
            }.bind(this)
          );

          var contactName = document.getElementById('contactName')
          contactName.oninvalid = function(e) {
            e.target.setCustomValidity("");
           if (e.target.validity.valid == false) {
               if (e.target.value.length == 0) {
               	   e.target.setCustomValidity("Contact name is required.");
	           } else if (e.target.value.length < 5) {
		           e.target.setCustomValidity("Contact name must be at least 5 characters."); 
	           }
           }
          };
 
          var email = document.getElementById('emailAddress')
          email.oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (e.target.validity.valid == false) {
	            if (e.target.value.length == 0) {
		            e.target.setCustomValidity("Email is required.");
	             } else {
		              e.target.setCustomValidity("Please enter a valid email address."); 
	             }
            }
          };

          // Displaying Form Dinamically

          document.getElementById('addContact')
            .addEventListener("click", function(event) {
             event.preventDefault();
             document.getElementById('contactDetails').style.display = 'block';
          });

          // Showing Notes 

          var timeElements = document.getElementsByTagName('time');
           for (var i = 0; i < timeElements.length; i++) {
               timeElements[i].addEventListener("mouseenter", function(event) {
                 event.target.nextElementSibling.style.display = 'block';
               });

               timeElements[i].addEventListener("mouseleave", function(event) {
                  event.target.nextElementSibling.style.display = 'none';
               });
           }  

          initialized = true;          
        }, 

        // iteration 
        serializeForm: function() {
            var inputFields = $(screen).find('form :input');
            var result = {};
            $.each(inputFields, function(index, value) {
                 if ($(value).attr('name')) {
                     result [$(value).attr('name')] = $(value).val();
                 }
            });
            return result;
        }
    };    
}

//__________________________________________________

// When a function  is placed inside a method, 
// the object it uses as its environment is not the object itself

  // var obj = {
  //   methodA : function() {
  //     console.log('Outer this is ' + this);    // Outer this is [object Object]
  //     function inner() {
  //       console.log('Inner this is ' + this);  // Inner this is [object Window]
  //     }
  //     inner();
  //   }
  // } 
  // obj.methodA();


    // solution 1

    // var obj = {
    //   methodA : function() 
    //   {
    //     var that = this;

    //     console.log('Outer this is ' + this);    // Outer this is [object Object]
    //     function inner() {
    //       console.log('Inner this is ' + that);  // Inner this is [object Object]
    //     }
    //     inner();
    //   }
    // } 
    // obj.methodA();


    // solution 2

    // var obj = {
    //   methodA : function() 
    //   {
    //     console.log('Outer this is ' + this);    // Outer this is [object Object]
    //     inner = function() {
    //       console.log('Inner this is ' + this);  // Inner this is [object Object]
    //     }.bind(this);
    //     inner();
    //   }
    // } 
    // obj.methodA();


