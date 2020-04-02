// Compilation placeholders

var   header 		= ""
	, contactInfo 	= ""
	, headerInfo 	= ""
	, navigation 	= ""
	, blurbs 		= ""
	, doodles 		= ""
	, tabContent 	= ""
	, skillTabs 	= ""
	, newTabs 		= ""
	, skills 		= ""
	, phistory 		= ""
	, education 	= ""
	, interests 	= ""
	, objective 	= ""
	, summary 		= ""
	, starList 		= ""
	, modal 		= ""
	, extras 		= ""
	, pallets 		= "";


// TEMPLATES

var navigationTemplate = `
	<a href="#{{title}}" class="nav-{{classy}}">
		<span>
			<i class="far fa-compass"></i>{{title}}
		</span>
	</a>
`;
var tabTableRowTemplate = `
	<tr>
		<td class="can-edit">{{name}}</td>
		<td class="can-edit">{{years}}</td>
		<td class="can-edit">{{prof}}</td>
	</tr>
`;
var tabInfoTemplate = `<p class="can-edit"><strong>{{name}} [{{years}} years]:</strong> {{{info}}}</p>`;
var newTabContent = `<div>{{{content}}}</div>`;
var skillTabTemplate = `
	<li class="res-skill-{{type}} {{tabcontent}}">
	    <input type="radio" name="{{radiogroup}}" id="tab{{counter}}"{{selected}} />
	    <label for="tab{{counter}}" tabindex="{{counter}}">
	    	<i class="fas fa-{{tabicon}}"></i>
	    </label>
	    <div id="tab-content{{counter}}" class="tab-content sketchy-border lined thin" data-display="{{tabcontent}}"></div>
	</li>
`;
var newTabTemplate = `
	<li class="res-tab-{{type}}">
	    <input type="radio" name="{{radiogroup}}" id="{{prefix}}{{counter}}" />
	    <label for="{{prefix}}{{counter}}" tabindex="{{counter}}">
	    	<i class="fas fa-{{tabicon}}"></i>
	    </label>
	    <div id="{{prefix}}-content{{counter}}" class="tab-content" data-display="{{tabcontent}}"></div>
	</li>
`;
var skillsTemplate = ` 
	<li class="res-editable res-skills-{{type}}">
		<h3 class="tabs-title tabby tack rr">
			<i class="inner"></i>
			<span>{{type}}:</span>
			<nav>
				<button class="editable">
					<span class="tooltip" data-title="Turn editing on/off.">Edit</span>
				</button>
				<button class="print-basket">
					<span class="tooltip" data-title="Add/Remove this for printing.">Add for Print</span>
				</button>
			</nav>
		</h3>
		<ul data-type="{{type}}" class="taped-b tabs" role="tablist" data-radio="skillTabs"></ul>
	</li>
`;
var headerTemplate = `
	<h1 class="">{{name}}</h1>
	<h2>{{{title}}}</h2>
	<h3>{{tagline}}</h3>
`;
var contactTemplate = `
	<section class="contact-info">
		<h2 class="visually-hidden">Main Menu</h2>
		<ul>
			<li class="just-the-tip"></li>
			<li class="theme-toggle tooltip toggler {{theme}}" data-title="Agile theme on/off">
				<button class="test-me" data-test-name="Menu: Local" data-test-cat="Theme Toggle">
					<i class="fas fa-toggle-on"></i>
					<i class="fas fa-toggle-off"></i>
					<span>Agile theme toggle</span>
				</button>
			</li>
			<li class="tooltip btfu" data-title="Back to the beginning">
				<button class="test-me" data-test-name="Menu: Local" data-test-cat="Introduction Link">
					<i class="fas fa-circle-notch"></i>
					<span>View Introduction (again)</span>
				</button>
			</li>
			<li class="tooltip sigh" data-title="Pretty (old) things">
				<button class="test-me" data-test-name="Menu: Local" data-test-cat="Portfolio Link">
					<i class="fas fa-camera-retro"></i>
					<span>Old Screencaps</span>
				</button>
			</li>
			<li class="wrap tooltip" data-title="Check out my 1-page resume">
				<a href="assets/resume.pdf" target="_blank" class="pdf test-me" data-test-name="Menu: Local" data-test-cat="View PDF Resume">
					<i class="far fa-file-pdf"></i>
					<span>Resum&#233; <sup><i class="fas fa-external-link-alt"></i></sup></span>
				</a>
			</li>
			<li class="wrap tooltip" data-title="View my LinkedIn profile">
				<a href="https://www.linkedin.com/in/jeffrey-hill-ux-guru/" target="_blank" class="linkedin test-me" data-test-name="Menu: Non-Local" data-test-cat="View LinkedIn Profile">
					<i class="fab fa-linkedin"></i>
					<span>LinkedIn <sup><i class="fas fa-external-link-alt"></i></sup><span>
				</a>
			</li>
			<li class="tooltip" data-title="Call me, maybe">
				<a href="tel:{{phone}}" class="phone test-me" data-test-name="Menu: Local" data-test-cat="Phone Link">
					<i class="fas fa-mobile-alt"></i>
					<span>{{prettyPhone}}<span>
				</a>
			</li>
			<li class="tooltip" data-title="eMail me, maybe">
				<a href="mailto:mrjeffhill@gmail.com?subject=Sweet%20Resume%20Dude!" target="_blank" class="email test-me" data-test-name="Menu: Local" data-test-cat="Email Link">
					<i class="far fa-envelope"></i>
					<span>{{email}}</span>
				</a>
			</li>
			<li class="tooltip" data-title="View my location in a new tab">
				<a href="https://goo.gl/maps/bpRUJ3iLHGZ8ib5H8" target="_blank" class="address test-me" data-test-name="Menu: Non-Local" data-test-cat="View Map Location">
					<i class="fas fa-map-marker-alt"></i>
					<address>
						<span class="line-one">{{street}}</span>
						<span class="line-two">{{city}}, {{state}} {{zip}}</span>
					</address>
				</a>
			</li>
			<li class="mappy tooltip toggler" data-title="See what the commute might be">
				<button class="test-me" data-test-name="Menu: Local" data-test-cat="Commute Link">
					<i class="fas fa-car commute"></i>
					<span>Commute distance</span>
				</button>
			</li>
			<li class="min-only me tooltip" data-title="As if you need/care to know more">
				<button class="test-me" data-test-name="Menu: Local" data-test-cat="Personal Link">
					<i class="far fa-id-card"></i>
					<span>More Me</span>
				</button>
			</li> 
			<li class="tools-toggle tooltip toggler" data-title="Things I build for building">
				<button>
					<i class="fas fa-cogs"></i>
					<span>Dev Tools</span>
				</button>
			</li>
			<li class="debug-toggle tooltip toggler" data-title="UA/IP Info">
				<button>
					<i class="fas fa-spider"></i>
					<span>Debug Data</span>
				</button>
			</li>
			<li class="tts-toggle tooltip toggler" data-title="Turn TTS on/off">
				<button>
					<i class="fas fa-comment-dots"></i>
					<i class="far fa-comment"></i>
					<span>Text to Speech</span>
				</button>
			</li>
			<li class="tooltip static version" data-title="No Cacheing!">
				<i class="fas fa-infinity"></i>
				<span>Version: {{version}}</span>
			</li>
		</ul>
	</section>
`;
var galleryTemplate = `
	<li class="tooltip" data-title="Open {{{title}}} in a new tab">
		<a href="assets/img/portfolio/{{{thumb}}}" class="rr" title="{{{title}}}" target="_blank">
			<span class="clippy">
				<img class="{{classy}}" src="assets/img/portfolio/{{{thumb}}}" alt="{{{title}}}" />
			</span>
			<p>{{{details}}}</p>
		</a>
	</li>
`;
var historyTemplate = `
	<article class="res-editable res-organization {{class}}">
		<nav>
			<button class="editable">
				<span class="tooltip" data-title="Turn editing on/off.">Edit</span>
			</button>
			<button class="print-basket">
				<span class="tooltip" data-title="Add/Remove this for printing.">Add for Print</span>
			</button>
		</nav>
		<h3 class="org-title">Role: <span class="blank can-edit">{{title}}</span><i class="inner"></i></h3>
		<h4 class="org-name">
			<span class="logo sprite-offset-{{offset}} rr" data="assets/img/logos/{{logo}}"></span>
			Org: 
			<span class="blank">
				<a href="{{url}}" data-title="Open {{name}} in a new tab" target="_blank" class="org-url tooltip can-edit">
					{{name}}
				</a>
			</span>
		</h4>
		<address class="org-location can-edit">{{location}}</address>
		<div class="org-dates">
			<time class="org-start can-edit">{{{start}}}</time>
			<span> to </span>
			<time class="org-end can-edit">{{{end}}}</time>
		</div>
		<span class="org-capacity">Capacity: <span class="blank can-edit">{{employment}}</span></span>
		<details class="org-details">
			<summary class="org-summary add-tack rr">
				<i class="fas fa-caret-up"></i>
				<i class="fas fa-caret-down"></i>
				<span class="show-toggle show-more">Show More</span>
				<span class="show-toggle show-less">Show Less</span>
			</summary>
			<div class="guts can-edit">
				<h5>About {{name}}</h5> {{{description}}}

				<h5 class="org-highlights">Highlights & Responsibilities</h5>
				<ul class="org-accomplishments custom-list">{{hl els}}</ul>

				<h5 class="org-skills">Skills, Tools...</h5>
				<ul class="org-skill-list werd-cloud">{{sk sks}}</ul>

				<div class="gallery">
					<h5>Portfolio</h5>
					<ul class="polaroids clearfix">{{gy ims}}</ul>
				</div>
			</div>
		</details>
	</article>
`;
var interestsTemplate = `
	<li class="carousel-cell">
		<h2>{{{name}}}</h2>
		<blockquote>
			<p>{{{detail}}}</p>
			<cite>{{{cite}}}</cite>
		</blockquote>
	</li>
`;
var objectiveTemplate = `
	<div class="sticky note-card rr">
		<h4 class="tack"><i class="inner"></i><span class="can-edit">Or, why I do this:</span></h4>
		<div class="note-card-text pretty-scroll can-edit">{{{blurb}}}</div>
	</div>
`;
var summaryTemplate = `
	<div class="sticky note-card rr">
		<h4 class="tack"><i class="inner"></i><span class="can-edit">What I do:</span></h4>
		<div class="note-card-text pretty-scroll can-edit">{{{blurb}}}</div>
	</div>
`;
var starsTemplate = ` 
	<dt class="res-skill">{{name}}</dt>
	<dd class="res-years">{{years}}</dd>
	<dd class="res-score" data-score="{{score}}">{{{stars}}}</dd>
`;
var chartItemTemplate = `
	<div class="barchart-col">
		<div class="barchart-bar" data-prof="{{prof}}"></div>
		<div class="barchart-footer">{{name}}</div>
	</div>
`;
var modalTemplate = `
	<div class="modal-shade theme-{{rando}}"></div>
	<div id="fancyModal" class="fancy fancy-modal theme-{{rando}}"> 
		<h2 class="can-edit">{{{head}}}</h2>
		<div class="wrapper">
			<hr class="above" />
			<div class="modal-content pretty-scroll can-edit" contenteditable spellcheck="false">
				{{{body}}}
			</div>
			<hr />
			<a href="" class="button modal-closer closeable spiffy-btn" id="closeFancy"><span>{{{confirm}}}</span></a>
		</div>
	</div>
`;
var blurbTemplate = `
	<li class="nap{{ind}} rr">
		<blockquote>
			<p class="can-edit">{{{blurb}}}</p>
			<cite class="can-edit"><strong>{{{cite}}}</strong><br />{{title}}<br />{{company}}</cite>
		</blockquote>
	</li>
`;
var doodleTemplate = `
	<li class="rr taped-b">
		<a href="{{url}}" target="_blank">{{title}}</a>
		<img src="assets/img/{{thumb}}" alt="{{title}}" />
		<p>{{{text}}}</p>
	</li>
`;
var educationTemplate = `
	<li class="rr add-tack">
		<span class="wrap">
			<h2>{{{name}}} <em>({{{type}}})<\/em></h2>
			<img src="assets/img/logos/{{{logo}}}" alt="{{{name}}} logo" />
			<dl class="pretty-scroll">
				<dt>Location: </dt>
				<dd>{{{location}}}</dd>
				<dt>Dates: </dt>
				<dd>{{{start}}} - {{{end}}}</dd>
				<dt>Degree: </dt>
				<dd>{{{degree}}}</dd>
				<dt>Awards: </dt>
				<dd>{{{awards}}}</dd>
				<dt>Detail: </dt>
				<dd>{{{description}}}</dd>
			</dl>
		</span>
	</li>
`;
var meTemplate = `
	<span class="rr"><img src="assets/img/{{moi}}" /></span>
	<article class="pretty-scroll">{{{about}}}</article>
`;
// <button class="closer">Close</button>





