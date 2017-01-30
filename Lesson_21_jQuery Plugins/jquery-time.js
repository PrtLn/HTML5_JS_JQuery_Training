// function to be executed a single time when the web page loads
(function($) {
	$.fn.extend({
		setTime : function(params) {

			// date formatting
			months = ['January','February', 'March','April','May','June',
						'July','August','September','October','November','December'];
			$.each(this, function(indx, val) {
				if ($(val).attr('datetime')) {
					var date = new Date($(val).attr('datetime'));
					// short form of date
					var m = months[date.getMonth()];
					if (params && params.style === 'short') {
						m = m.substr(0,3);
						var display = m + ' ';
						display += date.getDate() + ', ';
						display += (date.getFullYear() % 100);
					} else {
						var display = m + ' ';
						display += date.getDate() + ', ';
						display += date.getFullYear();
					}					
					$(val).text(display);
				}
			});
			return this;
		},
	});
})(jQuery);