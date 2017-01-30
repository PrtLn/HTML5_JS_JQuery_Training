// function to be executed a single time when the web page loads
(function($) {
	$.fn.extend({
		setTime : function() {

			// date formatting
			months = ['January','February', 'March','April','May','June',
						'July','August','September','October','November','December'];
			$.each(this, function(indx, val) {
				if ($(val).attr('datetime')) {
					var date = new Date($(val).attr('datetime'));
					var display = months[date.getMonth()] + ' ';
					display += date.getDate() + ', ';
					display += date.getFullYear();
					$(val).text(display);
				}
			});
			return this;
		},
	});
})(jQuery);