// STATIC MARKUP
// <i class="fas fa-bars"></i> <i class="fas fa-info-circle"></i>
var baseMessage = `
	The first theme you're about to view is the basic version. To switch to the other theme, look for the <i class="fas fa-bars"></i> icon on the right side of the header to open the menu and then select "Agile Theme" to activate it.
`;
var agileMessage = `
	The first theme you're about to view is the "Agile" version. To switch to the basic theme, look for the <i class="fas fa-bars"></i> icon on the right side of the header to open the menu and then select "Agile Theme" to deactivate it.
`;
var printEditTools = `
	<nav>
		<button class="editable">
			<span class="tooltip" data-title="Turn editing on/off.">Edit</span>
		</button>
		<button class="print-basket">
			<span class="tooltip" data-title="Add/Remove this for printing.">Add for Print</span>
		</button>
	</nav>
`;
var theSniffening = `
	<div class="all-parsed">
		<div class="pretty-scroll">
			<h4>UA Data...</h4>
			<dl class="ua-parsed"></dl>
			<h4>IP Data...</h4>
			<dl class="ip-parsed"></dl>
		</div>
	</div>
`;
var tabTableTemplate = `
	<table>
		<thead><tr><th>Skill</th><th>Years</th><th>Proficiency n/10</th></tr></thead>
		<tbody></tbody>
		<tfoot></tfoot>
	</table>
`;
var chartTemplate = `
	<div class="barchart-wrapper">
		<div class="barchart-prof-col">
			<div class="barchart-prof">
				<span class="barchart-prof-text">10</span>
			</div>
			<div class="barchart-prof">
				<span class="barchart-prof-text">9</span>
			</div>
			<div class="barchart-prof">
				<span class="barchart-prof-text">8</span>
			</div>
			<div class="barchart-prof">
				<span class="barchart-prof-text">7</span>
			</div>
			<div class="barchart-prof">
				<span class="barchart-prof-text">6</span>
			</div>
			<div class="barchart-prof">
				<span class="barchart-prof-text">5</span>
			</div>
			<div class="barchart-prof">
				<span class="barchart-prof-text">4</span>
			</div>
			<div class="barchart-prof">
				<span class="barchart-prof-text">3</span>
			</div>
			<div class="barchart-prof">
				<span class="barchart-prof-text">2</span>
			</div>
			<div class="barchart-prof">
				<span class="barchart-prof-text">1</span>
			</div>
		</div>
		<div class="barchart-container">
			<div class="barchart"></div>
		</div>
	</div>
`;
var resizR = `
	<ul id="ResizR">
		<li class="device-watch sizer tooltip" data-title="Is this even possible?"><i class="far fa-clock"></i><span>Watch</span></li>
		<li class="device-phone-portrait sizer tooltip" data-title="Phone, Portrait"><i class="fas fa-mobile-alt"></i><span>Phone</span></li>
		<li class="device-phone-landscape sizer tooltip" data-title="Phone, Landscape"><i class="fas fa-mobile-alt landscape"></i><span>Phone</span></li>
		<li class="device-tablet-portrait sizer tooltip" data-title="Tablet, Portrait"><i class="fas fa-tablet-alt"></i><span>Tablet</span></li>
		<li class="device-tablet-landscape sizer tooltip" data-title="Tablet, Landscape"><i class="fas fa-tablet-alt landscape"></i><span>Tablet</span></li>
		<li class="device-desktop sizer tooltip active" data-title="Desktop"><i class="fas fa-desktop"></i><span>Desktop</span></li>
		<li class="device-tv sizer tooltip" data-title="Huge-ass Screen"><i class="fas fa-tv"></i><span>TV</span></li>
		<li class="toggle tooltip" data-toggle=".pallet-panel" data-title="View color pallet"><i class="fas fa-palette"></i><span>Pallet</span></li>
		<li class="toggle tooltip" data-toggle=".fonts-panel" data-title="View font options"><i class="fas fa-font"></i><span>Fonts</span></li>
	</ul>
`;
var resizRmin = `
	<li class="toggler tooltip pallet-toggle" data-toggle=".pallet-panel" data-title="View color pallet">
		<button><i class="fas fa-palette"></i><span>Pallet</span></button></li>
	<li class="toggler tooltip fonts-toggle" data-toggle=".fonts-panel" data-title="View font options">
		<button><i class="fas fa-font"></i><span>Fonts</span></button></li>
`;
var pallet = `
	<ul class="current-pallet pallet-panel res-panel">
		<li></li><li></li><li></li><li></li><li></li><li></li>
		<li></li><li></li><li></li><li></li><li></li><li></li>
	</ul>
`;
var fonts = `
	<ul class="current-fonts fonts-panel res-panel">
		<li class="pt-serif">PT Serif</li>
		<li class="raleway">Raleway</li>
		<li class="marker">Permanent Marker</li>
		<li class="patrick">Patrick Hand SC</li>
		<li class="amatic">Amatic SC</li>
		<li class="architect">Architects Daughter</li>
		<li class="indie">Indie Flower</li>
		<li class="caveat">Caveat</li>
		<li class="walter">Walter Turncoat</li>
		<li class="special">Special Elite</li>
		<li class="finger">Finger Paint</li>
	</ul>
`;
// <i class="fas fa-share-alt"></i>
var shareLinks = `
	<ul class="share-buttons">
	    <li>
	    	<a href="https://twitter.com/intent/tweet?source=http%3A%2F%2Fresume.jeffhill.info%2F&text=Jeff%20Hill's%20TMI%20Resume:%20http%3A%2F%2Fresume.jeffhill.info%2F&via=Jeff_Hill" target="_blank" title="Twitter: #Awesome, #HireThisGuy, #BobsYourUncle." class="tooltip">
	    		<i class="fab fa-twitter"></i>
	    	</a>
	    </li>
	    <li>
	    	<a href="https://plus.google.com/share?url=http%3A%2F%2Fresume.jeffhill.info%2F" target="_blank" title="Google+: So the other person that uses Google+ will know." class="tooltip">
	    		<i class="fab fa-google-plus-g"></i>
	    	</a>
	    </li>
	    <li>
	    	<a href="http://www.tumblr.com/share?v=3&u=http%3A%2F%2Fresume.jeffhill.info%2F&quote=Jeff%20Hill's%20TMI%20Resume&s=" target="_blank" title="Tumblr: ..." class="tooltip">
	    		<i class="fab fa-tumblr"></i>
	    	</a>
	    </li>
	    <li>
	    	<a href="http://pinterest.com/pin/create/button/?url=http%3A%2F%2Fresume.jeffhill.info%2F&media=http://resume.jeffhill.info/assets/img/preview.png&description=More%20than%20you%20ever%20wanted%20to%20know%20about%20this%20guy!" target="_blank" title="Pinterest: For my mom." class="tooltip">
	    		<i class="fab fa-pinterest-p"></i>
	    	</a>
	    </li>
	    <li>
	    	<a href="https://getpocket.com/save?url=http%3A%2F%2Fresume.jeffhill.info%2F&title=Jeff%20Hill's%20TMI%20Resume" target="_blank" title="Pocket: Whatever this one does." class="tooltip">
	    		<i class="fab fa-get-pocket"></i>
	    	</a>
	    </li>
	    <li>
	    	<a href="http://www.reddit.com/submit?url=http%3A%2F%2Fresume.jeffhill.info%2F&title=Jeff%20Hill's%20TMI%20Resume" target="_blank" title="Reddit: 4 teh 13375" class="tooltip">
	    		<i class="fab fa-reddit-alien"></i>
	    	</a>
	    </li>
	    <li>
	    	<a href="http://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Fresume.jeffhill.info%2F&title=Jeff%20Hill's%20TMI%20Resume&summary=More%20than%20you%20ever%20wanted%20to%20know%20about%20this%20guy!&source=http%3A%2F%2Fresume.jeffhill.info%2F" target="_blank" title="LinkedIn: Tinder for recruiters." class="tooltip">
	    		<i class="fab fa-linkedin"></i>
	    	</a>
	    </li>
	    <li>
	    	<a href="http://wordpress.com/press-this.php?u=http%3A%2F%2Fresume.jeffhill.info%2F&quote=Jeff%20Hill's%20TMI%20Resume&s=More%20than%20you%20ever%20wanted%20to%20know%20about%20this%20guy!&i=http://resume.jeffhill.info/assets/img/preview.png" target="_blank" title="WordPress: Blog me!" class="tooltip">
	    		<i class="fab fa-wordpress-simple"></i>
	    	</a>
	    </li>
	    <li>
	    	<a href="mailto:?subject=Jeff%20Hill's%20TMI%20Resume&body=More%20than%20you%20ever%20wanted%20to%20know%20about%20this%20guy!:%20http%3A%2F%2Fresume.jeffhill.info%2F" target="_blank" title="Email: For my mom." class="tooltip">
	    		<i class="far fa-envelope"></i>
	    	</a>
	    </li>
	    <li>
	    	<a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fresume.jeffhill.info%2F&quote=Jeff%20Hill's%20TMI%20Resume" title="Facebook: I put this one last on purpose." target="_blank" class="tooltip">
	    		<i class="fab fa-facebook"></i>
	    	</a>
	    </li>
	</ul>
`;



