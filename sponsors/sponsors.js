
var sponsors = [
 {"name": "Microsoft",
  "url": "http://www.microsoft.com",
  "logo": "sponsors/logos/MSFT.png",
  "what": "Conference Dinner"
 },
 {"name": "Google",
  "url": "http://www.google.com",
  "logo": "sponsors/logos/GOOG.jpg",
  "what": "Lunch and Documentation Center"
 },
 {"name": "Mozilla Foundation",
  "url": "https://www.mozilla.org",
  "logo": "sponsors/logos/mozilla_wordmark.png",
  "what": "Barista"
 },
 {"name": "Gigya",
  "url": "http://www.gigya.com",
  "logo": "sponsors/logos/gigya.jpg",
  "what": "Conference Breakfasts"
 },
 {"name": "NetIQ",
  "url": "https://www.netiq.com/",
  "logo": "sponsors/logos/netiq.png",
  "what": "BBQ Lunch"
 },
 {"name": "ForgeRock",
  "url": "https://www.forgerock.com/",
  "logo": "sponsors/logos/forgerock.png",
  "what": "Conference Projectors"
 },
 {"name": "Nexus Group",
  "url": "https://www.nexusgroup.com/",
  "logo": "sponsors/logos/nexus.jpeg",
  "what": "Tuesday Reception"
 },
 {"name": "Yubico",
  "url": "https://www.yubico.com/", 
  "logo": "sponsors/logos/yubico.png",
  "what": "Afternoon Break"
 }
];

var sponsors_old = [
 {"name": "Neustar",
  "url": "http://www.neustar.com",
  "logo": "sponsors/logos/neustar.png",
  "what": "Barista"
 },
 {"name": "Qredo",
  "url": "http://www.qredo.com",
  "logo": "sponsors/logos/Qredo.png",
  "what": "BBQ Lunch"
 },
 {"name": "ForgeRock",
  "url": "https://www.forgerock.com/",
  "logo": "sponsors/logos/forgerock.png",
  "what": "Conference Reception"
 },
 {"name": "Nexus Group",
  "url": "https://www.nexusgroup.com/",
  "logo": "sponsors/logos/nexus.jpeg",
  "what": "Tuesday Reception"
 },
 {"name": "Yubico",
  "url": "https://www.yubico.com/", 
  "logo": "sponsors/logos/yubico.png",
  "what": "Afternoon Break"
 },
 {"name": "OASIS ID Trust",
  "url": "http://www.oasis-idtrust.org/",
  "logo": "sponsors/logos/idtrust-logo.png",
  "what": "Documentation Center"
 }



/*-----
,
 {"name": "",
  "url": "",
  "logo": "sponsors/logos/",
  "what": "",
  "color": ""
 }

-----*/


];

var colors = [
    "tile-teal",
    "tile-blue",
    "tile-pink",
    "tile-sun-flower",
    "tile-wisteria",
    "tile-carrot"
];


$( document ).ready(function() {

    var source   = $("#sponsor-template").html();
    var template = Handlebars.compile(source);
 
    var count = 0;
    jQuery.each(sponsors, function(index,value) {
	value["color"] = colors[count++ % 6];
	$("#sponsors").append(template(value));
    });

 
});
