
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var SECRET = newGame();
  	var GUESS_COUNTER = 0;

  	$('#guessButton').click(function(event) {
  		guessHandler();
  		event.preventDefault();
  	});

	/*$('#userGuess').keypress(function(event) {
		if (event.which == 13) {
			guessHandler();
		}
	});*/

	$('.new').click(function(event) {
		newGame();
		event.preventDefault;
	})

  	function newGame() {
  		$('#count').text('0');
  		$('#feedback').val('Make your Guess!');
  		$('#guessList').empty();
  		$('h2').text('Make you Guess!'); 
  		$('h2').css('background-color', '#cc324b');
  		$('#userGuess').val('Enter your Guess');
  		GUESS_COUNTER = 0;

  		return Math.floor(Math.random()*101);
  	}

  	function guessHandler() {
  		console.log(SECRET);
  		var guess = parseInt($('#userGuess').val());
  		console.log(guess);
  		if (isNaN(guess) || guess < 1 || guess > 100) {
	  		$('#userGuess').val('Enter a # from 1-100');
  		} 
  		else {
  			GUESS_COUNTER += 1;
  			$("#count").text(GUESS_COUNTER);
  			provide_feedback(guess);
  			$('#guessList').append('<li>' + guess + '</li>');
  		} 
  	}

  	function provide_feedback(guess) {
  		var diff = Math.abs(guess - SECRET);
  		var feedback = $('#feedback');

  		if (diff > 50) {
  			feedback.text("You're ice cold");
  		} 
  		else if (diff > 25 && diff < 51) {
  			feedback.text("You're cold");
  		} 
  		else if (diff > 10 && diff < 26) {
  			feedback.text("You're warm");
  		}
  		else if (diff > 5 && diff < 11) {
  			feedback.text("You're hot"); 
  		}
  		else if (diff > 0 && diff < 6) {
  			feedback.text("You're very hot!");
  		}
  		else if (diff == 0) { 
  			$('h2').text('You Got It!'); 
  			$('h2').css('background-color', 'green');
  		}
  	}

});