// TEMPLATE HELPERS
Handlebars.registerHelper("gy", function(ims) {
	var result = "";
	for (x in ims) {
		var template = Handlebars.compile(galleryTemplate);
		if (ims[x].thumb && ims[x].thumb !== ""){
			result += template({ 
				thumb: 			ims[x].thumb,
				classy: 		classify(ims[x].name),
				details: 		ims[x].details,
				title: 			ims[x].description
			});
		}
	}
	return new Handlebars.SafeString(result);
});
Handlebars.registerHelper("hl", function(els) {
	var result = "";
	for (x in els) {
		result += "<li>" + Handlebars.escapeExpression(els[x]) + "</li>";
	}
	return new Handlebars.SafeString(result);
});
Handlebars.registerHelper("sk", function(sks) {
	var result = "";
	for (x in sks) {
		result += '<li class="ww-' + Handlebars.escapeExpression(sks[x].weight) + '">' + Handlebars.escapeExpression(sks[x].name) + '</li>';
	}
	return new Handlebars.SafeString(result);
});
Handlebars.registerHelper("fw", function(fws) {
	var result = "";
	for (x in fws) {
		result += "<li>" + Handlebars.escapeExpression(fws[x]) + "</li>";
	}
	return new Handlebars.SafeString(result);
});



