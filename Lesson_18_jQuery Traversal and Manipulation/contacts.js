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


// JQuery Exercises

// 1. to find any time elements in the web page 
// and then traverses trom these to find each element`s parent tr element

$('time'); // [time, time]

$('time').parent(); // [td, td]

$('time').parents(); // [td, tr, td, tr, tbody, table, section#contactList, main#contactScreen, body, html]

$('time').parents('tr'); // [tr, tr]


// 2. to find the input field tn the document with the attribute autofocus.
//Traverse from this to its parent element, ensuring that this is a div with the class formRow

$('[autofocus]'); // [input#contactName.validated]
 
$('[autofocus]').parent(); // [div.formRow]

$('[autofocus]').parent('div.formRow'); // [div.formRow]

$('[autofocus]').parent('div.formRow').siblings(); // [div.formRow, div.formRow, div.formRow, div.formRow, div.formRow, div.formRow]

$('[autofocus]').parent('div.formRow').next(); // [div.formRow]

$('[autofocus]').parent('div.formRow').next('div'); // [div.formRow]


// 3. to add placeholdertext to every input field that has the requered attribute specifying

$(':input[required]');

$(':input[required]').attr('placeholder', 'This is placeholder');


// 4. to set the value of the companyName select box to 2

$('[name="companyName"]');

$('[name="companyName"]').val(2); // XZY Ltd


// 5. to use the each function to iterate through all the input fields that have pattern attributes
$.each($(':input[pattern]'), function(index, val) {
  var pattern = $(val).attr('pattern');
  $(val).after('<span>' + pattern + '</span>');
});
