
var sponsors = [
 {"name": "Neustar",
  "url": "http://www.neustar.com/",
  "logo": "sponsors/logos/neustar.png",
  "what": "Barista",
  "color": "tile-teal"
 },
 {"name": "Microsoft",
  "url": "http://www.microsoft.com/",
  "logo": "sponsors/logos/MSFT.png",
  "what": "Conference Dinner",
  "color": "tile-blue"
 },
 {"name": "Google",
  "url": "http://www.google.com/",
  "logo": "sponsors/logos/GOOG.jpg",
  "what": "Lunch & Doc Center",
  "color": "tile-pink"
 },
 {"name": "Gigya",
  "url": "http://www.gigya.com/",
  "logo": "sponsors/logos/gigya.jpg",
  "what": "Morning Breaks",
  "color": "tile-sun-flower"
 },
 {"name": "Salesforce",
  "url": "http://www.salesforce.com",
  "logo": "sponsors/logos/salesforce.png",
  "what": "Lunch",
  "color": "tile-wisteria"
 },
 {"name": "ForgeRock",
  "url": "http://www.forgerock.com",
  "logo": "sponsors/logos/forgerock.png",
  "what": "Reception",
  "color": "tile-carrot"
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


$( document ).ready(function() {
 
    jQuery.each(sponsors, function(index,value) {
	var source   = $("#sponsor-template").html();
	var template = Handlebars.compile(source);
	$("#sponsors").append(template(value));
    });

 
});