// TEMPLATE BUILDERS
var justTheContent = function(destEl, tabData){ // newTab
	var template = Handlebars.compile(newTabContent);
	tabContent = template({ 
		content: 		tabData
	});
	destEl.append(tabContent);
	tabContent = "";
}

var chartInt = 0;
var tabHandoff = false;
var buildTabContent = function(destEl, tabData, isNew){ // Refactor!
	let els = $('li', destEl).not('li.toggle', destEl);
	let el = null;
	isNew ? el = $('li:last-child .tab-content', destEl) : null;
	let contentTemplate = "";
	els.each(function( index ) {
		let target = $('.tab-content', $(this));
		let contentType = target.data('display');
		
		switch(contentType) {
			case 'chart':
				tabHandoff = false;
				target.append(chartTemplate);
				target = $('.barchart', target);
				contentTemplate = chartItemTemplate;
				chartInt++;
				break;
			case 'table':
				tabHandoff = false;
				target.append(tabTableTemplate);
				target = $('tbody', target);
				contentTemplate = tabTableRowTemplate;
				break;
			case 'stars':
				tabHandoff = true;
				target.append('<dl class="galaxy"></dl>');
				buildSkillStars($('dl.galaxy', target), tabData, 5);
				break;
			case 'info':
				tabHandoff = false;
				contentTemplate = tabInfoTemplate;
				break;
			case 'pallet':
				tabHandoff = true;
				justTheContent(el, tabData);
				break;
			case 'static':
				tabHandoff = true;
				break;
			default:
				//console.log('Tab content type not defined... skip.');
		}
		if (!tabHandoff){
			for (x in tabData) {
				var template = Handlebars.compile(contentTemplate);
				tabContent += template({ 
					name: 			tabData[x].name,
					years: 			tabData[x].years,
					prof: 			tabData[x].prof,
					info: 			tabData[x].info
				});
			}
			target.append(tabContent);
			tabContent = "";
		}
	});
}

