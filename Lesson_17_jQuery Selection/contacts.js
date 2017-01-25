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


// JQuery Exercise

// 1. select all elements from the web page that have the class overlay
$('.overlay'); 


// 2. select all the input elements that have a name attribute on them
$(':input'); // select element

$(':input[name]');


// 3. find the element in the form that has a name attribute with the value companyName
$('form');

$('form').find('[name="companyName"]');

$('form [name="companyName"]');

$('[name="companyName"]', 'form');

// assign selector by variable
companySelector = $('[name="companyName"]', 'form');


// 4. invoke the find method on companySelector
companySelector.find('option');

companySelector.find('option:gt(0)'); // select elements with attribute grater than 0


// 5. find the label for the phoneNumber field (using an attribute selector with a value)

$('form [name="phoneNumber"]');

$('form [name="phoneNumber"]').siblings();        // [label]

$('form [name="phoneNumber"]').siblings('label'); // [label]


// 6. find the odd numbered tr elements in either the tbody or the tfoot elements (but not the thesd)

$('tbody tr');     // [tr, tr]

$('tbody tr:odd'); // [tr] 
