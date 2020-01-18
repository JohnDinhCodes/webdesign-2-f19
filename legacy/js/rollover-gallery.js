$(document).ready(function() {
			  //To switch directions up/down and left/right just place a "-" in front of the top/left attribute    
			  //Full Caption Sliding (Hidden to Visible)
			  $('.boxgrid.captionfull').hover(function() {
			    $(".cover", this).stop().animate({
			      top: '160px'
			    }, {
			      queue: false,
			      duration: 160
			    });
			  }, function() {
			    $(".cover", this).stop().animate({
			      top: '260px'
			    }, {
			      queue: false,
			      duration: 160
			    });
			  });

			});