var tabTypes = [ "chart", "table", "stars", "info" ];
var tabIcons = [ "chart-pie", "table", "star-half-alt", "info-circle" ];
var tabCounter = 0;
var buildTabs = function(destEl, tabData, type, isNew, icon){
	let radioGroup = destEl.closest('ul.tabs').data('radio');
	let radioPrefix = destEl.closest('ul.tabs').data('prefix');
	if (!isNew){
		radioGroup = radioGroup + tabCounter;
		for (x in tabTypes) {
			let initial = tabTypes[x] == "info" ? " checked" : "";
			var template = Handlebars.compile(skillTabTemplate);
			newTabs += template({ 
				type: 			type,
				tabcontent: 	tabTypes[x],
				tabicon: 		tabIcons[x],
				counter: 		tabCounter,
				selected: 		initial,
				radiogroup: 	radioGroup
			});
			tabCounter++;
		}

	} else {
		var template = Handlebars.compile(newTabTemplate);
		newTabs += template({ 
			type: 			type,
			tabcontent: 	type,
			content: 		tabData.content,
			tabicon: 		icon,
			counter: 		tabCounter,
			radiogroup: 	radioGroup,
			prefix: 		radioPrefix
		});
		tabCounter++;
	}
	destEl.append(newTabs);
	buildTabContent(destEl, tabData, isNew);
	newTabs = "";
}

