'use strict';

(function( $ ) {
// Your jQuery code here, using the $
	$(window).scroll(function() {
		if ($(document).scrollTop() > 50) {
			$('nav').addClass('shrink');
		} else {
			$('nav').removeClass('shrink');
		}
	});
})( jQuery );


