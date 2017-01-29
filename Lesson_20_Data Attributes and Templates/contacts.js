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
              if ($(evt.target).parents('form')[0].checkValidity()) { 
                // extract a serialized version of the form
                var contact = this.serializeForm();
                // create a new tr element based on the date in the serialized object
                 var html = '<tr><td>' + contact.contactName + '</td>' +
                  '<td>' + contact.phoneNumber + '</td>' +
                  '<td>' + contact.emailAddress + '</td>' +
                  '<td>' + contact.companyName + '</td>' +
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

          // Delegated Event Listeners
          $(screen).find('tbody').on("mouseenter mouseleave", "td > time",
              function(evt) {

                // Animation
                // slow appearance and disappearance notes popup
                if (evt.type === "mouseenter") {
                  $(evt.target).siblings('.overlay').slideDown();
                  // $(evt.target).siblings('.overlay').fadeIn("slow");
                } else {
                  $(evt.target).siblings('.overlay').slideUp();
                }
              }
          );

          // Manipulation
          // changes the text of labels such as this to display in red 
          $(':input[required]').siblings('label').css('color', 'green');
          $('<span>').text('*').addClass('requiredMarker');
          $(':input[required]').siblings('label[for="contactName"]').append(
            $('<span>').text('*').addClass('requiredMarker').css('color', 'red')
          );

          // Form Events
          $(screen).find('textarea').keyup(function(evt) {
            if ($(evt.target).siblings('.textCount')) {
              var characters = $(evt.target).val().length;
              $(evt.target).siblings('.textCount').text(characters + 
                ' characters typed into the Notes');
            }
          });

          // change color when hover over any row
          $(screen).find('tbody').on("mouseenter mouseleave", "tr",
              function(evt) {
                if (evt.type === "mouseenter") {
                  $(evt.target).closest('tr').css('color', 'white');
                  $(evt.target).closest('tr').css('background', '#3056A0');
                } else {
                 $(evt.target).closest('tr').removeAttr('style');
                }
              });

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

// Data Attributes
function bind(template, obj) {
  $.each(template.find('[data-property-name]'), function(indx, val) {
    var field = $(val).data().propertyName;
    if (obj[field]) {
      $(val).text(obj[field]);
    }
  });
  return tamplate;
}