var getSkills = function(){
	$('#Skills ul.tabs').each(function( index ) {
		let type = $( this ).data('type');
		$( this ).data('skill-data', resume.skills[type]);
		buildTabs($(this), $(this).data('skill-data'), type, false);
	});
	
}

var buildSkills = function(destEl){
	for (x in resume.skills) {
		var template = Handlebars.compile(skillsTemplate);
		skills += template({ 
			type: 			classify(x),
			data: 			resume.skills[x]
		});
	}
	destEl.append(skills);
	getSkills();
}

var buildContactInfo = function(destEl, mb){
	var template = Handlebars.compile(contactTemplate);
	contactInfo = template({ 
		photo: 			resume.personal.photo,
		name: 			resume.personal.name,
		title: 			resume.personal.title,
		tagline: 		resume.personal.tagline,
		street: 		resume.personal.address.street,
		city:			resume.personal.address.city,
		state:			resume.personal.address.state,
		zip:			resume.personal.address.zip,
		phone: 			resume.personal.phone,
		prettyPhone: 	formatPhone(resume.personal.phone),
		email: 			resume.personal.email,
		theme: 			currentTheme != ''? ' active' : '',
		version: 		version
	});
	mb ? destEl.append(mb) :  null;
	destEl.append(contactInfo);
}

