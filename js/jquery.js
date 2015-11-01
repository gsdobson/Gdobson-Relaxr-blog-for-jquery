	/**
 * Javascript/jQuery Practise:
 */

// // well that finally works		
// function hide(){
// 	$('a').hide();
// }
// 		$('.moretext').click(hide);
// 	

$(document).ready(function(){



// 	$('.moretext').slideDown();
// }
	
	$('.readmore').click(function(){
		$('.moretext').slideDown();
		$('.readmore').hide()
		$('.readless').show()
		event.preventDefault();
	});
			
	$('.readless').click(function(){
		$('.moretext').slideUp();
		$('.readmore').show()
		$('.readless').hide()
		event.preventDefault();
	});
			
});	