// show number of rows displayed in the footer of the page
(function($) {
	$.fn.extend({
		updateFooter : function(param) {
			if ($(this).find('tbody') && $(this).find('tfoot')) {
				var count = $(this).find('tbody tr').length;
				$(this).find('tfoot tr td').text(count + " rows in the table");
			}
		}
	});
})(jQuery);

/*
> $('table');
> $('table').updateFooter();
*/