var buildHeader = function(destEl){
	var template = Handlebars.compile(headerTemplate);
	headerInfo = template({ 
		photo: 			resume.personal.photo,
		name: 			resume.personal.name,
		title: 			resume.personal.title,
		tagline: 		resume.personal.tagline
	});
	destEl.append(headerInfo);
	getTouchy();
}

var buildExtras = function(destEl){
	var template = Handlebars.compile(extrasTemplate);
	extras = template({ 
		qr: resume.personal.qr
	});
	destEl.append(extras);
	buildTabs($('#Deets .tabs'), "<div></div>", "pallet", true, "palette");
	buildPalletPicker($('.tab-content[data-display="pallet"]'));
	initMap();
}

var buildHistory = function(destEl){
	let y = 0;
	for (x in resume.history) {
		var template = Handlebars.compile(historyTemplate);
		phistory += template({ 
			class: 			classify(resume.history[x].name),
			name: 			resume.history[x].name,
			logo: 			resume.history[x].logo,
			offset: 		(y*80),
			location: 		resume.history[x].address,
			url: 			resume.history[x].url,
			title: 			resume.history[x].title,
			start: 			formatMonthYear(resume.history[x].start),
			end: 			formatMonthYear(resume.history[x].end),
			employment: 	resume.history[x].employment,
			description: 	resume.history[x].description,
			els: 			resume.history[x].details,
			sks: 			shuffle(resume.history[x].skills),
			fws: 			resume.history[x].frameworks,
			ims: 			resume.history[x].projects
		});
		y++;
	}
	destEl.append(phistory);
	$.each($('div.gallery'), function( i, v ) {
		if (!$('li', $(this)).length){ $(this).remove(); }
	});
	buildPortfolioGallery();
}

var buildMe = function(destEl){ //meTemplate
	var template = Handlebars.compile(meTemplate);
	let me = "";
	me += template({ 
		moi: 		resume.personal.photo,
		about: 		resume.personal.about
	});
	$(destEl).append(me);
}

var buildBlurbs = function(destEl){
	for (x in resume.recommendations) {
		var template = Handlebars.compile(blurbTemplate);
		blurbs += template({ 
			blurb: 		resume.recommendations[x].text,
			cite: 		resume.recommendations[x].name,
			title: 		resume.recommendations[x].title,
			company: 	resume.recommendations[x].company,
			ind: 		x
		});
	}
	$(destEl).append(blurbs);
}

var buildDoodles = function(destEl){
	let intro = resume.doodles.intro;
	for (x in resume.doodles.items) {
		var template = Handlebars.compile(doodleTemplate);
		doodles += template({ 
			title: 		resume.doodles.items[x].title,
			url: 		resume.doodles.items[x].url,
			thumb: 		resume.doodles.items[x].thumb,
			text: 		resume.doodles.items[x].description
		});
	}
	$('ul', destEl).before('<h3 class="res-doodle-intro">'+ intro +'</h3>');
	$('ul', destEl).append(doodles);
}

