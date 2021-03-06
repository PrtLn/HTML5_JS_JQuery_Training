function contactsScreen(mainID) {
    var screen = mainID;
    var initialized = false;
    return {
         init: function() {
            if (initialized) {
                return;
            }
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
        }
    };    
}