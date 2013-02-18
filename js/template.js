!function ($) {
  $(function(){

  	$(document).ready(responsive);
	$(window).resize(responsive);

  	function responsive() {

		var width = getViewport().width;

		if (width <= 767) {
			$('#mobile-menu-icon').removeClass('hide').addClass('show');
			$('#nav-collapse').addClass('nav-collapse collapse');

			$("#navbar").insertBefore($("#header"));
		}
		if (width >= 768) {
			$('#mobile-menu-icon').removeClass('show').addClass('hide');
			$('#nav-collapse').removeClass('nav-collapse collapse');

			$("#navbar").insertAfter($("#header"));
		}

		// output the current width to the end of the content box
		$('.widthIndicator').html(width);
		console.log(width);

	};


  });
}(window.jQuery)


