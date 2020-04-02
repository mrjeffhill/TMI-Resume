
$(function() {
	// Yes, I still use jQuery for roughing things out...

	// Get the stuff
	console.log('The JSON:... ');
	console.log(resume);

	// Prep the pretty
	doUrlStuff(); 

	// Invade the privacy?
	//getSniffy();
	//getDevicive(navigator.userAgent);
	//getScreenData();

	// Feed the trollz
	$('footer').append(shareLinks);

	// Make the things
	buildSkills($('#Skills ul'));// !!! 
	buildBlurbs($('#Blurbs ul'));// !!! 
	buildDoodles($('#Doodles'));// !!! 
	buildInterests($('#Interests'));// !!!
	buildObjective($('#Objective'));// !!! 
	buildSummary($('#Summary'));// !!! 
	buildHistory($('#History'));// !!! 
	buildEducation($('#Education'));// !!! 
	buildHeader($('body>header'));// !!! 
	buildContactInfo($('body>header'), false);

	//buildExtras($('body>header'));
	//buildNavigation($('body>header nav'));
	//buildTools();


	// Screw with this part later. I've got 💩 to do!
	// https://www.unicode.org/emoji/charts/full-emoji-list.html 
	// https://getemoji.com/
	console.log('🙈	🙉 🙊');


	// https://responsivevoice.org/api/
	// todo: MOOOOOOOOOOOOVE!
	/*
	function getSelectionText() {
	    var text = "";
	    if (window.getSelection) {
	        text = window.getSelection().toString();
	    // for Internet Explorer 8 and below. For Blogger, you should use &amp;&amp; instead of &&.
	    } else if (document.selection && document.selection.type != "Control") { 
	        text = document.selection.createRange().text;
	    }
	    //console.log('Is TTS on?: ' + tts);
	    if (tts){ return text; }
	}
	$(document).ready(function (){ // when the document has completed loading
		//console.log(responsiveVoice.getVoices());
	   	$(document).mouseup(function (e){ // attach the mouseup event for all div and pre tags
	   		if (!tts) { 
	   			return false;
	   		} else {
	   			//console.log('Is TTS on?: ' + tts);
				setTimeout(function() { // When clicking on a highlighted area, the value stays highlighted until after the mouseup event, and would therefore stil be captured by getSelection. This micro-timeout solves the issue. 
				 responsiveVoice.cancel(); // stop anything currently being spoken
				 responsiveVoice.speak(getSelectionText()); //speak the text as returned by getSelectionText
				}, 1);
		  	}
	   });
	});
	*/
	/*
	<button onclick="responsiveVoice.speak('The Internet is a series of tubes.');" type="button" value="Play">Play</button>
	*/
});