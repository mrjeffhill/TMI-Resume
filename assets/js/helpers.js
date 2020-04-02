
var version = '0.6.1.8 OMeGa';
var tts = false;
var currentTheme = '';
var qsObj = false;
var urlParams = new URLSearchParams(window.location.search);
var rotationClasses = 'rr-7 rr-6 rr-5 rr-4 rr-3 rr-2 rr-1 rr0 rr1 rr2 rr3 rr4 rr5 rr6 rr7';
var polyClasses = 'poly-0 poly-1 poly-2 poly-3 poly-4';
var $carousel = null;
var isFlickity = false;
var map;
var myLatLng = { lat: 42.4316604, lng: -83.484051 };
var testLL = { lat: 42.279594, lng: -83.732124 }; // AA

// layout=agile/, intro=0/1
var doUrlStuff = function(){
	$('body').addClass('loading'); //.append(theSniffening);

	var important = '';
	if (urlParams.toString() !== ""){
		qsObj = JSON.parse('{"' + decodeURI(urlParams.toString().replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}');
		console.log('Querystring data:...');
		console.log(qsObj);
		if (qsObj['layout'] = 'agile'){
			$('body').addClass(qsObj['layout']);
			//$('.theme-toggle').addClass('active');
			currentTheme = qsObj['layout'];
			// themeSwitcher = function(qsObj['layout'], true);
			// TODO: make/use a theme switcher
			setTimeout(function(){ 
				$carousel = $('#Interests ul').flickity({
					// options
					cellAlign: 'left',
					contain: true,
					wrapAround: true,
					autoPlay: 5000,
					pauseAutoPlayOnHover: true,
					fade: true,
					prevNextButtons: false
				});
				isFlickity = true;
			}, 2000);
		}
		important = agileMessage;
	} else {
		console.log('no query or layout 4 u');
		important = baseMessage;
	}
	/*
	$(window).scrollTop();
	$('body').addClass('modal');
	buildModal($('body'), resume.messages);
	setTimeout(function(){ $('#fancyModal').addClass('show'); }, 1000);
	themeIntroMessage(important);
	*/
	setTimeout(function(){ 
		getMessy($('.agile .rr'), true);
		$('body').removeClass('loading').addClass('loaded'); 
		//console.log('DIVS: ' + $('div').length);
		//console.log('SPANS: ' + $('span').length);
	}, 3000);
}

var themeIntroMessage = function(message){
	$('p.important').html(message);
}

var bindClose = function(modal){
	$('.closeable', modal).click( function(e) {
		e.preventDefault();
		modal.removeClass('show');
		$('body').removeClass('modal');
	});
}




var classify = function(str){ // My name is Classi... with an 'i'... and...
	return str.replace(/\W/g, '-').toLowerCase();
}
var capFirstLetter = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
var formatPhone = function(str){
    return str.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2-$3');
}
var getMiles = function(meters) {
    return parseInt(meters * 0.000621371192);
}
var formatMonthYear = function(str){
	// https://stackoverflow.com/questions/4310953/invalid-date-in-safari
	let test = str.replace(/-/g, "/"); 
	let hack = moment(new Date(test));
	let reform = moment(hack).format();
	return moment(reform).format('[<div class="m">]MMM[</div> <div class="y">]YYYY[</div>]');
}
var shuffle = function(a) { // shuffle array
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
var classToggle = function(targ, str){
	targ.toggleClass(str);
}
var getRandom = function(max){
	let result = Math.floor(Math.random() * max);
	max === 1 ? result = Math.random() : null ;
	return result;
}


var getMessy = function(els, how){
	let allEls = els.add('.taped-b:before');

	$.each(allEls, function( i, v ) {
		how ? $('body').addClass('entropy') : $('body').removeClass('entropy');
		let rand = how ? Math.floor(Math.random() * 15) - 7 : 0;
		$(this).css('transform','rotate(' + rand + 'deg)').removeClass(rotationClasses).addClass('rr' + rand);
		//$('head').append('<style>h2.note::before: transform: rotate(' + rand + 'deg);</style>');
		if ($(this).is('.add-tack')){
			$(this).css('margin-left', + (rand / 2) + 'em');
		}
		if ($(this).is('.poly-wrap')){
			$(this).removeClass(polyClasses).addClass('poly-' + getRandom(5));
			//$(this).removeClass(polyClasses).addClass('poly-0');
		}
	});
}

// yes, this should and will be a teeny-tiny proper plugin at some point.
// fun fact: writen in 10min with 1 syntax error on first test
var currentStep = 1;
var prevTitle = '';
var nextTitle = '';
$(document).on('click', '.step-off h2 a', function(e) {
	e.preventDefault();
	$('.section-'+currentStep).removeClass('current');
	$(this).is('.step-prev') ? currentStep-- : currentStep++;
	$('.section-'+currentStep).addClass('current');
	$('.step-off').attr('data-current-section', currentStep);
	$('.step-off .status').text(currentStep + ' / ' + $('.step-off .step').length);
	stepAlong();
});
var getSteppin = function(){
	$('.step-off').attr('data-current-section', currentStep);
	$('.step-off .section-1').addClass('current');
	$('.step-off .status').text('1 / ' + $('.step-off .step').length);
	stepAlong();
}
var stepAlong = function(){
	$('.step-off a.step-prev, .step-off a.step-next').hide();
	if (currentStep > 1){
		prevTitle = $('.step-off .section-' + (currentStep - 1) + ' header').text();
		$('.step-off a.step-prev').show();
	} else {
		prevTitle = '';
	}
	if (currentStep < $('.step-off .step').length){
		nextTitle = $('.step-off .section-' + (currentStep + 1) + ' header').text();
		$('.step-off a.step-next').show();
	} else {
		nextTitle = '';
	}
	$('.step-off a.step-prev i').text(prevTitle);
	$('.step-off a.step-next i').text(nextTitle);
}
getSteppin();


// https://developers.google.com/analytics/devguides/collection/analyticsjs/events
var testMe = function(el, e, name, cat){
	var additional = 'Time: ' + moment().format() + ', X: ' + e.offsetX + ', Y: ' + e.offsetY + ', EL: ' + el.prop('tagName') + ' - CLASS[' + el.attr('class') + '] - ID[' + el.attr('id') + ']';

	console.log('name: ' + name + ', cat: ' + cat + ', additional: ' + additional);

	/*
	ga('send', {
		hitType: e,
		eventCategory: name,
		eventAction: cat + ': ' + additional,
		eventLabel: 'Launch General'
	});
	*/
}
// test tracker
$(document).on('click', '.test-me', function(e) {
	var name = $(this).data('test-name');
	var cat = $(this).data('test-cat');
	testMe($(this), e, name, cat, true);
	// class="test-me" data-test-name="External: Local" data-test-cat="View PDF Resume"
});
// click tracker
/*
$(document).on('click', 'body', function(e) {
	var clicked = $(e.target);
	console.log(clicked);
	if (!clicked.closest('.track-me').length && !clicked.hasClass('.track-me')){
		var name = 'Click';
		var cat = 'Random';
		testMe($(this), e, name, cat);
	}
});
*/

$(document).on('click', '.close-the-hey', function(e) {
	$('.step-off').removeClass('active');
});

$(document).on('click', '.condensificator', function(e) {
	// so hacky!
	var origText = '<i class="fas fa-eye-slash"></i> Brevity Please';
	var altText = '<i class="fas fa-eye"></i> Oh that\'s novel. Now put it back.';
	$(this).closest('section.step').toggleClass('condensed');
	$(this).closest('section.step').is('.condensed')? $(this).html(altText) : $(this).html(origText) ;
});

// visually-hidden
$(document).on('click', '.sigh, .close-the-pretty', function(e) {
	$('.port-wrap').toggleClass('visually-hidden').toggleClass('active');
});


$(document).on('click', '.btfu', function(e) {
	//$('body').addClass('modal');
	//$('#fancyModal').addClass('show');
	$('.contact-info').removeClass('active');
	$('#HEY').addClass('active');
});

$(document).on('click', '.contact-info:not(ul)', function(e) {
	if ( $(e.target).is( "section" ) ) {
		$(this).toggleClass('active');
	}
});
$('main').on('click', function(e) {
	$('.contact-info').removeClass('active');
});
$(document).on('click', '.tools-toggle', function(e) {
	e.preventDefault();
	if (!$('.tools-active').length){
		buildTools(false);
		$('body').addClass('tools-active');
	}
	$(this).addClass('active');
});
$(document).on('click', '.toggler.pallet-toggle, .toggler.fonts-toggle', function(e) {
	$(this).toggleClass('active');
	$($(this).data('toggle')).toggleClass('active');
});
$(document).on('click', '.theme-toggle', function(e) {
	$(this).toggleClass('active');
	if ($(this).hasClass('active')){
		themeSwitcher('agile', true);
		themeIntroMessage(agileMessage);
	} else {
		themeSwitcher('agile', false);
		themeIntroMessage(baseMessage);
	}
});
$(document).on('click', '.tts-toggle', function(e) {
	$(this).toggleClass('active');
	if ($(this).hasClass('active')){
		$('body').addClass('tts');
		tts = true;
	} else {
		$('body').removeClass('tts');
		tts = false;
	}
});
$(document).on('click', '.is_mobile_device .contact-info', function(e) {
	//$('.contact-info').toggleClass('open');
});

// todo: make more route-ish along with intro and themes
$(document).on('click', 'li.mappy, li.me', function(e) { // and get all toggles running via 1 method
	$('.contact-info li.active').not('.toggler').removeClass('active');
	let isMap = $(this).closest('li.mappy').length ? true : false;
	let toggler = $(this).closest('.tooltip');
	if (isMap === true){
		if (!$('body.mappy').length){ // do map
			if (!$('div.res-map').length){
				$('footer').append('<div class="res-map full-view"><div id="Commute"></div><div class="res-map-info"><p class="thinking">Calculating my commute to you.</p></div></div>');
				// <button class="closer">Close</button>
				initMap();
				$('body').addClass('mappy');
			}
		}	
		if ($('.res-map').hasClass('active')){
			$('body').removeClass('map-active');
			$('.res-map').removeClass('active');
			toggler.removeClass('active');
		} else {
			$('body').addClass('map-active').removeClass('me-active');
			$('.res-map').addClass('active');
			$('li.me, .res-me').removeClass('active');
			toggler.addClass('active');
		}
	} else {
		if (!$('body.me').length){ // do me
			if (!$('div.res-me').length){
				$('footer').append('<div class="res-me full-view"></div>');
				buildMe($('footer div.res-me'));
				$('body').addClass('me');
			}
		}
		if ($('.res-me').hasClass('active')){
			$('body').removeClass('me-active');
			$('.res-me').removeClass('active');
			toggler.removeClass('active');
		} else {
			$('body').addClass('me-active').removeClass('map-active');;
			$('.res-me').addClass('active');
			$('li.mappy, .res-map').removeClass('active');
			toggler.addClass('active');
		}		
	}
	
	if ($('.device-smartphone').length){ // close menu
		$('section.contact-info').removeClass('active');
	}	
});

$('.auto-slides').on( 'click', function(e) {
	$(this).toggleClass('paused');
});
$(document).on('click', '.res-editable a.can-edit', function(e) {
	e.preventDefault();
});
$(document).on('click', 'button.editable', function(e) {
	let thisSection = $(this).closest('.res-editable');
	thisSection.toggleClass('edit-active');
	let isActive = thisSection.hasClass('edit-active');
	$('.can-edit', thisSection).attr('contentEditable', isActive);
	$('.can-edit', thisSection).not('#Skills .can-edit')[0].focus();
	// todo: add revert
});
// TODO: MAERGE!!!
$(document).on('click', 'button.print-basket', function(e) {
	let thisSection = $(this).closest('.res-editable');
	thisSection.toggleClass('print-me');
});



var makeEditable = function(destEl){
	$.each(destEl, function( i, s ) {
		$(this).append(printEditTools);
	});
}
makeEditable($('#Blurbs>h2, #Doodles>h2, #Objective>h2, #Summary>h2, #Education>h2'));

var buildTools = function(full){
	if (full){
		$('html').addClass('resizr').append(resizR);
		$('body, html').addClass('device-desktop')
		$('ul#ResizR li').click( function(e) {
			if ($(this).is('.sizer')){
				$('body, html').removeClass('device-watch device-phone-portrait device-phone-landscape device-tablet-portrait device-tablet-landscape device-desktop device-tv').addClass($(this).attr('class'));
				$('ul#ResizR li.sizer').removeClass('active');
				$(this).addClass('active');
			} else {
				$(this).toggleClass('active');
				$($(this).data('toggle')).toggleClass('active');
			}
			$('body, html').removeClass('sizer toggle'); // sloppy cleanup - for now
		});
	} else {
		$('footer').append(pallet, fonts);
		$('header li.tools-toggle').after(resizRmin);
	}
}

$( 'footer' ).on( 'click', 'i.extra', function(e) { // puh-leeze FIX ME!
	e.preventDefault();
	if ($(this).is('.toppy')){
		$('aside').animate({ scrollTop: ( $(this).offset().top ) }, 1000);
		$('#meatnTaters').animate({ scrollTop: ( $(this).offset().top ) }, 1000);
	} else if ($(this).is('.cleany')){
		getMessy($('.agile .rr'), !$('body.entropy').length);
	} else { // make it rain forgz!!!
		$('article .blank').append('<i class="fas fa-frog forg"></i>');
	}
});

// https://flickity.metafizzy.co/options.html
var themeSwitcher = function(theme, apply){
	if (!apply){
		getMessy($('.agile .rr'), false);
		$('body').removeClass(theme);
		currentTheme = '';
		$carousel.flickity('destroy');
	} else {
		$('body').addClass(theme);
		getMessy($('.agile .rr'), true);
		currentTheme = theme;
		$carousel = $('#Interests ul').flickity({
			// options
			cellAlign: 'left',
			contain: true,
			wrapAround: true,
			autoPlay: 5000,
			pauseAutoPlayOnHover: true,
			fade: true,
			prevNextButtons: false
		});
	}
	isFlickity = apply;
}

var buildPortfolioGallery = function(){
	$('body').append('<div class="port-wrap visually-hidden"><h2>The old stuff</h2><a href="#" class="close-the-pretty">Close</a><div class="port-gallery pretty-scroll"></div></div>');
	$.each($('.gallery a'), function( i, s ) {
		$('.port-gallery').append('<figure class="hex-outer"><span class="hex-inner">' + $('.clippy', $(this)).html() + '</span><figcaption class="caption">' + $('p', $(this)).text() + '</figcaption><a class="mobile-hover-hack" href="' + $(this).attr('href') + '" target="_blank">VIEW</a></figure>');
	});
}

/*
<div class="hexagon">
  <div class="hexTop"></div>
  <div class="hexBottom"></div>
</div>
*/

/*
var limp = 0; // oh jeez, what's he doing now?
$('body').on('scroll',function(e) {
	if (limp === 4){
		console.log('What?');
	} else  if (limp === 8){
		console.log('C\'mawn!');
	}	
	//setTimeout( function(){ console.log('scrollin: ' + e.scrollTop()); limp++; }, 250);
	// lOl!

	//console.log('scrollin: ' + e.scrollTop());
	if ($(this).scrollTop() > 20) {
		$('body').addClass('shrink');
	} else {
		$('body').removeClass('shrink');
	}
});
*/


$('p.zen').hover( function() {
    this.style.webkitAnimation = 'none';
  }, function() {
    this.style.webkitAnimation = '';
  }
);


var heyBattaBatta = function(swingas){
	swingas.removeClass('swing');
	$.each(swingas, function( i, s ) {
		$(this).addClass('swing').css('animation-delay', (getRandom(1) / 2) + 's');
	});
	setTimeout(function(){ swingas.removeClass('swing'); }, 5000);
}


$(document).on('click', '#History h2 span, #History summary', function(e) {
//$('#History').on('click', ', ', function(e) {
	let total = $('#History details').length;
	let open = $('#History details[open]').length;

	if ($(this).is('summary')){
		//$(this).closest('article').toggleClass('no-dog-ear');
		$(this).closest('details').prop('open') ? open-- : open++;
		open > 0 ? $('#History h2 span').addClass('active') : $('#History h2 span').removeClass('active');
	} else {
		e.preventDefault(); 
		if ($(this).hasClass('active') && open !== 0){
			$('#History details').prop('open', false); //.closest('article').removeClass('no-dog-ear');
			$(this).removeClass('active');
		} else {
			$('#History details').prop('open', true); //.closest('article').addClass('no-dog-ear');
			$(this).addClass('active');
		}
	}
	heyBattaBatta($('#History time'));
});

$( 'footer' ).on( 'click', '.toppy', function(e) {
	toTheTop();
});

let toTheTop = function(){
	$('body,html').animate({ scrollTop: 0 }, 'slow');
	return false; 
}


// Stars!
var twinkleTwinkle = function(score, max){
	let stars = "";
	let p = score;
	let p2 = score - 1;
	let spread = [];

	p % 2 === 0 ? spread = [(p / 2), 0, (max - (p / 2))] : spread = [(p2 / 2), 1, (max - 1) - (p2 / 2)];

	let full = 0;
	while (full < spread[0]) { stars += '<i class="fas full-star"></i>'; full++; }
	let half = 0;
	while (half < spread[1]) { stars += '<i class="fas half-star"></i>'; half++; }
	let empty = 0;
	while (empty < spread[2]) { stars += '<i class="far empty-star"></i>'; empty++; }
	return stars;
}




var parseOmatic = function(obj, destEl) {
	let parsed = '';
    for (var key in obj) {
        if (typeof obj[key] === "object") {
        	parsed += '<dt class="sub-head ' + key + '">' + key + '</dt><dd class="sub-head ' + key + '">...</dd>';
            parseOmatic(obj[key], destEl);   
        } else {
            parsed += '<dt class="' + key + '">' + key + '</dt><dd class="' + key + '">' + obj[key] + '</dd>';    
        }
    }
    $(destEl).append(parsed);
    parsed = '';
}

var getDevicive = function(UAstr){ // https://userstack.com/documentation
	$.ajax({
		url: 'http://api.userstack.com/detect',
		data: {
			access_key: 'b301331f9e5761edf368d241475b4836',
			ua: UAstr
		},
		dataType: 'jsonp',
		success: function(json) {
			
			if (json.device && json.device.type) {

				console.log('User Device:...');
				console.log(json.device.type);
				console.log('More user data:...');
				console.log(json);

				//parseOmatic(json, $('.ua-parsed'));

				$('html').addClass('device-' + json.device.type);
			} else {
				$('html').addClass('device-unknown');
				//parseOmatic(json, $('.ua-parsed'));
			}
			parseOmatic(json, $('.ua-parsed'));
		}
	});
}

$(document).keyup(function(e) {
     if (e.key === "Escape") { // keycode `27`
        debugHandler($('.all-parsed'), false);
    }
});

$(document).on('click', 'li.debug-toggle', function(e) {
	debugHandler($('.all-parsed'), false);
});


var debugHandler = function(el, isTouch){
	//isTouch ? alert(el.data('hammer')) : $(el).toggleClass('active');
	$(el).add('.contact-info li.debug-toggle').toggleClass('active');
}

var getTouchy = function(){
	//The Hammer instance is stored at $element.data("hammer").
	$('header>h1').hammer().bind("tap press", debugHandler(true));
}


// whatismybrowser.com API key: c4662cd0747753c5c69e419ab7e0703f
var getSniffy = function(){
	//$.getJSON('https://json.geoiplookup.io/api?callback=?', function(data) {
	$.getJSON('https://ipinfo.io', function(data){
	    console.log('ipinfo data:... ');
	    console.log(data);
	    parseOmatic(data, $('.ip-parsed'));
	});
}

var getScreenData = function(){
	let screenData = {};
	function gcd(a, b) { 
		if (a == b) { return a; } else if (a > b) { return gcd(a - b, b); } else { return gcd(a, b - a); } 
	}
	let devicePixelRatio = window.devicePixelRatio || 1;
	let sw = screen.width * devicePixelRatio;
	let sh = screen.height * devicePixelRatio;
	let cd = screen.colorDepth;
	let div = gcd(screen.width, screen.height);
	let wd = screen.width / div;
	let hd = screen.height / div;
	let ww = $( window ).width();
	let wh = $( window ).height();
	// aspect ratios
	let sr = Math.round(100 * screen.width / screen.height) / 100; // screen
	let wr = Math.round(100 * ww / wh) / 100; // window

	screenData =  {
		"device-width": sw, 
		"device-height": sh, 
		"screen-aspect-width": wd, 
		"screen-aspect-height": hd, 
		"screen-aspect-ratio": sr,
		"screen-color-depth": cd,
		"window-width": ww, 
		"window-height": wh,
		"window-ratio": wr
	};
	parseOmatic(screenData, $('.ua-parsed'));
}




/* MAPS all the way down... */

var initMap = function() {

	map = new google.maps.Map(document.getElementById('Commute'), {
		center: myLatLng,
		zoom: 14,
		disableDefaultUI: true,
		backgroundColor: 'hsla(0, 0%, 0%, 0)',
        mapTypeControlOptions: { mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map'] }
	});

	map.mapTypes.set('styled_map', BobsMyUncle); // Get that sweet map style
	map.setMapTypeId('styled_map');
	infoWindow = new google.maps.InfoWindow;

	var contentString = '<div id="mapContent"><h4>Me</h4></div>';
	var infowindow = new google.maps.InfoWindow({ content: contentString });
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'Me',
		animation: google.maps.Animation.DROP,
		icon: {
			url: "https://icons.iconarchive.com/icons/icons-land/vista-map-markers/128/Map-Marker-Push-Pin-2-Right-Chartreuse-icon.png",
			scaledSize: new google.maps.Size(64, 64)
		}
	});

	marker.addListener('click', function() { infowindow.open(map, marker); });
	//infowindow.open(map, marker);

	function calculateRoute(from, to) {
		// Center initialized to Naples, Italy
		var myOptions = {
			zoom: 10,
			center: new google.maps.LatLng(myLatLng),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		// Draw the map
		var mapObject = map;

		//var directionsRenderer = new google.maps.DirectionsRenderer();
		//directionsRenderer.setMap(mapObject);

		var directionsService = new google.maps.DirectionsService();
		var directionsRequest = {
			origin: from,
			destination: to,
			travelMode: google.maps.DirectionsTravelMode.DRIVING,
			unitSystem: google.maps.UnitSystem.METRIC
		};
	        
		directionsService.route( directionsRequest, function(response, status){
			if (status == google.maps.DirectionsStatus.OK){
				//directionsDisplay.setOptions({suppressMarkers: true});
				new google.maps.DirectionsRenderer({
					map: mapObject,
					directions: response,
					suppressMarkers: true,
					polylineOptions: {
					//icons: [],
					strokeColor: "#232020",
					strokeOpacity: ".7",
					strokeWeight: "6"
					//draggable: true
					//editable: true
					}
				});
				map.setCenter(bounds.getCenter()); //.fitBounds(map.getBounds(), 50);
	              
	        } else {
				$("#error").append("Unable to retrieve your route<br />");
				console.log('directions response: ' +response);
			}
		});
	}


	function getUserLoc(){
		// Try HTML5 geolocation.
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				var pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};
				//console.log(pos);
				//pos = testLL;
				
				//infoWindow.setPosition(pos);
				//infoWindow.setContent('Location found.');
				//infoWindow.open(map);
				//map.setCenter(pos);
				
				var service = new google.maps.DistanceMatrixService;
				service.getDistanceMatrix({
					origins: [pos],
					destinations: [myLatLng],
					travelMode: 'DRIVING',
					unitSystem: google.maps.UnitSystem.IMPERIAL,
					avoidHighways: false,
					avoidTolls: false
				}, function(response, status) {
					if (status !== 'OK') { // BOO
						alert('Error was: ' + status);
					} else { // YAY

						console.log('get distance response' + response);

						var origin = response.originAddresses[0];
						var destination = response.destinationAddresses[0];
						// {text: "308 ft", value: 94}
						var distance = response.rows[0].elements[0].distance; 
						// {text: "1 min", value: 40}
						var time = response.rows[0].elements[0].duration; 
						var miles = getMiles(distance.value);
						//console.log(originList);

						var Dmarker = new google.maps.Marker({
							position: pos,
							map: map,
							title: 'You',
							animation: google.maps.Animation.DROP,
							icon: {
								url: "https://icons.iconarchive.com/icons/icons-land/vista-map-markers/256/Map-Marker-Push-Pin-2-Left-Azure-icon.png",
								scaledSize: new google.maps.Size(64, 64)
							}
						});

						let output = 'Your current location <strong>( ' + origin + ' )</strong> is about ' + miles + ' miles away. <br />Google thinks it would take me about <strong>' + time.text + '</strong> to get there. I\'m pretty sure I could do it in less!';
						$('.res-map .res-map-info p').html(output).removeClass('thinking');

						calculateRoute(origin, destination);
					}
				});

				//let distance = getDistance(pos, myLatLng);
				//console.log(distance);
				// https://maps.googleapis.com/maps/api/distancematrix/json?parameters
				// origins=41.43206,-81.38992|-33.86748,151.20699

			}, function() {
				handleLocationError(true, infoWindow, map.getCenter());
			});
		} else {
			// Browser doesn't support Geolocation
			handleLocationError(false, infoWindow, map.getCenter());
		}
	}

	function handleLocationError(browserHasGeolocation, infoWindow, pos) {
		console.log('location error: ' + pos);
		infoWindow.setPosition(pos);
		infoWindow.setContent(browserHasGeolocation ?
		'Error: The Geolocation service failed.' :
		'Error: Your browser doesn\'t support geolocation.');
		infoWindow.open(map);
		$('.res-map .res-map-info p').html('<p>Well that\'s awkward.</p>').removeClass('thinking');

	}

	getUserLoc();

}


