// show number of rows displayed in the footer of the page
(function($) {
	$.fn.extend({
		updateFooter : function(param) {
			if ($(this).find('tbody') && $(this).find('tfoot')) {
				var count = $(this).find('tbody tr').length;

				// creating message
				if (param && param.message) {
					$(this).find('tfoot tr td').text(count + " " + param.message);
				} else {
					$(this).find('tfoot tr td').text(count + " rows in the table");
				}				
			}
			return this
		},
	});
})(jQuery);

/*
> $('table');
> $('table').updateFooter();
*/