var buildInterests = function(destEl){
	for (x in resume.interests) {
		var template = Handlebars.compile(interestsTemplate);
		interests += template({ 
			name: resume.interests[x].name,
			detail: resume.interests[x].detail,
			cite: resume.interests[x].cite
		});	
	}
	$('ul', destEl).append(interests);
	$carousel = $('.agile ul', destEl).flickity({
		cellAlign: 'left',
		contain: true
	});
}


var buildEducation = function(destEl){
	for (x in resume.education) {
		var template = Handlebars.compile(educationTemplate);
		education += template({ 
			name: 			resume.education[x].name,
			logo: 			resume.education[x].logo,
			type: 			resume.education[x].type,
			location: 		resume.education[x].location,
			start: 			resume.education[x].start,
			end: 			resume.education[x].end,
			description: 	resume.education[x].description,
			degree: 		resume.education[x].degree,
			awards: 		resume.education[x].awards

		});
	}
	$('ul', destEl).append(education);
}

var buildObjective = function(destEl){
	var template = Handlebars.compile(objectiveTemplate);
	objective += template({ 
		blurb: resume.objective
	});
	destEl.append(objective);
}

var buildSummary = function(destEl){
	var template = Handlebars.compile(summaryTemplate);
	summary += template({ 
		blurb: resume.summary
	});
	destEl.append(summary);
}
				
var buildSkillStars = function(destEl, skilldata, max){
	for (x in skilldata) {
		var template = Handlebars.compile(starsTemplate);
		starList += template({ 
			name: 			skilldata[x].name,
			years: 			skilldata[x].years,
			score: 			skilldata[x].prof,
			stars: 			twinkleTwinkle(skilldata[x].prof, max)
		});
	}
	destEl.append(starList);
	starList = "";
}

var buildNavigation = function(destEl){
	for (x in resume) {
		var template = Handlebars.compile(navigationTemplate);
		navigation += template({ 
			title: 			capFirstLetter(x),
			classy: 		classify(x)
		});
	}
	destEl.append(navigation);
}

var buildModal = function(destEl, modalData){
	for (x in modalData) {
		var template = Handlebars.compile(modalTemplate);
		modal += template({ 
			head: 		modalData[x].head,
			body: 		modalData[x].body,
			confirm: 	modalData[x].confirm,
			rando: 		(getRandom(3) + 1)
		});
	}
	destEl.append(modal);
	bindClose($('#fancyModal'));
	modal = "";
}



/* Other - not yet implemented */
var colorThemes = [
	{ "name": "Coco", "classes": "fibonacci-ne coco" },
	{ "name": "Foam", "classes": "fibonacci-ne foam" },
	{ "name": "Straw", "classes": "fibonacci-ne straw" },
	{ "name": "Slate", "classes": "fibonacci-ne slate" },
	{ "name": "Musk", "classes": "fibonacci-ne musk" },
	{ "name": "Woods", "classes": "fibonacci-ne woods" }
];

var palletTemplate = `
	<div class="pallet {{classes}}" data-pallet="{{name}}">
		<p>{{{name}}}</p>
		<div><div><div><div></div></div></div></div>
	</div>
`;

var buildPalletPicker = function(destEl){
	for (x in colorThemes) {
		var template = Handlebars.compile(palletTemplate);
		pallets += template({ 
			name: 			colorThemes[x].name,
			classes: 		colorThemes[x].classes
		});
	}
	destEl.append(pallets);
}

/*
<!--
<div class="fibonacci-ne lg"><div><div><div><div></div></div></div></div></div>
<div class="fibonacci-nw"><div><div><div><div></div></div></div></div></div>
<div class="fibonacci-ne"><div><div><div><div></div></div></div></div></div>
<div class="fibonacci-se"><div><div><div><div></div></div></div></div></div>
<div class="fibonacci-sw"><div><div><div><div></div></div></div></div></div>
-->
<div class="fibonacci-ne pallet coco"><p>coco</p><div><div><div><div></div></div></div></div></div>
<div class="fibonacci-ne pallet foam"><p>foam</p><div><div><div><div></div></div></div></div></div>
<div class="fibonacci-ne pallet straw"><p>straw</p><div><div><div><div></div></div></div></div></div>
<div class="fibonacci-ne pallet slate"><p>slate</p><div><div><div><div></div></div></div></div></div>
<div class="fibonacci-ne pallet musk"><p>musk</p><div><div><div><div></div></div></div></div></div>
<div class="fibonacci-ne pallet woods"><p>woods</p><div><div><div><div></div></div></div></div></div>
*/


