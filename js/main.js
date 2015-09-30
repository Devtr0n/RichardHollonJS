$(document).ready( function() {

	/////////////////////////// Background Image Slideshow ////////////////////////////////////////////////
	var images = ['seacliff.jpg', 'japan.jpg', 'gunkanjima.jpg', 'hashima.jpg'];
	$('body').css({'background-image': 'url(../src/images/' + images[Math.floor(Math.random() * images.length)] + ')'});	

	//http://www.techerator.com/2010/11/how-to-make-a-css-background-slideshow-with-jquery/ 
	// var currImg = 1;
	// var intID = setInterval(changeImg, 9000);
	 
	// /* image rotator with animation */
	// function changeImg(){
		// $('body').animate({opacity: 0}, 1000, function(){
			// $('body').css('background-image','url(../src/images/' + images[Math.floor(Math.random() * images.length)] +')');
		// }).animate({opacity: 1}, 1000);
	// }	 	
	/////////////////////////// END - Background Image Slideshow ////////////////////////////////////////////////

	// Logo
	var $logo 	= $('#logo');
	 if (location.href.indexOf("#") != -1) {
        if(location.href.substr(location.href.indexOf("#"))!='#about'){
        	$logo.show();
        }
    }
	// Show logo 
	$('#tab-container .tab a').click(function() {
	  $logo.slideDown('slow');
	});
	// Hide logo
	$('#tab-about').click(function() {
	  $logo.slideUp('slow');
	});	
	
	function animMeter(){
		$(".meter > span").each(function() {
					$(this)
						.data("origWidth", $(this).width())
						.width(0)
						.animate({
							width: $(this).data("origWidth")
						}, 1200);
				});
	}
	animMeter();

    $('#tab-container').easytabs({
        animate			: true,
        updateHash		: true,
        transitionIn	: 'slideDown',
        transitionOut	: 'slideUp',
        animationSpeed	: 600,
        tabActiveClass	: 'active'}).bind('easytabs:midTransition', function(event, $clicked, $targetPanel){
            if($targetPanel.selector=='#resume'){
                    animMeter();
            }
        });
});
