function init() {

	var prevsection;

	// Resizing navbar solution based on: http://callmenick.com/2014/02/18/create-an-animated-resizing-header-on-scroll/
	window.addEventListener('scroll', function(e) {
		var distanceY = window.pageYOffset || document.documentElement.scrollTop,
			shrinkOn = 300;
		if (distanceY > shrinkOn) {
			$("#navbar").addClass("smaller");
			$("#title").text("Marco Oliveira");
		} 
		else {
			if ($("#navbar").hasClass("smaller")){
				$("#navbar").removeClass("smaller");
				$("#title").text("Marco Andre De Oliveira");
			}
		}

		// //code reference: http://jsfiddle.net/traverso85/d2HaW/25/
		// $('nav a').each(function(index){
		//     var section = $(this).attr('href');

		//     if ($(window).scrollTop() >= ($(section).offset().top) - 120) {
		//     	if (prevsection !== section) {
		//     		$('nav a').removeClass('selected');
		   //          $('nav a[href='+section+']').addClass('selected');
		   //          prevsection = section;
		//     	}
		//     }	
		//     if ($(window).scrollTop() + $(window).height() == $(document).height()) {
		//         $('nav a').removeClass('selected');
		//         $('nav a:last').addClass('selected');
		//     }
		// });
	});


	$('.modal-link').on('click', function(){
		// $('body').css("overflow", "hidden");
		$('#modal').css("visibility", "visible");
	});

	$('#modal').on('click', function(){
		$('#modal').css("visibility", "hidden");
	});

	$('#modal div').on('click', function(e){
		e.stopPropagation();
	});

	$(document).keyup(function(e) { 
	    if (e.keyCode == 27) { 
	        $("#modal").css("visibility", "hidden");
	    } 
	});


	// smooth scroll solution based on: http://stackoverflow.com/questions/4198041/jquery-smooth-scroll-to-an-anchor
	$("nav a").click(function(event) {
		event.preventDefault();
		
		var dest = 0;
		var navbar_size = (this.hash.substr(1) === "intro" ? 120 : 64);

		if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
			dest = $(document).height() - $(window).height();
		} 
		else {
			dest = $(this.hash).offset().top;
		}

		dest = dest - navbar_size;
		$('html,body').animate({scrollTop:dest}, 1000,'swing');
	});
}

window.onload = init();