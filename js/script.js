function init() {

	// Carousel values
	const change_img_time = 5000;
	const transition_speed = 0;
	const color_banner_1 = "#b53f51";
	const color_banner_2 = "#6aa84f";
	const color_banner_3 = "#ff9900";

	var listItems = $("#carousel").children('li');
	var listLen = listItems.length;
	var current;
	var changeTimeout;

	// Navbar links
	var sections = [];

	$('nav a').each(function(index){
		sections.push($(this).attr('href'));
	});

	// Scroll listener
	window.addEventListener('scroll', function(e) {
		resizeNavbar();
		indicatePosition();
	});

	// Carousel listeners
	$('#slide-left').on('click', function(){
  		moveTo('prev');
  	});

  	$('#slide-right').on('click', function(){
  		moveTo('next');
  	});

  	// Modal listeners
  	$('.modal-link').on('click', function(){
		$("#" + this.id + "-modal").css("visibility", "visible");
		$('body').css("overflow", "hidden");
	});

	$('.modal').on('click', function(){
		closeModal();
	});

	$(document).keyup(function(e) { 
	    if (e.keyCode == 27) { 
	        closeModal();
	    } 
	});

	$('.modal div').on('click', function(e){
		e.stopPropagation();
	});

	function closeModal() {
		$(".modal").css("visibility", "hidden");
		$('body').css("overflow", "scroll");
	}

	// Navbar click listener - Smooth scroll
	// Smooth scroll solution based on: http://stackoverflow.com/questions/4198041/jquery-smooth-scroll-to-an-anchor
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

		// Removes the navbar size of the destination; navbar will be bigger (120) if the destination is "INTRO"
		dest = dest - navbar_size;
		$('html,body').animate({scrollTop:dest}, 1000, 'swing');
	});

	// Resizing navbar solution based on: http://callmenick.com/2014/02/18/create-an-animated-resizing-header-on-scroll/
	// The page title on the navbar will also change depending on its size
	function resizeNavbar() {
		var distanceY = window.pageYOffset || document.documentElement.scrollTop,
			shrinkOn = 300;
		if (distanceY > shrinkOn) {
			$("#navbar").addClass("smaller");
			$("#title").text("Marco Oliveira");
		} 
		else if ($("#navbar").hasClass("smaller")){
			$("#navbar").removeClass("smaller");
			$("#title").text("Marco Andre De Oliveira");
		}
	}

	// Position indication reference: http://jsfiddle.net/traverso85/d2HaW/25/
	function indicatePosition() {
		for (var i = sections.length - 1; i >= 0; i--) {
			var section = sections[i];
		    if ($(window).scrollTop() >= ($(section).offset().top) - 120) {
	    		$('nav a').removeClass('selected');
	            $('nav a[href='+section+']').addClass('selected');
		    	break;
		    }	
		    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
		        $('nav a').removeClass('selected');
		        $('nav a:last').addClass('selected');
		        break;
		    }
		}
	}

	// Carousel functions
	// Reference: http://www.theodinproject.com/javascript-and-jquery/creating-an-image-carousel-slider
  	function moveTo(newIndex) {
	    var index = newIndex;

	    if (newIndex === 'prev') {
	        index = (current > 0) ? (current - 1) : (listLen - 1);
	    }
		else if (newIndex === 'next') {
	        index = (current < listLen - 1) ? (current + 1) : 0;
	    }

	    listItems.fadeOut(transition_speed)
	             .eq(index).fadeIn(transition_speed);

	    current = index;

	    changeColors(current);

	    clearTimeout(changeTimeout);
	    changeTimeout = setTimeout(function() { 
	    	moveTo('next'); 
	    }, change_img_time);
  	};

  	function changeColors(slide) {
  		var color;

  		if (slide === 0) {
  			color = color_banner_1;
  		}
  		else if (slide === 1) {
  			color = color_banner_2;
  		}
  		else {
  			color = color_banner_3;
  		}

  		$('#about').css('background-color', color);
  	}

  	// Initialize interface behavior
  	indicatePosition();
  	moveTo('next');
}

window.onload = init();