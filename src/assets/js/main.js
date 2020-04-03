
//console.log(resume);

buildModal($('body'), resume.messages);
buildSkills($('#Skills ul'));
buildInterests($('#Interests'));
buildObjective($('#Objective'));
buildSummary($('#Summary'));
buildHistory($('#History'));
buildHeader($('body>header'));
buildNavigation($('body>header nav'));
//getScrolly();

/*
$.getJSON('https://api.ipify.org?format=json', function(data){
    console.log('ipify: ' + data.ip);
    //getIPdeets(data.ip);
});

$.getJSON('http://ipinfo.io', function(data){
    console.log('ipinfo: ' + data);
});
*/

//getDevicive(navigator.userAgent);