// https://snazzymaps.com (WOWWY-WOW-WOW!!)
var Kevin = new google.maps.StyledMapType(
[
    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [ { "visibility": "off" } ]
    },{
        "featureType": "all",
        "elementType": "labels",
        "stylers": [ { "visibility": "off" } ]
    },{
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [ { "visibility": "off" } ]
    },{
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [ { "visibility": "on" }, { "color": "#232020" } ]
    }
],
{name: 'Simplicity'});

var BobsMyUncle = new google.maps.StyledMapType(
[
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [ { "visibility": "off" } ]
    },{
        "featureType": "administrative.country",
        "elementType": "all",
        "stylers": [ { "visibility": "on" } ]
    },{
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [ { "color": "#ff0000" } ]
    },{
        "featureType": "administrative.country",
        "elementType": "labels.text.stroke",
        "stylers": [ { "color": "#3a3535" } ]
    },{
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [ { "visibility": "on" } ]
    },{
        "featureType": "administrative.province",
        "elementType": "labels.text.fill",
        "stylers": [ { "color": "#ff0000" } ]
    },{
        "featureType": "administrative.province",
        "elementType": "labels.text.stroke",
        "stylers": [ { "color": "#3a3535" } ]
    },{
        "featureType": "administrative.locality",
        "elementType": "all",
        "stylers": [ { "visibility": "off" } ]
    },{
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [ { "color": "#ffffff" } ]
    },{
        "featureType": "administrative.locality",
        "elementType": "labels.text.stroke",
        "stylers": [
            { "color": "#756151" },
            { "lightness": "15" },
            { "saturation": "2" },
            { "gamma": "3.67" }
        ]
    },{
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [ { "visibility": "simplified" } ]
    },{
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            { "visibility": "simplified" },
            { "color": "#f0af54" } 
        ]
    },{
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [ { "visibility": "off" } ]
    },{
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [ { "visibility": "off" } ]
    },{
        "featureType": "road.highway.controlled_access",
        "elementType": "all",
        "stylers": [ { "visibility": "simplified" } ]
    },{
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill",
        "stylers": [
            { "visibility": "simplified" },
            { "color": "#f0af54" } 
        ]
    },{
        "featureType": "road.highway.controlled_access",
        "elementType": "labels.text",
        "stylers": [ { "visibility": "off" } ]
    },{
        "featureType": "road.highway.controlled_access",
        "elementType": "labels.icon",
        "stylers": [ { "visibility": "off" } ]
    },{
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [ { "visibility": "simplified" } ]
    },{
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            { "visibility": "simplified" },
            { "color": "#d2c1a5" }
        ]
    },{
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [ { "visibility": "off" } ]
    },{
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [ { "visibility": "simplified" } ]
    },{
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            { "color": "#c4a983" },
            { "visibility": "simplified" }
        ]
    },{
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [ { "visibility": "off" } ]
    },{
        "featureType": "water",
        "elementType": "all",
        "stylers": [ { "visibility": "off" } ]
    },{
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [ { "visibility": "off" } ]
    },{
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            { "visibility": "off" },
            { "color": "#e3ce9f" } 
        ]
    },{
        "featureType": "water",
        "elementType": "geometry.stroke",
        "stylers": [ { "visibility": "simplified" } ]
    },{
        "featureType": "water",
        "elementType": "labels",
        "stylers": [ { "visibility": "off" } ]
    }
],
{ name: 'bobs-my-uncle' });


