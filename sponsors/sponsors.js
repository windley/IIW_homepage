
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
 {"name": "Gigya",
  "url": "http://www.gigya.com",
  "logo": "sponsors/logos/gigya.jpg",
  "what": "Conference Breakfasts"
 },
 // {"name": "Neustar",
 //  "url": "http://www.neustar.com",
 //  "logo": "sponsors/logos/neustar.png",
 //  "what": "Barista"
 // },
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
 {"name": "NetIQ",
  "url": "https://www.netiq.com/",
  "logo": "sponsors/logos/netiq.png",
  "what": "Afternoon Break and Open Space Gifting"
 },
 {"name": "Yubico",
  "url": "https://www.yubico.com/",
  "logo": "sponsors/logos/yubico.png",
  "what": "Afternoon Break"
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
