var scale = 0.5,
			scaleIn = 0.05,
			offset = 4,
			limit = 30;
			player1 = $('.cha-red'),
			player2 = $('.cha-blue'),
			redRun = 0,
			blueRun = 0;

var red = {
	player: player1,
	scaleCha: player1.css('transform', 'scale('+scale+')'),
	zoom: scale,
	chaClick: function() {
		var zoomIn = red.zoom;
		var run = 0;
		$(document).on('keyup',function(e){
			if(run<limit){
				if(e.which==90){
			        red.player.addClass('ani');
			        red.player.css({'transform': 'scale('+zoomIn+')'});
		        	zoomIn += scaleIn;
		        	run++;
		        	redRun++;
					compare();
					result();
		    	}
		    }
		});
    }
}

var blue = {
	player: player2,
	scaleCha: player2.css('transform', 'scale('+scale+')'),
	zoom: scale,
	chaClick: function() {
		var zoomIn = blue.zoom;
		var run= 0;
		$(document).on('keyup',function(e){
			if(run<limit){
				if(e.which==191){
			        blue.player.addClass('ani');
			        blue.player.css({'transform': 'scale('+zoomIn+')'});
		        	zoomIn += scaleIn;
					run++;
					blueRun++;
		    		compare();
		    		result();
		    	}
		    }
		});

    }
}

function compare(){
	if(redRun>blueRun){
		player1.css('z-index','5');
		player2.css('z-index','4');

	}else{
		player1.css('z-index','4');
		player2.css('z-index','5');
	}
}

function result(){
	if(redRun===limit){
		window.location.href = '/red';
	}else if(blueRun===limit){
		window.location.href = '/blue';
	}else{

	}
}


red.chaClick();
blue.chaClick();



// result
setTimeout(function(){
    $('.win').removeClass('active');
    $('.lose').addClass('active');
    $('.lose>video')[0].play();
    setTimeout(function(){
	    window.location.href = '/';
	}, 6500);
}, 6500);
		
