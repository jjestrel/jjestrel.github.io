(function($){
  $(function() {
  
	// Setup scrolling to when clicking links
	$("a").click(function() {
		if ($(this).data('href')) {
			$('html, body').animate({
				scrollTop: $($(this).data('href')).offset().top
			}, 500);
		}
	});
	
	//$('#index-banner').height($( window ).height());
    $('.button-collapse').sideNav();
	
  }); // end of document ready
})(jQuery); // end of jQuery name space