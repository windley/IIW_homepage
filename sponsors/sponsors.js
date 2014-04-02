
var sponsors = [
 {"name": "Neustar",
  "url": "http://www.neustar.com/",
  "logo": "sponsors/logos/neustar.png",
  "what": "Barista"
 },
 {"name": "Microsoft",
  "url": "http://www.microsoft.com/",
  "logo": "sponsors/logos/MSFT.png",
  "what": "Conference Dinner"
 },
 {"name": "Google",
  "url": "http://www.google.com/",
  "logo": "sponsors/logos/GOOG.jpg",
  "what": "Lunch & Doc Center"
 },
 {"name": "Gigya",
  "url": "http://www.gigya.com/",
  "logo": "sponsors/logos/gigya.jpg",
  "what": "Morning Breaks"
 },
 {"name": "Salesforce",
  "url": "http://www.salesforce.com",
  "logo": "sponsors/logos/salesforce.png",
  "what": "Lunch"
 },
 {"name": "ForgeRock",
  "url": "http://www.forgerock.com",
  "logo": "sponsors/logos/forgerock.png",
  "what": "Reception"
 },
 {"name": "Yubico",
  "url": "http://www.yubico.com/",
  "logo": "sponsors/logos/yubico.png",
  "what": "Break"
 },
 {"name": "IoPT Consulting",
  "url": "https://ioptconsulting.com/",
  "logo": "sponsors/logos/iopt.png",
  "what": "Gifting"
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
